import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import ReviewTable from './ReviewTable';

const Review = () => {
    useTitle('Reviews');
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const [rev, setRev] = useState([]);

    useEffect(() => {
        fetch(`https://mechanical-engineering-service-server.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
        console.log(review)
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order');
        if(proceed){
            fetch(`https://mechanical-engineering-service-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remainingReview = rev.filter(re => re._id !== id);
                    setRev(remainingReview)
                }
            })
            
        }
    }

    return (
        <div>
            <h1 className='text-5xl'></h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Delete</th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Reviews</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            review.map(rev => <ReviewTable
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                            ></ReviewTable>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Review;
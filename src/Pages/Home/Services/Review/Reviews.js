import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../../hooks/useTitle';


const Reviews = ({ params }) => {
    useTitle('Reviews');
    const notify = () => toast("Your Review has been placed Successfully");
    const { user } = useContext(AuthContext);
    const { _id, title, price, picture, rating, description } = useLoaderData();

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'undefined';
        const url = form.url.value;
        const message = form.message.value;

        const review = {
            service: _id,
            reviewTitle: title,
            price,
            userName: name,
            email,
            url,
            message

        }

        fetch('https://mechanical-engineering-service-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert('Your Review has been placed Successfully')
                    notify()
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold py-5 text-orange-600'>Your are about to <span className='text-green-600 font-extrabold'>{title}</span></h1>
            <div className="card w-full glass">
                <figure><img className='rounded-lg w-full' src={picture} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-left mb-5'>{description}</p>
                    <div className='flex flex-auto bg-black py-12 font-bold text-3xl text-orange-600'>
                        <p>Price : ${price}</p>
                        <p>Rating : {rating} </p>
                    </div>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <form onSubmit={handleReview} className='rounded-lg shadow-lg shadow-black shadow-inner bg-green-200 mb-5 px-5'>
            <ToastContainer/>
                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-4  pt-10 '>
                    <input required name='firstName' type="text" placeholder='First Name' className='input input-ghost w-full border-spacing-2 bg-orange-600 text-white font-extrabold' />
                    <input name='lastName' type="text" placeholder='Last Name' className='input input-ghost w-full border-spacing-2 bg-orange-600 text-white font-extrabold ' />
                    <input required name='email' type="Email" placeholder='Your Email' defaultValue={user?.email} readOnly className='input input-ghost w-full border-spacing-2 bg-orange-600 text-white font-extrabold' />
                    <input name='url' type="url" placeholder='Image url' className='input input-ghost w-full border-spacing-2 bg-orange-600 text-white font-extrabold ' />
                </div>
                <textarea name='message' className="textarea textarea-accent w-full mt-5 border-spacing-2 bg-orange-600 text-white font-extrabold" placeholder="Wright Your Review"></textarea>
                <input type="submit" className="btn btn-primary mb-5" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default Reviews;
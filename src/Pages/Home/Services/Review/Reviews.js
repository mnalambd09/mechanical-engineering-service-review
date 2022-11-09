import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Reviews = ({ params }) => {
    const { _id, title, price, picture, rating, description } = useLoaderData()
    
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
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
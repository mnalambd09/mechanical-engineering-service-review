import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ServiceCard = ({ service }) => {
    useTitle('Service Care');
    const {_id, title, picture, rating, description, price } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-48 rounded-lg' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 200)}....</p>
                <div className='flex flex-auto'>
                    <p className='font-bold text-2xl'>Price : $<span className='text-orange-600'>{price}</span></p>
                    <p className='font-bold text-2xl'>Rating : <span className='text-orange-600'>{rating}</span></p>
                </div>
                <div className="card-actions justify-center ">
                   <Link to={`/reviews/${_id}`}>
                   <button className="btn btn-success bg-green-600 text-white font-bold w-full">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
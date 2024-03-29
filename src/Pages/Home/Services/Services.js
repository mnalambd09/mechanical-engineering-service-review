import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect( () => {
        fetch('https://mechanical-engineering-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-5xl mb-10 font-bold text-orange-600 '>All of My Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
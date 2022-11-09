import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect( () => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
            
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>All of My Services</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
import React from 'react';
import Slider from '../Slider/Slider';
import About from './About/About';

const Home = () => {
    return (
        <div className='text-5xl'>
            <Slider></Slider>
            <About></About>
            <h1>Hello From Home</h1>
        </div>
    );
};

export default Home;
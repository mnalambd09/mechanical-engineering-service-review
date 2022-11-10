import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../Services/Services';

import Slider from '../Slider/Slider';
import About from './About/About';
import Progress from './Progress/Progress';

const Home = () => {
    useTitle('Home');
    return (
        <div className='text-5xl'>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Progress></Progress>
        </div>
    );
};

export default Home;
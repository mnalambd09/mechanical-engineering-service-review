import React from 'react';
import person from '../../../../assets/images/about/person.jpg'
import parts from '../../../../assets/images/about/design.png'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img className='rounded-lg shadow-2xl w-4/5 h-full' src={person} alt="" />
                <img className='rounded-lg shadow-2xl absolute w-3/5 right-5 top-2/3 border-8 lg:h-52' src={parts} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl text-orange-600 font-bold'>About Me</p>
                    <h1 className="text-5xl my-5 font-bold">I am a Qualified <br />& experienced <br /> Mechanical Engineer</h1>
                    <p className="py-6 text-xl">Mechanical engineers develop, design, build, test, and inspect mechanical devices and systems, such as machines, tools, and engines. Since mechanical engineering is a very broad field, they work in a variety of different industries designing a wide range of products. Most mechanical engineers work in manufacturing, research and development, or at companies that offer engineering services.</p>
                    <p className="py-6 text-xl">Typically, mechanical engineers have a Bachelor's degree in mechanical engineering or in a related field such as mechanical engineering technology. They need advanced mathematical skills to perform calculations and they need to be able to think creatively.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
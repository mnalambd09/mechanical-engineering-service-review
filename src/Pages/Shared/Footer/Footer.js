import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo1.png';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
  <div>
    <img className='w-36 h-36' src={logo} alt="" />
    
  </div> 
  <div>
    <span className="footer-title">Designing Services</span> 
    <Link to = "/" className="link link-hover">Designing of your Project</Link> 
    <Link to = "/" className="link link-hover">Planing of your Project</Link> 
    <Link to = "/" className="link link-hover">Estimating of Your Project</Link> 
  </div> 
  <div>
    <span className="footer-title">Monitoring Services</span> 
    <Link to = "/" className="link link-hover">Work Monitoring for your Project</Link> 
    <Link to = "/" className="link link-hover">Water Supply Planing</Link> 
    <Link to = "/" className="link link-hover">Ventilation Planing for Your Home</Link> 
    <Link to = "/" className="link link-hover">Pump installation for your Project</Link> 
  </div> 
  <div>
    <span className="footer-title">Copyright &copy; </span> 
    <Link to = "/" className="link link-hover">Terms of use</Link> 
    <Link to = "/" className="link link-hover">Privacy policy</Link> 
    <Link to = "/" className="link link-hover">All Right Reserved &copy; 2022</Link>
  </div>
</footer>
    );
};

export default Footer;
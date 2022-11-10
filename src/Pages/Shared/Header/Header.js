import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import logo from '../../../logo1.png';


const Header = () => {
    useTitle('Header');
    const {user, logOut } = useContext(AuthContext)
    console.log(user)
    

    const handleSignOut = () => {
        logOut()
            .then( () => {})
            .catch(error => console.log(error))
           
    }

    const menuitems = <>
        <li className='font-bold'><Link to='/home'>Home</Link></li>
        {
            user?.email ?
            <>
            <li onClick={handleSignOut} className='font-bold'><Link to='/'>Logout</Link></li>
            <li className='font-bold'><Link to='/review'>Reviews</Link></li>
            </>
            :
            <>
            <li className='font-bold'><Link to='/login'>Login</Link></li>
            <li className='font-bold'><Link to='/signup'>SignUp</Link></li>
            
            </>
            
        }
       
        
        <li className='font-bold'><Link to='/blog'>Blog</Link></li>
        <img src={user?.photoUrl} alt="" />
        
    </>
    return (
        
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitems}
                        
                    </ul>
                    
                </div>
                <Link to="/"> <img className='w-24 h-24' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuitems}
                </ul>
            </div>
            <div className="navbar-end">
            
            <p>Hi {user?.displayName}</p>
                {/* <a className="btn">Hire Me</a> */}
                <img src={user?.photoUrl} alt="" />
            </div>
        </div>
    );
};

export default Header;
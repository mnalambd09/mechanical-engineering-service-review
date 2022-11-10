import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/signup.jpg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
const SignUp = () => {
    useTitle('Sign Up');

    const {createUser} = useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user); 
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full rounded rounded-xl' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <form onSubmit={handleSignup} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="Password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                            
                        </div>
                    </form>
                    <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
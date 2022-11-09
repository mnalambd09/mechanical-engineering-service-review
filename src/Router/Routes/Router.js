import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Reviews from '../../Pages/Home/Services/Review/Reviews';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/home',
                    element: <Home></Home>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/reviews/:id',
                    element: <Reviews></Reviews>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                
            ]
        }
    ])
    
export default router;
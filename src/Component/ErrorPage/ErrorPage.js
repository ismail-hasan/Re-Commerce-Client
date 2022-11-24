import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/Error.png'

const ErrorPage = () => {
    return (
        <div className='bg-gray-900 flex justify-center items-center h-screen flex-col'>
            <div className='bg-white p-10 rounded'>
                <img className='w-20 mx-auto' src={logo} alt="" />
                <h1 className='text-3xl py-3'>Ooops ,  Look Like A Ghost</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet. <Link className='text-green-500' to="/">Go Back</Link></p>
            </div>
        </div>
    );
};

export default ErrorPage;
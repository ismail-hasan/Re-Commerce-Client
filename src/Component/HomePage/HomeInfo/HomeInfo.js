import React from 'react';
import './HomeInfo.css'

const HomeInfo = () => {
    return (
        <div className='lg:flex gap-10 my-10 mb-10 '>
            <div className='relative w-full lg:w-1/2 font-semibold'>
                <img className='w-full' src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className='absolute top-16 lg:top-[40%] left-0 z-10 text-center'>
                    <h1 className='text-3xl capitalize '>New Arrivals</h1>
                    <p className='pt-5 p-4'>Want a superweapon to ignite your customer’s interest in a product? It’s right under your nose: Take your product’s unique features and turn them into benefits.</p>
                </div>
            </div>
            <div className='relative w-full lg:w-1/2 text-white font-semibold'>
                <img className='w-full' src="https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className='absolute top-16 lg:top-[40%] left-0 z-10 text-center'>
                    <h1 className='text-3xl capitalize'>ToDay 40% Offer</h1>
                    <p className='pt-5 p-4'>Want a superweapon to ignite your customer’s interest in a product? It’s right under your nose: Take your product’s unique features and turn them into benefits.</p>
                </div>
            </div>


        </div>
    );
};

export default HomeInfo;
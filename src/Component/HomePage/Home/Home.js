import React from 'react';

const Home = () => {
    return (
        <div className='flex items-center h-screen'>
            <div className='w-1/2'>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div className='w-1/2'>
                <img src="https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    );
};

export default Home;
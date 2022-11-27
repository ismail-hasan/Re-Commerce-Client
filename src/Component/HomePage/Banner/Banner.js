import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-black w-full text-white py-16 px-8 my-16 flex justify-between items-center flex-col md:flex-row gap-16' >
            <>
                <div className='w-[100%] md:w-[60%]'>
                    <p className='text-sm capitalize'>just for walton , so fast</p>
                    <h1 className='text-[20px] md:text-[32px] capitalize'>walton product 20% save today</h1>
                    <p className='text-[13px] md:text-[16px] pt-1'>Walton Computer is Producing Quality laptops at a cheaper price in Bangladesh. Walton has five series of laptops in its arsenal. The laptops with the tag 'Made in Bangladesh' are being made at Walton's state-of-the-art facility factory. </p>
                    <Link to={'/catagory/walton'}>
                        <button className='bg-white text-black capitalize font-bold py-3 px-8 mt-5'>shop now</button>
                    </Link>
                </div>
                <div className="form-control w-[100%] md:w-[40%]">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Banner;
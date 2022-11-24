import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';

const Register = () => {
    return (
        <div className="bg-base-200 flex justify-center h-screen items-center">
            <div className='w-1/3'>
                <form className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-center'>
                    <h1 className='py-5 capitalize text-lg'>or sign up using</h1>

                    <button className="btn btn-outline w-full flex items-center" > <AiOutlineGoogle className='text-3xl text-black mr-3' /> Button</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
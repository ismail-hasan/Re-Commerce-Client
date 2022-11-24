import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authProvider } from '../../AuthContext/AuthContext';

const Login = () => {
    const { signIn } = useContext(authProvider)
    const { register, handleSubmit, } = useForm()

    const handleLogin = (data) => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="bg-base-200 flex justify-center h-screen items-center">
            <div className='w-[30%]'>
                <form onSubmit={handleSubmit(handleLogin)} className="">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register('email')} type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register('password')} type="password" placeholder="password" className="input input-bordered" />
                        <div className="label">
                            <div>
                                <p>already have an acount <Link to='/register'>register</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;
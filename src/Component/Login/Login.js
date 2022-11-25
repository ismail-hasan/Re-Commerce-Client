import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authProvider } from '../../AuthContext/AuthContext';
import { AiOutlineGoogle } from 'react-icons/ai';

const Login = () => {
    const { signIn, googleSignIn } = useContext(authProvider)
    const { register, handleSubmit, } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(e => console.log(e))
    }

    const handleGoogle = () => {


        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate("/")

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
                                <p>already have an acount <Link className='text-violet-600 pt-2' to='/register'>register</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-center'>
                    <h1 className='py-5 capitalize text-sm '>or sign up using</h1>

                    <button onClick={handleGoogle} className="btn btn-outline w-full flex items-center" > <AiOutlineGoogle className='text-3xl text-black mr-3' /> Continue With Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;
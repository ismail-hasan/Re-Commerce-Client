import React, { useContext } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authProvider } from '../../AuthContext/AuthContext';
import toast from 'react-hot-toast';


const Register = () => {

    const { createUser, userProfile, googleSignIn } = useContext(authProvider)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()


    const handleRegister = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                handleUserProfile(data.name)
                toast.success('user added success')


            })
            .catch(e => console.log(e))

    }


    const handleUserProfile = (name) => {
        const profile = {
            displayName: name

        };

        userProfile(profile)
            .then(() => { })
            .catch(e => {
                console.log(e)



            })
    };

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
            <div className='w-1/3'>
                <form onSubmit={handleSubmit(handleRegister)} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required  {...register('name')} type="text" placeholder="User Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required  {...register('email')} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required  {...register('password')} type="text" placeholder="password" className="input input-bordered" />

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick the best fantasy franchise
                            </span>
                        </label>
                        <select  {...register('roll')} className="select select-bordered">

                            <option>Buyer Acount</option>
                            <option>Seller Acount</option>

                        </select>

                    </div>

                    <div>
                        <p className='mt-2'>already have an acount <Link className='text-violet-600' to='/login'>Login</Link> </p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-center'>
                    <h1 className='py-5 capitalize text-sm'>or sign up using</h1>

                    <button onClick={handleGoogle} className="btn btn-outline w-full flex items-center" > <AiOutlineGoogle className='text-3xl text-black mr-3' /> Continue With Google</button>
                </div>
            </div>
        </div >
    );
};

export default Register;
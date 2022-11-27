import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import AuthContext, { authProvider } from '../../../AuthContext/AuthContext';

const AddProduct = () => {

    const { user } = useContext(authProvider)
    const date = new Date()

    const handleProduct = (e) => {
        e.preventDefault()

        const form = e.target
        const userName = form.productName.value
        const productName = form.userName.value
        const originalPrice = form.originalPrice.value
        const sellPrice = form.sellPrice.value
        const productPhone = form.phone.value
        const userLocation = form.location.value
        const email = form.email.value
        const brand = form.catagory.value
        const photo = form.photoURL.value
        const used = form.used.value



        const productData = {
            productName,
            userName,
            originalPrice,
            sellPrice,
            productPhone,
            userLocation,
            brand,
            photo,
            date,
            email,
            used,
            advatise: false,
        }
        console.log(productData)
        //


        fetch('http://localhost:5000/allLaptop', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('product added success')
                    form.reset()
                }
                else {
                    toast.error('already product added')

                }
                console.log(data)

            })
        //


    }

    return (
        <div>
            <h1 className='text-xl md:3xl ml-5 font-semibold py-4 capitalize'>add a product</h1>
            <form onSubmit={handleProduct} action="" className='w-[90%] md:w-[80%] lg:w-[50%] mx-auto ml-5 border border-5 p-3'>
                <input name='productName' defaultValue={user?.displayName} disabled readOnly required type="text" placeholder="User Name" className="input input-bordered mt-5 input-accent w-full" />

                <input name='email' defaultValue={user?.email} disabled readOnly required type="email" placeholder="Email" className="input input-bordered mt-5 input-accent w-full" />

                <input name='userName' required type="text" placeholder="Product Name" className="input input-bordered mt-5 input-accent w-full" />

                <input name='originalPrice' required type="number" placeholder="Product Original Price" className="input input-bordered mt-5 input-accent w-full" />

                <input name='sellPrice' required type="number" placeholder="Product Sell Price" className="input input-bordered mt-5 input-accent w-full" />


                <select name='catagory' className="select select-accent w-full mt-2">

                    <option>samsung</option>
                    <option>assus</option>
                    <option>walton</option>
                </select>

                <input name='photoURL' required type="text" placeholder="Photo URL" className="input input-bordered mt-5 input-accent w-full" />



                <input required name='phone' type="number" placeholder="Phone Number" className="input input-bordered mt-5 input-accent w-full" />

                <input required name='location' type="text" placeholder="Location" className="input input-bordered mt-5 input-accent w-full" />
                <input required name='used' type="number" placeholder="Used Month" className="input input-bordered mt-5 input-accent w-full" />

                <button className="btn btn-black text-white btn-md my-5">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authProvider } from '../../AuthContext/AuthContext';


const Modal = ({ product, setProduct }) => {
    const { user } = useContext(authProvider)
    const { sellPrice, productName } = product



    const formHandle = e => {
        e.preventDefault()
        const form = e.target
        const userName = form.username.value
        const userEmail = form.email.value
        const userPhone = form.phone.value
        const userLocation = form.location.value
        const producPrice = form.price.value

        const formData = {
            userName,
            userEmail,
            userPhone,
            userLocation,
            producPrice,
            productName
            // ProductName: name

        }

        fetch('https://re-commerce.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('product added')
                    setProduct(null)
                }
            })
    }

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={formHandle} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product Name :{productName}</h3>

                    <input name='username' defaultValue={user?.displayName} disabled readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />

                    <input name='email' defaultValue={user?.email} disabled readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />

                    <input name='price' value={`$ ${sellPrice}`} disabled readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />

                    <input required name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-accent w-full my-2" />

                    <input required name='location' type="text" placeholder="Meet Location" className="input input-bordered input-accent w-full my-2" />

                    <button className="btn btn-active">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
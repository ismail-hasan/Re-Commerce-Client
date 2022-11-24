import React, { useContext } from 'react';
import { authProvider } from '../../AuthContext/AuthContext';

const Modal = ({ product }) => {
    const { user } = useContext(authProvider)
    console.log("foo", user)

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product Name :{product.name}</h3>

                    <input defaultValue={user?.displayName} disabled readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />
                    <input defaultValue={user?.email} disabled readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full my-2" />
                    <button className="btn btn-active">Button</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
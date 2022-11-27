import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authProvider } from '../../../AuthContext/AuthContext';



const SellerProduct = () => {
    const { user } = useContext(authProvider)


    const { data: sellerEmails = [] } = useQuery({
        queryKey: ["laptop"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/laptop?email=${user.email}`)
            const data = await res.json()
            return data
        }
    })

    console.log(sellerEmails)

    const handleAdvites = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/advites/${id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('product advertised')
                }
                else {
                    toast.error('product already advertised')

                }
            })
    }


    return (
        <div>
            <h1 className='text-2xl font-semibold py-5 pb-10'>Welcome To <span className='text-3xl text-[tomato]'> {user?.email}</span></h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>Sell Price</th>
                            <th>Advertise</th>
                            <th>Sold</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellerEmails.map((seller, idx) => <tr>
                                <th>{idx + 1}</th>
                                <td>{seller.productName}</td>
                                <td>{seller.brand}</td>
                                <td>$ {seller.sellPrice}</td>
                                <td><button onClick={() => handleAdvites(seller._id)} className='btn btn-xs'>Advertise</button></td>
                                <td> <button className='btn btn-xs'>Sold</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default SellerProduct;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authProvider } from '../../../AuthContext/AuthContext';
import Loder from '../../Loder';

const MyProducts = () => {
    const { user } = useContext(authProvider)


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/book?email=${user?.email}`, {
                headers: {
                    authorization: `bearar ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loder></Loder>
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('product delete success')
                }
                console.log(data)
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold py-4 capitalize'>my products</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, idx) => <tr key={product._id}>
                                <th>{idx + 1}</th>
                                <td className='capitalize'>{product.ProductName}</td>
                                <td>{product.producPrice}</td>
                                <td>{product.userLocation}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-xs">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
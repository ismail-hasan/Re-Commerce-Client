import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loder from '../../Loder';

const AllBuyer = () => {



    const { data: allData = [], isLoading, refetch } = useQuery({
        queryKey: ["allusers"],
        queryFn: async () => {
            const res = await fetch(`https://re-commerce.vercel.app/userroll?roll=Buyer`)
            const data = await res.json()
            return data
        }
    })

    console.log(allData)

    if (isLoading) {
        return <Loder></Loder>
    }

    const handleDelete = (id) => {
        fetch(`https://re-commerce.vercel.app/allusers/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error('user delete sucess')
                    refetch()

                }
                console.log(data)
            })
    }
    // const handleVarify = (id) => {
    //     fetch(`https://re-commerce.vercel.app/allusers/varify/${id}`, {
    //         method: "PUT"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 toast.success('user varifyed')
    //                 refetch()

    //             }
    //         })
    // }

    return (
        <div>
            <h1 className='text-3xl font-semibold py-6 capitalize'>All Buyers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allData.map((data, idx) => <tr key={data._id}>
                                <th>{idx + 1}</th>
                                <td >{data.email}</td>
                                <td> {data.name}</td>
                                <td className='font-bold'>{data.roll}</td>
                               

                                {/* <td className='font-bold'>{data?.isvarify !== "varify" && <button disabled={data.roll === "admin"} onClick={() => handleVarify(data._id)} className='btn btn-xs'>Verify</button>}</td> */}

                                <td><button className='btn btn-xs' disabled={data.roll === "admin"} onClick={() => handleDelete(data._id)}>delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyer;
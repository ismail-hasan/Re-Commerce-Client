import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loder from '../../Loder';

const UserAdmin = () => {



    const { data: allData = [], isLoading, refetch } = useQuery({
        queryKey: ["allusers"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allusers`)
            const data = await res.json()
            return data
        }
    })

    console.log(allData)

    if (isLoading) {
        return <Loder></Loder>
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/allusers/${id}`, {
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

    return (
        <div>
            <h1 className='text-3xl font-semibold py-6 capitalize'>add a product</h1>

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
                                <td>{data.email}</td>
                                <td>{data.name}</td>
                                <td>{data.roll}</td>
                                <td><button onClick={() => handleDelete(data._id)}>delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserAdmin;
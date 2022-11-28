import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Report = () => {

    const { data: reports = [], refetch } = useQuery({
        queryKey: ["report"],
        queryFn: async () => {
            const res = await fetch(`https://re-commerce.vercel.app/report`)
            const data = await res.json()
            return data
        }
    })
    console.log(reports)


    const handleDelete = (id) => {
        fetch(`https://re-commerce.vercel.app/report/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('reported item delted')
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className='text-lg md:text-3xl font-semibold py-6 capitalize'>Report Product</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reports.map((report, i) => <tr key={report._id}>
                                <th>{i + 1}</th>
                                <td>{report.email}</td>
                                <td>{report.productName}</td>
                                <td>{report.brand}</td>
                                <td><button className='btn btn-xs' onClick={() => handleDelete(report._id)}>Delete</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Report;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
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
    console.log(sellerEmails);

    return (
        <div>
            <h1>Your Product Is Hare</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellerEmails.map(seller => <tr>
                                <th>3</th>
                                <td>{seller.email}</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellerProduct;
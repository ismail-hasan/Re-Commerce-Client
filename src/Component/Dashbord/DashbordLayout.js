import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authProvider } from '../../AuthContext/AuthContext';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Loder from '../Loder';

const DashbordLayout = () => {

    const { user, loading } = useContext(authProvider)
    const [loginUsers, setLoginUsers] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoginUsers(data)
            })
    }, [user?.email])

    if (loading) {
        return <Loder></Loder>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                     
                        {
                            loginUsers?.roll === "Buyer Acount" &&
                            <li><Link to='/dashbord/myproduct'>My Order</Link></li>
                        }

                        {
                            loginUsers?.roll === "Seller Acount" &&
                            <>
                                <li><Link to='/dashbord/addproduct'>Add To Product</Link></li>
                                <li><Link to='/dashbord/sellerprodct'>My Product</Link></li>
                            </>
                        }

                        {
                            loginUsers?.roll === "admin" &&
                            <>

                                <li><Link to='/dashbord/addproduct'>Add To Product</Link></li>
                                <li><Link to='/dashbord/useradmin'>Admin</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default DashbordLayout;
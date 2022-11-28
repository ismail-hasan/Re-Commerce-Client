import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authProvider } from '../../AuthContext/AuthContext';
import Loder from '../../Component/Loder';

const Navbar = () => {
    const { user, LogOut, loading } = useContext(authProvider)

    const handleLogout = () => {

        LogOut()
            .then(() => { })
            .catch(e => console.log(e))
    }
    // if (loading) {
    //     return <Loder></Loder>
    // }

    const Menu = <>
        {
            user?.email ?
                <>
                    <li ><Link to='/home'>Home</Link></li>
                    <li ><Link to='/blog'>Blog</Link></li>
                    <li li > <Link to='/dashbord/myproduct'>Dashbord</Link></li>
                </>
                :
                <>
                    <li ><Link to='/home'>Home</Link></li>
                    <li ><Link to='/blog'>Blog</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar bg-black text-white px-5 md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        {
                            Menu
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case hidden md:block text-[16px] md:text-xl">Re-Commerce</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        Menu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?

                    <>
                        <button onClick={handleLogout}>Log Out</button>

                    </>
                    :
                    <li className='list-none'><Link to='/login'>Login</Link></li>

                }
            </div>
            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;

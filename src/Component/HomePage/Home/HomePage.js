import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authProvider } from '../../../AuthContext/AuthContext';
import AdvertiseModal from '../../Modal/AdvertiseModal';
import Adverties from '../Adverties/Adverties';
import Banner from '../Banner/Banner';
import Catagroy from '../Catagroy/Catagroy';
import Home from './Home';
import img1 from '../../../assests/img1.jpg'
import img2 from '../../../assests/img2.jpg'

import './HomePage.css'

const HomePage = () => {
    const { user } = useContext(authProvider)
    const cataData = [
        {
            id: 1,
            name: "samsung",
            backgroundColor: "bg-green-500",
            catagory: "samsung",
            dec: "Shop Samsung line of Galaxy Books, including any laptops",
            img: img1
        },
        {
            id: 2,
            name: "walton",
            catagory: "walton",
            backgroundColor: "bg-blue-500",
            dec: "Save instantly with walton desktop tablet and laptop",
            img: img2 

        },
        {
            id: 3,
            catagory: "assus",
            name: "assus",
            backgroundColor: "bg-red-500",
            dec: "Buy assus Laptop at the best price in Bangladesh",
            img: img1

        },

    ]

    //advatise data 

    const [advatiesData, setadvatiesData] = useState([])
    const [advertiseShareData, setAdvertiseShareData] = useState(advatiesData)

    useEffect(() => {
        axios.get(`https://re-commerce.vercel.app/advites`)
            .then(data => {
                setadvatiesData(data.data)
            })
    }, [])

    return (
        <div className='px-[20px] md:px-[60px] my-10'>
            <Home></Home>
            <h1 className='text-center font-semibold text-3xl capitalize pb-9'>Latest Catagory</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16'>
                {
                    cataData.map(data => <Catagroy data={data} key={data.id}></Catagroy>)
                }
            </div>
            <Banner></Banner>
            {
                user?.email ?
                    <>
                        <div className=''>
                            {
                                advatiesData.length > 0 &&
                                <h1 className='text-center font-semibold text-3xl capitalize pb-9'>advertise Product</h1>
                            }

                            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-10 '>
                                {
                                    advatiesData.map(advatise => <Adverties
                                        key={advatise._id}
                                        advatise={advatise}
                                        setAdvertiseShareData={setAdvertiseShareData}
                                    ></Adverties>)
                                }
                                {
                                    advertiseShareData &&
                                    <AdvertiseModal
                                        advertiseShareData={advertiseShareData}
                                        setAdvertiseShareData={setAdvertiseShareData}>
                                    </AdvertiseModal>
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <h1 className='text-lg text-red-500'>First Login Then See Advertise Product</h1>
                    </>
            }

        </div>
    );
};

export default HomePage;
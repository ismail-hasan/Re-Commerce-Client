import React, { useEffect, useState } from 'react';
import Adverties from '../Adverties/Adverties';
import Catagroy from '../Catagroy/Catagroy';
import Home from './Home';

const HomePage = () => {

    const cataData = [
        {
            id: 1,
            name: "samsung",
            backgroundColor: "bg-green-500",
            catagory: "samsung",
        },
        {
            id: 2,
            name: "walton",
            catagory: "walton",
            backgroundColor: "bg-blue-500",
        },
        {
            id: 3,
            catagory: "assus",
            name: "assus",
            backgroundColor: "bg-red-500",
        },

    ]

    //advatise data 

    const [advatiesData, setadvatiesData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/advites`,)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setadvatiesData(data)
            })
    }, [])

    return (
        <div className='px-[80px] my-10'>
            <Home></Home>
            <h1 className='text-center font-semibold text-3xl capitalize pb-9'>Latest Catagory</h1>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-10 mb-32'>
                {
                    cataData.map(data => <Catagroy data={data} key={data.id}></Catagroy>)
                }
            </div>

            <div>
                <h1 className='text-center font-semibold text-3xl capitalize pb-9'>Latest Catagory</h1>
                {
                    advatiesData.map(advatise => <Adverties
                        advatise={advatise}
                        key={advatise._id}
                    ></Adverties>)
                }
            </div>

        </div>
    );
};

export default HomePage;
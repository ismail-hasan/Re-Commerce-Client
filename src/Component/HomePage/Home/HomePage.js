import React from 'react';
import Catagroy from '../Catagroy/Catagroy';
import Home from './Home';

const HomePage = () => {

    const cataData = [
        {
            id: 1,
            name: "samsung",
            backgroundColor: "red",
            catagory: "samsung",
        },
        {
            id: 1,
            name: "walton",
            catagory: "walton",
            bg: "#444"
        },
        {
            id: 3,
            catagory: "assus",
            name: "assus",
            bg: "#444"
        },

    ]

    return (
        <div className='px-[80px] my-10'>
            <Home></Home>
            <h1 className='text-center font-semibold text-3xl capitalize pb-9'>Latest Catagory</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    cataData.map(data => <Catagroy data={data} key={data.id}></Catagroy>)
                }
            </div>

        </div>
    );
};

export default HomePage;
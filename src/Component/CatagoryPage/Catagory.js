import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';
import CatagoryList from './CatagoryList';

const Catagory = () => {
    const productDatas = useLoaderData()
    // const [product, setProduct] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/alllaptops/${}`)
    // }, [])



    return (
        <div className='grid grid-cols-3 gap-10 py-20 px-[70px]'>
            {
                productDatas.map(productData => <CatagoryList
                // key={productData._id}
                // product={product}
                // setProduct={setProduct}
                ></CatagoryList>)
            }
            {/* <Modal product={product}></Modal> */}

        </div>
    );
};

export default Catagory;
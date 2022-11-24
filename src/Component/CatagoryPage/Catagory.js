import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryList from './CatagoryList';

const Catagory = () => {
    const productDatas = useLoaderData()

    return (
        <div>
            {
                productDatas.map(productData => <CatagoryList
                    key={productData._id}
                    productData={productData}
                ></CatagoryList>)
            }
        </div>
    );
};

export default Catagory;
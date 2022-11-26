import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authProvider } from '../../AuthContext/AuthContext';
import Modal from '../Modal/Modal';
import CatagoryList from './CatagoryList';
import VarifyUser from './VarifyUser';

const Catagory = () => {
    const productDatas = useLoaderData()
    const [product, setProduct] = useState(productDatas)



    return (
        <div className='grid grid-cols-3 gap-10 py-20 px-[70px]'>
            {
                productDatas.map(productData => <CatagoryList
                    key={productData._id}
                    productData={productData}
                    setProduct={setProduct}
                ></CatagoryList>)
            }
            {
                product &&
                <Modal

                    product={product}
                    setProduct={setProduct}
                ></Modal>
            }

        </div>
    );
};

export default Catagory;
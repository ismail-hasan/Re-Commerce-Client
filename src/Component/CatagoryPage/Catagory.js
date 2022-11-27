import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authProvider } from '../../AuthContext/AuthContext';
import Modal from '../Modal/Modal';
import CatagoryList from './CatagoryList';

const Catagory = () => {
    const productDatas = useLoaderData()
    const [product, setProduct] = useState(null)



    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-10 md:px-[70px]'>
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
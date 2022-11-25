import React from 'react';

const CatagoryList = ({ productData, setProduct }) => {
    const { name, brand, price, photo, date, userName } = productData


    return (
        <div className='border pb-10'>
            <img className='h-[250px]' src={photo} alt="" />
            <div className='px-2'>
                <h1 className='pt-4 capitalize'>Product Name : {name}</h1>
                <h1 className='text-sm font-bold capitalize'>Brand : {brand}</h1>
                <p>Seller Name : {userName}</p>
                <p className='text-lg text-[tomato] font-bold'>Original Price : $ 533</p>
                <p>Sell Price : $ {price}</p>
                <p className=''>Used : 5 Month </p>
                <p className='pb-5'>Post Date: {date}</p>
                <label onClick={() => setProduct(productData)} htmlFor="my-modal-3" className="bg-gray-700 px-5 rounded-sm py-2 cursor-pointer text-white text-lg">Purses Now</label>
            </div>
        </div>
    );
};

export default CatagoryList;
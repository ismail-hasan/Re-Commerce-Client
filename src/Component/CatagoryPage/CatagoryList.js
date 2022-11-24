import React from 'react';

const CatagoryList = ({ productData, setProduct }) => {
    const { name, brand, _id } = productData
    console.log(productData)

    return (
        <div className='border pb-10'>
            <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className='px-2'>
                <h1 className='pt-4 capitalize'>Product Name : {name}</h1>
                <h1 className='text-sm font-bold capitalize'>Brand : {brand}</h1>
                <del > <p className='text-lg text-[tomato] font-bold'>Original Price : $ 533</p></del>
                <p>Sell Price : $ 533</p>
                <p>Used : 5 Month </p>
                <label onClick={() => setProduct(productData)} htmlFor="my-modal-3" className="btn">open modal</label>
            </div>
        </div>
    );
};

export default CatagoryList;
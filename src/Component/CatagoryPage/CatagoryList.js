import React from 'react';

const CatagoryList = ({ productData }) => {
    const { name, brand } = productData
    console.log(productData)

    return (
        <div>
            <h1>{name}</h1>
            <h1>{brand}</h1>
        </div>
    );
};

export default CatagoryList;
import React from 'react';
import { Link } from 'react-router-dom';

const Catagroy = ({ data }) => {
    const { name, backgroundColor, id, catagory } = data
    console.log(data)
    return (
        <Link to={`/catagory/${catagory}`}>
            <div className='bg-red-600 p-10 text-center text-white'>
                <div className={backgroundColor}>
                    <h1>{name}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Catagroy;
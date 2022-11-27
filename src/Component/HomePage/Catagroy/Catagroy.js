import React from 'react';
import { Link } from 'react-router-dom';

const Catagroy = ({ data }) => {
    const { name, backgroundColor, catagory } = data

    return (
        <div>

            <Link to={`/catagory/${catagory}`}>
                <div className={`${backgroundColor} p-10 text-center text-white`}>
                    <h1 className='text-lg text white capitalize'>{name}</h1>
                    <p>Lorem ipsum dolor sit amet.</p>

                </div>
            </Link>
        </div>
    );
};

export default Catagroy;
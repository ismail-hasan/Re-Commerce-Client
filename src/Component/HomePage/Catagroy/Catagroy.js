import React from 'react';
import { Link } from 'react-router-dom';

const Catagroy = ({ data }) => {
    const { name, backgroundColor, dec, catagory } = data

    return (
        <div>

            <Link to={`/catagory/${catagory}`}>
                <div className={`${backgroundColor}  p-10 text-center text-white`}>
                    <h1 className='text-lg md:text-3xl mb-2 text white capitalize'>{name}</h1>
                    <p>{dec}</p>

                </div>
            </Link>
        </div>
    );
};

export default Catagroy;
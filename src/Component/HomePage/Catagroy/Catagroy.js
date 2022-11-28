import React from 'react';
import { Link } from 'react-router-dom';

const Catagroy = ({ data }) => {
    const { name, backgroundColor, dec, catagory, img } = data

    return (
        <div>

            <Link to={`/catagory/${catagory}`}>
                <div style={{ backgroundImage: `url(${img})` }} className={`${backgroundColor}   p-10 text-center text-white`}>
                    <h1 className='text-lg md:text-3xl mb-2 text white capitalize'>{name}</h1>
                    <p>{dec}</p>


                </div>
            </Link>
        </div>
    );
};

export default Catagroy;
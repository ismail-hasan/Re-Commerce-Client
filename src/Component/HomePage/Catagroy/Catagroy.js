import React from 'react';
import { Link } from 'react-router-dom';

const Catagroy = ({ data }) => {
    const { name, dec, catagory, img } = data

    return (
        <div>

            <Link to={`/catagory/${catagory}`}>
                <div className="card h-[260px] w-full  bg-base-100 shadow-xl image-full text-center">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className=" text-center flex items-center flex-col justify-center px-5 z-10 text-white">
                        <h2 className="text-[35px] capitalize font-semibold">{name}</h2>
                        <p>{dec}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Catagroy;
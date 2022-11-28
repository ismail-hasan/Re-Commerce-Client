import toast from "react-hot-toast";

const Adverties = ({ advatise, setAdvertiseShareData }) => {
    const { _id, health, userLocation, userName, originalPrice, brand, sellPrice, photo, date, productName, used } = advatise


    const handleReport = (id) => {
        console.log(id)
        fetch(`https://re-commerce.vercel.app/report/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("product reported success")
                }
                else {
                    toast.error("product alreay repoted")

                }
                console.log(data)
            })
    }
    return (

        <div className='border pb-5' >
            <img className='h-[250px] mb-3' src={photo} alt="" />
            <div className='px-2'>
                <div className="flex">
                    <button className="btn btn-xs text-[10px] mr-10">{brand}</button>
                    <button className="btn btn-xs text-[10px] mr-10">{health}</button>
                    <button onClick={() => handleReport(_id)} className="btn btn-xs text-[10px]">report</button>
                </div>
                <h1 className='pt-4 capitalize font-semibold text-[20px]'> Name : {productName}</h1>
                <p className='text-lg text-[tomato] font-bold'>Original Price : $ {originalPrice}</p>
                <p className="">Sell Price : $ {sellPrice} </p>
                <p>Seller Name : {userName}</p>
                <p className=''>Used : {used} Month </p>
                <p >Post Date: {date.slice(0, 10)}</p>
                <p className='pb-5'>Location : {userLocation}</p>

                <label onClick={() => setAdvertiseShareData(advatise)} htmlFor="my-modal-4" className="bg-gray-700 px-5 rounded-sm py-2 cursor-pointer text-white text-lg">Purses Now</label>

            </div>
        </div>

    );
};

export default Adverties;



const Adverties = ({ advatise, setAdvertiseShareData }) => {
    const { userName, originalPrice, brand, sellPrice, photo, date, productName } = advatise
    console.log(advatise)

    return (
        <div className='border pb-5'>
            <img className='h-[250px]' src={photo} alt="" />
            <div className='px-2'>
                <button className="btn btn-xs text-[10px]">{brand}</button>
                <h1 className='pt-4 capitalize font-semibold text-[20px]'>Product Name : {productName}</h1>
                <p className='text-lg text-[tomato] font-bold'>Original Price : $ {originalPrice}</p>
                <p className="">Sell Price : $ {sellPrice} </p>
                <p>Seller Name : {userName}</p>
                <p className=''>Used : 5 Month </p>
                <p className='pb-5'>Post Date: {date.slice(0, 10)}</p>
                <label onClick={() => setAdvertiseShareData(advatise)} htmlFor="my-modal-4" className="bg-gray-700 px-5 rounded-sm py-2 cursor-pointer text-white text-lg">Purses Now</label>
            </div>
        </div>
    );
};

export default Adverties;
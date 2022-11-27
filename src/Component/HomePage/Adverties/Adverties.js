


const Adverties = ({ advatise }) => {
    const { userName } = advatise
    console.log(advatise)

    return (
        <div className='border pb-10'>
            {/* <img className='h-[250px]' src={photo} alt="" /> */}
            <div className='px-2'>
                <h1>{userName}</h1>

            </div>
        </div>
    );
};

export default Adverties;
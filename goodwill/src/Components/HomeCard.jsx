import React from 'react'


const HomeCard = ({ image, title, description }) => {
    return (
        <div className='shadow-md shadow-blue-300 my-4 '>
            <div className=" md:flex bg-[#00040f] text-white">
                <div className="mb-4 mx-2 mt-2">
                    <img className="   rounded-2xl mx-auto shadow-lg shadow-black" src={image} alt={image} />
                </div>
                <div className="m-2  flex flex-col ">
                    <div className="my-4 mx-4">
                        <h1 className="text-blue-400 text-3xl md:text-4xl">{title}</h1>
                    </div>
                    <div className='my-2 mx-4'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard
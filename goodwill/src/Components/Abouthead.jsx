import React from 'react'
import saraswatimaa from '../assets/saraswatimaa.png'

const Abouthead = () => {
    return (
        <div className=' bg-primary w-10/12  mx-auto md:h-[80vh] mb-10 md:flex md:items-center'>
            <div className='flex flex-col md:flex-row  items-center justify-center'>
                <div className=' flex-1 m-2 p-4 leading-8'>
                    <div className=' m-2 p-2 md:p-4 md:m-4'>
                        <h1 className='text-xl md:text-3xl text-[#0ff0fc]'>Welcome To Our GoodWill Educational Club</h1>
                    </div>
                    <div className='m-2 p-2 md:p-4 md:m-4 md:text[24px] text-[20px]'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni saepe repellat similique minima commodi obcaecati accusantium alias labore, vero, consequuntur ex error laborum numquam qui, quis voluptatum earum tempora!</p>
                    </div>
                </div>
                <div className='p-2 m-4'>
                    <img
                        className='max-h-md max-w-md rounded-full w-[300px] h-[300px] bg-cover object-contain' src={saraswatimaa} />
                </div>
            </div>
        </div>
    )
}

export default Abouthead
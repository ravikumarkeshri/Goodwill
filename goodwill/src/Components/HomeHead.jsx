import React from 'react'
import homeImage from '../assets/saraswatimaa.png'

const HomeHead = () => {
    return (
        <div className='bg-primary h-full  flex  justify-center items-center mt-10 '>
            <div className=' flex flex-col md:flex-row items-center w-full  ' >
                <div className='max-w-2xl  flex flex-1 flex-col justify-end items-center gap-10  ' >
                    <div className=' py-4 mx-4'>
                        <h1 className='text-4xl text-[#04d9FF] font-poppins'>
                            GOODWILL EDUCATIONAL CLUB
                        </h1>
                    </div>
                    <div className=' py-4 mx-4'>
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem, temporibus obcaecati incidunt in animi fugit tempora molestias commodi? Perspiciatis soluta quasi perferendis adipisci, magnam temporibus fugit quo ipsam ratione.
                        </p>
                    </div>
                </div>
                <div className='h-[300px] w-[300px]  mx-auto  mt-20 '>
                    <img src={homeImage} />
                </div>
            </div>
        </div>
    )
}

export default HomeHead
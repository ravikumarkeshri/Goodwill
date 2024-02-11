import React from 'react'
import saraswatimaa from '../assets/saraswatimaa.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import gmail from '../assets/gmail.png'

const ContactHead = () => {
    return (
        <div className='bg-primary flex md:flex-row flex-col w-10/12 mx-auto h-[80vh]'>
            <div className=' flex flex-col flex-1 md:m-10'>
                <div className='text-center p-4'>
                    <h1 className='text-cyan-400 md:text-4xl text-2xl font-bold p-4'>Contact Us</h1>
                    <p className='md:text-xl text-md'> For any related help or information, visit our Center</p>
                </div>

                <div className=' md:m-10 m-2 flex flex-col flex-1 justify-center items-start'>


                    <div className='flex flex-row p-2 mx-2 text-center items-center justify-center'>
                        <img className='md:h-7 md:w-7 h-5 w-5' src={location} alt="" />
                        <h1 className='font-bold md:text-2xl text-lg text-center md:mx-2 mx-1 text-cyan-300'>Address:  </h1>
                        <p className=' md:text-xl text-md text-center mx-2'>Jaiprakash Nagar</p>
                    </div>
                    <div className='flex flex-row p-2 mx-2 text-center items-center justify-center'>
                        <img className='md:h-7 md:w-7 h-5 w-5' src={phone} alt="" />
                        <h1 className='font-bold md:text-2xl text-lg text-center md:mx-2 mx-1 text-cyan-300'>Phone :  </h1>
                        <p className=' md:text-xl text-md text-center mx-2'>8579939157</p>
                    </div>
                    <div className='flex flex-row p-2 mx-2 text-center items-center justify-center'>
                        <img className='md:h-7 md:w-7 h-5 w-5' src={gmail} alt="" />
                        <h1 className='font-bold md:text-2xl text-lg text-center md:mx-2 mx-1 text-cyan-300 '>Email:  </h1>
                        <p className=' md:text-xl text-md text-center mx-2'>goodwill@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className=' my-auto mx-auto md:h-[301px] md:w-[301px] h-[200px] w-[200px]'>
                <img src={saraswatimaa} alt="" />
            </div>

        </div>
    )
}

export default ContactHead
import React from 'react'
import cctv from '../assets/cctv.jpg'
import homeImage from '../assets/saraswatimaa.png'

const BatchHead = () => {
    return (
        // <div>
        //     <div>
        //         <div>
        //             <h1>heading</h1>
        //         </div>
        //         <div>
        //             <p>mapping list</p>
        //             <p>mapping list</p>
        //             <p>mapping list</p>
        //             <p>mapping list</p>
        //             <p>mapping list</p>
        //         </div>
        //     </div>
        //     <div>
        //         <img src={cctv} alt="" />
        //     </div>
        // </div>
        <div className='bg-primary h-full  flex  justify-center items-center mt-10 '>
            <div className=' flex flex-col md:flex-row items-center w-full  ' >
                <div className='max-w-2xl  flex flex-1 flex-col  justify-start  gap-10  ' >
                    <div className=' pt-4 mx-4 '>
                        <h1 className='text-4xl text-[#04d9FF] font-poppins'>
                            CLASSES IN GOODWILL
                        </h1>
                    </div>
                    <div className=' pt-4 mx-4 text-start text-xl'>
                        <p>mapping list</p>
                        <p>mapping list</p>
                        <p>mapping list</p>
                        <p>mapping list</p>
                        <p>mapping list</p>
                    </div>
                </div>
                <div className='h-[300px] w-[300px]  mx-auto  mt-20 '>
                    <img src={homeImage} />
                </div>
            </div>
        </div>
    )
}

export default BatchHead
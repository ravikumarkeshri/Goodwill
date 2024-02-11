import React from 'react'
import cctv from '../assets/cctv.jpg'
import { batches } from '../Contants/index.js'

const BatchCard = ({ }) => {
    return (
        <div className='bg-primary text-white my-10'>
            {
                batches.map((batch, index) => (
                    <div className=' flex md:flex-row flex-col justify-between shadow-cyan-400 shadow-sm mb-10'>
                        <div className=' m-2 p-2 flex justify-center items-center ' >
                            <img
                                className='max-w-sm max-h-sm w-[250px] h-[250px] bg-cover rounded-2xl shadow-md shadow-cyan-300 '
                                src={cctv} />
                        </div>



                        <div key={index} className='flex-1 p-4 '>

                            <div className='m-1 p-1 '>
                                <h1 className='text-4xl text-cyan-600 text-center ' >{batch.batchName}</h1>
                            </div>
                            <div className='   flex flex-col md:flex-row justify-evenly items-center'>
                                {
                                    batch.importantBooks.map((book, index) => (
                                        <div key={index} className=' flex-1  p-4'>
                                            <h1 className='text-xl text-cyan-400'>Important Books</h1>
                                            <p>{book.bookname1}</p>
                                            <p>{book.bookname2}</p>
                                            <p>{book.bookname3}</p>
                                            <p>{book.bookname3}</p>
                                            <p>{book.bookname3}</p>
                                          

                                        </div>
                                    ))
                                }
                                <div className='md:border-[1px] md:h-40 sm:hidden border-white my-2'></div>
                                {
                                    batch.batchInfo.map((info, index) => (
                                        <div key={index} className=' flex-1 p-4'>
                                            <h1 className='text-xl text-cyan-400'>Batch Informataion</h1>
                                            <p><span className=''>Class Time : </span>{info.classtime}</p>
                                            <p><span className=''>Fees : </span>{info.fees}</p>
                                            <p><span className=''>Days : </span>{info.Status}</p>

                                        </div>
                                    ))
                                }


                            </div>
                        </div>


                    </div>
                ))
            }
        </div>
    )
}

export default BatchCard
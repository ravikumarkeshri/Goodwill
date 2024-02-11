import React from 'react'
import BatchHead from '../Components/BatchHead'
import BatchCard from '../Components/BatchCard'

const BatchPage = () => {
  return (
    <div className='bg-primary h-full  w-10/12 mx-auto'>
      <BatchHead />
      <BatchCard/>
    </div>
  )
}

export default BatchPage
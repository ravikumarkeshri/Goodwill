import React from 'react'
import Abouthead from '../Components/Abouthead'
import AboutMentor from '../Components/AboutMentor'
import AboutHistory from '../Components/AboutHistory'
const AboutPage = () => {
  return (
    <div className='bg-primary flex flex-col'>
      <Abouthead />
      <AboutMentor />
      <AboutHistory/>
    </div>
  )
}

export default AboutPage
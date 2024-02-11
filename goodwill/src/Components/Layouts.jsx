import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
// import SelectionsPage from '../Pages/SelectionsPage'
import BatchPage from '../Pages/BatchPage'


const Layouts = () => {
    return (
        <div className='bg-primary'>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/home" exact element={<HomePage />} />
                <Route path="/about" exact element={<AboutPage />} />
                <Route path="/contact" exact element={<ContactPage />} />
                <Route path="/batch" exact element={<BatchPage />} />
            </Routes>
        </div>
    )
}

export default Layouts
import React, { useState } from "react";
import { navLinks } from "../Contants/index.js"
import { close, menu } from '../assets'
import logo from '../assets/RLogo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-10/12 mx-auto flex justify-end items-center py-4  px-4'>
            <img src={logo} alt="goodwill" className='w-[60px] h-[60px] rounded-full' />
            <ul className='list-none sm:flex hidden justify-end  items-center flex-1'>
                {
                    navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins hover:text-orange-600 font-normal cursor-pointer  text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                            {/* <a href={`#${nav.id}`}>
                                {nav.title}
                            </a> */}
                            <NavLink key={index} to={nav.path}
                                className={({ isActive }) =>
                                    isActive ? 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ' : 'text-white '
                                } >
                                {nav.title}
                            </NavLink>
                        </li>
                    ))

                }


            </ul>
            <div className='sm:hidden  flex flex-1  justify-end items-center  '>
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}

                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {
                            navLinks.map((nav, index) => (
                                <li key={nav.id} className={`font-poppins  font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-orange-400`}>
                                    {/* <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a> */}
                                    <NavLink key={index} to={nav.path}  >
                                        {nav.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>


        </nav>
    )
}

export default Navbar
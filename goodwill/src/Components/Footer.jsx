import React from 'react'
import styles, { layout } from '../style'
import { logo } from '../assets'
import { socialMedia, footerLinks } from '../Contants/index.js'
import logo1 from '../assets/RLogo.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${layout.screenAdjust} ${styles.paddingY} flex-col mx-2`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img src={logo1} alt="HooBankLogo"
            className='w-[100px] h-[100px]  rounded-full' />
          <p className={`${styles.paragraph} mt-4 max-4-[310px] `}>
            A new way to make the payment easy, reliable and secure.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row  justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerLink) => (
              <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                  {footerLink.title}
                </h4>
                <ul className='list-none mt-4'>
                  {footerLink.links.map((link, index) => (
                    <li key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`} >
                      <Link to={link.path} download={link.download} target={link.target}> {link.name}</Link>

                    </li>
                  ))}
                </ul>

              </div>
            ))
          }

        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row pt-6 border-t-[1px] justify-between items-center'>
        <p className={`${styles.paragraph} text-center mt-4 text-white max-4-[310px] `}>
          <span className='text-cyan-300 underline'>StudentWale Developers</span> All rights reserved
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {
            socialMedia.map((social, index) => (
              <img
                key={social.index}
                src={social.icon}
                alt={social.id}
                className={`w-[40px] h-[40px] rounded-xl hover:shadow-md hover:scale-105 transition-all duration-400 hover:shadow-blue-800 object-contain cursor-pointer bg-[#243283] p-2 ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Footer
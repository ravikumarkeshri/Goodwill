import React from 'react'
import HomeHead from '../Components/HomeHead'
import HomeCard from '../Components/HomeCard'
import { homeCardContents } from '../Contants'

const HomePage = () => {
    return (
        <div className='bg-primary h-full  w-10/12 mx-auto'>
            <HomeHead />
            <div>
                {
                    homeCardContents.map((item, id) => (
                        <div key={id}>
                            <HomeCard image={item.image} title={item.title} description={item.description} />
                        </div>
                    ))
                }
            </div>
           
        </div>
    )
}

export default HomePage
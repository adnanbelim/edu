import React from 'react'
import { assets } from '../assets/assets.js'

const OurPolicy = () => {
    return (
        <div className={`flex flex-col md:flex-row gap-8 sm:gap-2 justify-around text-center p-20 text-xs sm:text-sm md:text-base text-white homeBg bg-center bg-no-repeat bg-cover bg-fixed`}>
            <div>
                <img src={assets.access_icon} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Accessible Learning Resources</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Instant Feedback</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <img src={assets.support_icon} alt="" className='w-14 m-auto mb-5' />
                <p className='font-semibold'>Community Support</p>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}

export default OurPolicy
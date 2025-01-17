import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Hero = () => {
    return (
        <div>

            <div className='flex flex-col sm:flex-row border border-gray-400'>
                {/* Hero left side */}
                <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                    <div className='text-[#414141] p-10'>
                        <h1 className="text-2xl lg:text-3xl sm:py-3 leading-relaxed">Latest Education Tools...</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base text-justify'>
                                <q>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eveniet, minus tempore excepturi nam est autem eum laborum dolores nesciunt voluptate magnam reiciendis ullam quisquam sunt. Corrupti obcaecati beatae atque? Quis asperiores perspiciatis ratione ex obcaecati molestiae facere deserunt delectus fugiat, facilis eveniet molestias cum incidunt, ducimus neque unde laboriosam.</q>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Hero right side */}
                <img src={assets.home_main} alt="" className="w-full sm:w-1/2" />
            </div>

            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

                <Title text1={'WHY'} text2={'CHOOSE US'} />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='border border-slate-300 p-3 rounded-lg shadow hover:border-sky-500 hover:bg-[#f5f5f5] cursor-pointer'>
                        <h3 className='text-lg md:text-2xl mb-3'>Experienced Educators</h3>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam cupiditate maxime aspernatur, dicta dolorem quia et dolor quas, ex laboriosam magnam pariatur aliquid facilis asperiores expedita perferendis voluptas vel. Quam.</p>
                    </div>
                    <div className='border border-slate-300 p-3 rounded-lg shadow hover:border-sky-500 hover:bg-[#f5f5f5] cursor-pointer'>
                        <h3 className='text-lg md:text-2xl mb-3'>Affordable Pricing</h3>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam cupiditate maxime aspernatur, dicta dolorem quia et dolor quas, ex laboriosam magnam pariatur aliquid facilis asperiores expedita perferendis voluptas vel. Quam.</p>
                    </div>
                    <div className='border border-slate-300 p-3 rounded-lg shadow hover:border-sky-500 hover:bg-[#f5f5f5] cursor-pointer'>
                        <h3 className='text-lg md:text-2xl mb-3'>24/7 Access to Resources</h3>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam cupiditate maxime aspernatur, dicta dolorem quia et dolor quas, ex laboriosam magnam pariatur aliquid facilis asperiores expedita perferendis voluptas vel. Quam.</p>
                    </div>
                    <div className='border border-slate-300 p-3 rounded-lg shadow hover:border-sky-500 hover:bg-[#f5f5f5] cursor-pointer'>
                        <h3 className='text-lg md:text-2xl mb-3'>Supportive Community</h3>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam cupiditate maxime aspernatur, dicta dolorem quia et dolor quas, ex laboriosam magnam pariatur aliquid facilis asperiores expedita perferendis voluptas vel. Quam.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
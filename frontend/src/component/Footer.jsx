import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="bg-[#f5f5f5] flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-20 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-t p-10">
                <div>
                    <div>
                        <img src={assets.logo} className='mb-5 w-32' alt="" />
                        <p className='w-full md:w-2/3 text-gray-600'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel et esse tenetur officia quam, voluptatum unde maiores nulla facilis veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, animi ipsa ea esse cumque voluptas.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+117-212-31-03</li>
                        <li>contact@education.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center"> Copyright 2024@ forever.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
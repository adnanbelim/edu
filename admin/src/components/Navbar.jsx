import React from 'react'
import { assets } from '../assets/assets.js';
import { Link } from 'react-router-dom';
const Navbar = ({setToken}) => {
    return (
        <div className='bg-[#f5f5f5] flex items-center py-2 px-[4%] justify-between'>
            <Link to='/'><img src={assets.logo} alt="" className='w-36'/></Link>
            <button onClick={() => setToken('')} className='hover:bg-blue-600 bg-[#0d6efd] text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar
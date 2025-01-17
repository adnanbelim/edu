import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

function Sidebar() {
    return (
        <div className='w-[18%] bg-[#f5f5f5] min-h-screen border-r-2 border-t-2 border-white'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                <NavLink to='/add' className='flex items-center gap-3 border border-white border-r-0 px-3 py-2 rounded-1 text-black'>
                    <img src={assets.add_icon} alt="" className='w-5 h-5' />
                    <p className="hidden md:block">Add Course</p>
                </NavLink>
                <NavLink to='/list' className='flex items-center gap-3 border border-white border-r-0 px-3 py-2 rounded-1 text-black'>
                    <img src={assets.order_icon} alt="" className='w-5 h-5' />
                    <p className="hidden md:block">Courses List</p>
                </NavLink>
                <NavLink to='/add-event' className='flex items-center gap-3 border border-white border-r-0 px-3 py-2 rounded-1 text-black'>
                    <img src={assets.add_icon} alt="" className='w-5 h-5' />
                    <p className="hidden md:block">Add Event</p>
                </NavLink>
                <NavLink to='/list-event' className='flex items-center gap-3 border border-white border-r-0 px-3 py-2 rounded-1 text-black'>
                    <img src={assets.order_icon} alt="" className='w-5 h-5' />
                    <p className="hidden md:block">Event List</p>
                </NavLink>
                <NavLink to='/enroll' className='flex items-center gap-3 border border-white border-r-0 px-3 py-2 rounded-1 text-black'>
                    <img src={assets.order_icon} alt="" className='w-5 h-5' />
                    <p className="hidden md:block">Enrollment List</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
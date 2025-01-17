import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, userId, setUserId } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setToken('');
        setUserId('')
    }

    const handleSearchBar = () => {
        navigate('/course');
        setShowSearch(!showSearch)
    }

    return (
        <div className='bg-[#f5f5f5] flex items-center justify-between py-5 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[3vw] h-16'>
            <Link to='/'><img src={assets.logo} alt="" className='w-36' /></Link>

            <div className="flex items-center gap-6 ">

                <ul className="hidden sm:flex items-center text-sm gap-5 text-black" >
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/course" className="flex flex-col items-center gap-1">
                        <p>Courses</p>
                    </NavLink>
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>About</p>
                    </NavLink>
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>Contact</p>
                    </NavLink>
                </ul>

                <img onClick={handleSearchBar} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
                <div className="group relative">
                    <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
                    {/* Dropdown Menu */}
                    {
                        token &&
                        <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p onClick={() => navigate(`/enrollment/${userId}`)} className="cursor-pointer hover:text-black">Enrollment</p>
                                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                            </div>
                        </div>
                    }
                </div>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-6 cursor-pointer sm:hidden' />
            </div>

            { /* SideBar for small screen*/}

            <div className={`navbar-small-screen absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="navbar-dromdown flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="navbar-img-div flex items-center justify-between gap-4 p-3 cursor-pointer">
                        <Link to='/'><img src={assets.logo} alt="" className='w-36' /></Link>
                        <img src={assets.dropdown_icon} alt="" className='navbar-img h-4 rotate-180' />
                    </div>
                    <NavLink onClick={() => setVisible(false)} to="/" className='link-small-screen pl-4 py-2 border'>Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/course" className='link-small-screen pl-4 py-2 border'>Course</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/about" className='link-small-screen pl-4 py-2 border'>About</NavLink>
                    <NavLink onClick={() => setVisible(false)} to="/contact" className='link-small-screen pl-4 py-2 border'>Contact</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar
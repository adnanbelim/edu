import axios from 'axios';
import React, { useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

function Login({ setToken }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            // console.log(email, password);
            const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });
            // console.log(response);
            if (response.data.success) {
                setToken(response.data.token);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error('Error occurred: ' + error.message);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className='bg-[#f5f5f5] shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4 text-black'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-semibold text-black mb-2'>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='test@gmail.com' required />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-semibold text-black mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
                    </div>
                    <button type='submit' className='bg-[#0d6efd] text-white py-3 mt-4 p-2 rounded-md w-full hover:bg-blue-600'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
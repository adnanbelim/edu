import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import { backendUrl } from '../App.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

function Add({ token }) {
    const [image1, setImage1] = useState(null);
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();

            // append all data in formData format
            const formData = new FormData();
            formData.append("description", description);
            formData.append("name", name);

            // append image if it exists
            if (image1) formData.append("image1", image1);

            const response = await axios.post(backendUrl + '/api/event/add', formData, { headers: { token } });

            if (response.data.success) {
                toast.success(response.data.message);
                setDescription('');
                setName('');
                setImage1(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='text-sm font-medium text-gray-700 mb-2'>Upload Image</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <div className='w-full'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 border focus:border-gray-300 outline-gray-300 rounded-[4px]' type="text" placeholder='Type here' required />
                </div>
            </div>

            <div className='w-full'>
                <div className='w-full'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Description</p>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 border focus:border-gray-300 outline-gray-300 rounded-[4px]' type="text" placeholder='Type here' required />
                </div>
            </div>

            <button type='submit' className='hover:bg-blue-600 bg-[#0d6efd] text-white py-3 mt-4 p-2 rounded-md'>Add Course</button>
        </form>
    );
}

export default Add;

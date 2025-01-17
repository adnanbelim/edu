import React from 'react'
import { useContext, useState } from 'react';
import axios from 'axios';
import Title from '../component/Title'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const Contact = () => {
  const { backendUrl } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/send-email`, formData);
      alert('Email sent successfully');
      setFormData({ name: '', email: '', number: '', message: '' }); // Reset form after submission
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to send email');
    }
  };

  return (
    <div>
      <div className='border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Title text1={'CONTACT'} text2={'US'} />
        <div className="my-10 flex flex-col justify-around md:flex-row gap-10 mb-28 border h-2/4">
          <div className="flex flex-col justify-center items-start p-5">
            <div className="flex justify-between flex-col gap-4 my-2">
              <p className="font-semibold text-xl text-gray-600">Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder='type here...'
                required
                className='p-1 border w-full sm:w-[400px] focus:outline-sky-400'
              />
            </div>
            <div className="flex justify-between flex-col gap-4 my-2">
              <p className='font-semibold text-xl text-gray-600'>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='type here...'
                required
                className='p-1 border w-full sm:w-[400px] focus:outline-sky-400'
              />
            </div>
            <div className="flex justify-between flex-col gap-4 my-2">
              <p className='font-semibold text-xl text-gray-600'>Number</p>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder='type here...'
                required
                className='p-1 border w-full sm:w-[400px] focus:outline-sky-400'
              />
            </div>
            <div className="flex justify-between flex-col gap-4 my-2">
              <p className="font-semibold text-xl text-gray-600">Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder='type here...'
                required
                className='p-1 border w-full sm:w-[400px] focus:outline-sky-400'
              />
            </div>
            <button
              className="rounded-md bg-[#0d6efd] text-white px-4 py-2 text-lg hover:bg-blue-600 transition-all duration-500 my-2"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
          <div className="flex justify-end w-full">
            <img src={assets.home_image3} alt="" className='w-full md:max-w-[480px]' />
          </div>
        </div>

        <Title text1={'WHY LEARN'} text2={'WITH US'} />
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border border-slate-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:border-sky-300 hover:bg-[#f5f5f5] cursor-pointer">
            <b className='text-gray-600'>Expert Guidance, Every Step of the Way:</b>
            <p>Emphasize your qualified instructors, mentors, or support system that ensures a smooth learning journey.</p>
          </div>
          <div className="border border-slate-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:border-sky-300 hover:bg-[#f5f5f5] cursor-pointer">
            <b className='text-gray-600'>Tailored Learning for Your Goals:</b>
            <p>Highlight how your platform customizes content, courses, or resources to meet individual needs.</p>
          </div>
          <div className="border border-slate-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:border-sky-300 hover:bg-[#f5f5f5] cursor-pointer">
            <b className='text-gray-600'>Proven Success Stories:</b>
            <p>Showcase results, testimonials, or success metrics that demonstrate the effectiveness of your educational approach.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
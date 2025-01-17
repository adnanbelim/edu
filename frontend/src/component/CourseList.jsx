import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const { courses } = useContext(ShopContext); // Get backend URL

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Title text1={'Latest'} text2={'Courses'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    courses.slice(0,5).map((course) => (
                        <Link to='/course'>
                            <div key={course._id} className="border p-4">
                                <div className="overflow-hidden">
                                    <img
                                        src={course.image[0]} // Assuming the first image in the array
                                        alt={course.stream}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <p className="text-sm mt-3">{course.stream}</p>
                                <button className="text-gray-500 bg-transparent hover:text-blue-600 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                                    View Course
                                </button>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CourseList;

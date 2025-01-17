import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // For notifications
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from './Title';
import { Link } from 'react-router-dom';

const EventList = () => {
    const { events } = useContext(ShopContext); // Get backend URL

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Title text1={'Latest'} text2={'Events'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    events.map((event) => (
                       
                            <div key={event._id} className="border p-4">
                                <div className="overflow-hidden">
                                    <img
                                        src={event.image[0]} // Assuming the first image in the array
                                        alt={event.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <p className="text-sm mt-3">{event.name}</p>
                                <p className="text-sm mt-3 test-justify">{event.description}</p>
                            </div>
                       
                    ))
                }
            </div>
        </div>
    );
};

export default EventList;
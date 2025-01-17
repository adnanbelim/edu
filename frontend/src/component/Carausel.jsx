import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Title from './Title';
import { assets } from '../assets/assets';

function Carausel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            name: 'Anny D',
            text: '❝Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem voluptatem in eveniet praesentium nihil!❞',
            rating: 4,
        },
        {
            name: 'Thomson J',
            text: '❝Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem voluptatem in eveniet praesentium nihil!❞',
            rating: 3,
        },
        {
            name: 'Milly W',
            text: '❝Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem voluptatem in eveniet praesentium nihil!❞',
            rating: 4,
        },
    ];

    const totalSlides = slides.length;

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalSlides]);

    const updateIndex = (newIndex) => {
        setCurrentIndex((newIndex + totalSlides) % totalSlides);
    };

    return (
        <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 p-5">
                <div className="relative overflow-hidden w-full">
                    <div
                        id="carousel"
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full flex justify-center items-center">
                                <div className="border rounded-lg shadow bg-black text-white p-10 sm:p-10 md:p-14 w-full max-w-sm">
                                    <b className="text-lg sm:text-2xl">{slide.name}</b>
                                    <div className="inline-flex justify-center my-4">
                                        <p className="text-sm sm:text-base">{slide.text}</p>
                                    </div>
                                    <div className="flex gap-1 sm:gap-2">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <StarIcon
                                                key={starIndex}
                                                className={`h-4 w-4 sm:h-5 sm:w-5 ${starIndex < slide.rating ? 'text-yellow-400' : ''
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => updateIndex(currentIndex - 1)}
                        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={() => updateIndex(currentIndex + 1)}
                        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full"
                    >
                        &#10095;
                    </button>
                </div>
                <div className="flex flex-col justify-center px-5 sm:px-0 text-justify">
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3">
                        Reviews of our students and their parents
                    </h2>
                    <p className="text-sm sm:text-base font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui ipsum ea labore animi magnam
                        placeat cupiditate reprehenderit at maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi sed dolores exercitationem minus soluta possimus veniam aliquid deleniti hic.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Carausel;

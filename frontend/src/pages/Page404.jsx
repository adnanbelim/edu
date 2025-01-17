import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src={assets.eyes}
        alt="Page Not Found"
        className="mb-6 w-80 h-auto"
      />
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">It seems you have lost your way...</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-200"
      >
        Let's head back home.
      </Link>
    </div>
  );
}

export default Page404;

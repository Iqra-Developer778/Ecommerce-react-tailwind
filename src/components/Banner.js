import React from 'react';
import New from './New.jpeg'; 
import { FaCheckCircle } from 'react-icons/fa'; 

const Banner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-white p-8 rounded-lg shadow-lg">
       
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="border border-orange-500 p-4 rounded-lg w-4/5 mx-auto">
            <img 
              src={New} 
              alt="Sale" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

       
        <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Winter Sale Up To 50% Off</h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea qui explicabo possimus.
          </p>
          
    
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheckCircle className="text-purple-500 w-6 h-6 mr-3" />
              <span className="text-gray-700">Quality Products</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 w-6 h-6 mr-3" />
              <span className="text-gray-700">Fast Delivery</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-500 w-6 h-6 mr-3" />
              <span className="text-gray-700">Easy Payment Method</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-pink-500 w-6 h-6 mr-3" />
              <span className="text-gray-700">Get Offers</span>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="w-full mt-8">
        <div className="bg-orange-500 py-6 px-4 text-center">
          <h2 className="text-white text-xl font-semibold mb-4">Get Notified About New Products</h2>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 rounded-l-lg border-none outline-none"
            />
            <button className="bg-white text-orange-500 font-bold px-4 py-2 rounded-r-lg hover:bg-gray-100 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

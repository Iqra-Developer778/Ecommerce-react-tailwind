import React, { useState } from 'react';
import shopping from './shopping.jpg';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa'; 
import Darkmode from './Darkmode';

const Navbar = () => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleOrderClick = () => {
    setIsOrdered(true);
  };

 
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); 
  };

  
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState); 
  };

  return (
    <div className='w-full'>
      <div className={`flex justify-between items-center ${darkMode ? 'bg-blue-500' : 'bg-orange-200'} py-2 px-4 transition-colors duration-300`}>
      
        <div className='flex items-center'>
          <div className='w-12 h-12 rounded-full overflow-hidden'>
            <img src={shopping} className='w-full h-full object-cover' alt='shopping' />
          </div>
          <h1 className='text-2xl font-bold ml-2 text-black dark:text-white'>Shopsy</h1>
        </div>

      
        <nav className="flex space-x-4 text-black dark:text-white">
          <a href="/Home" className="hover:text-gray-500">Home</a>

         
          <div className="relative">
            <button 
              className="hover:text-gray-500 focus:outline-none"
              onClick={toggleDropdown} 
            >
              Trending Wear
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-32 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-10">
                <a href="/Shoes" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Shoes</a>
                <a href="/Shirts" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Shirts</a>
                <a href="/Makeup" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Makeup</a>
              </div>
            )}
          </div>

          <a href="/Purse" className="hover:text-gray-500">Purse</a>
          <a href="/Contact" className="hover:text-gray-500">Contact</a>
        </nav>

  
        <div className='relative flex items-center'>
          <input 
            type="text" 
            placeholder="search" 
            className="w-[200px] sm:w-[200px] rounded-full border border-gray-300 
                       px-4 py-1 focus:outline-none transition-all duration-300 
                       focus:w-[300px] focus:border-gray-400 dark:bg-gray-700 dark:text-white"
          />
          <CiSearch 
            className="absolute right-4 text-gray-500 dark:text-white hover:text-black dark:hover:text-gray-300 cursor-pointer" 
          />
        </div>

       
        <button 
          className='bg-orange-400 hover:bg-orange-500 text-white py-1 px-4 rounded-full flex items-center justify-center'
          onClick={handleOrderClick}
        >
          {isOrdered ? 'Order' : <FaShoppingCart className='text-lg' />}
        </button>
        
       
        <Darkmode onToggle={toggleDarkMode} isDarkMode={darkMode} />
      </div>
    </div>
  );
}

export default Navbar;

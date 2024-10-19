import React from 'react';

const Darkmode = ({ onToggle, isDarkMode }) => {
  return (
    <button 
      onClick={onToggle} 
      className={`py-2 px-4 rounded-full ml-4 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-yellow-400 text-black'}`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default Darkmode;

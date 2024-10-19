import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import { MdLocationOn, MdPhone } from 'react-icons/md'; 

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
   
        <div>
          <h2 className="text-2xl font-semibold text-white">Shopsy</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white">Important Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white">Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          </ul>

          <div className="flex items-center mt-6 space-x-4">
            <FaInstagram className="hover:text-orange-400" />
            <FaFacebookF className="hover:text-orange-400" />
            <FaLinkedinIn className="hover:text-orange-400" />
          </div>

          <div className="mt-4">
            <p className="flex items-center"><MdLocationOn className="mr-2" /> Noida, Uttar Pradesh</p>
            <p className="flex items-center mt-2"><MdPhone className="mr-2" /> +91 123456789</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

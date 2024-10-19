import React, { useState } from 'react';
import shop from './shop.jpg'; 
import lady from './lady.jpg';
import New from './New.jpeg';


const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

 
  const slides = [
    {
      title: '70% off on all Products Sale',
      subtitle: 'Super Offer, Big Sale',
      description: 'Only this week! Don’t miss out on these amazing offers.',
      buttonText: 'Order Now',
      imgSrc: shop, 
    },
    {
      title: '30% all Products Sale',
      subtitle: 'Has a Big Sale',
      description: 'You can buy these thing from here.',
      buttonText: 'Order Now',
      imgSrc: lady, 
    },
    {
      title: '50% all Products Sale',
      subtitle: 'Super Offer, Big Sale',
      description: '! Don’t miss out on these amazing offers.',
      buttonText: 'Order Now',
      imgSrc: New, 
    },
  ];

 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
       <div className={`flex justify-between items-center ${darkMode ? 'bg-blue-500' : 'bg-orange-200'} py-2 px-4 transition-colors duration-300`}></div>
     
      <div
        className="w-full h-full flex items-center justify-between bg-orange-100 transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full flex items-center justify-between px-12">
         
            <div className="w-1/2"> 
              <h1 className="text-5xl font-bold">{slide.title}</h1>
              <h2 className="text-3xl font-semibold mx-14 text-pink-500">{slide.subtitle}</h2>
              <p className="text-lg mx-14 my-4">{slide.description}</p>
              <button className="bg-orange-500 mx-14 text-white py-2 px-6 rounded-full hover:bg-orange-600">
                {slide.buttonText}
              </button>
            </div>
           
            <div className="relative w-1/2 flex justify-center"> 
              <img
                src={slide.imgSrc}
                alt="Sale"
                className="w-3/4 h-auto object-cover mr-[-50px] transform scale-125" 
              />
              <div className="absolute top-0 right-0 bg-yellow-400 text-purple-800 p-4 rounded-lg">
                <h2 className="text-2xl font-bold">Super Offer</h2>
                <h1 className="text-4xl font-bold">Big Sale</h1>
                <p className="mt-2">Only this week</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Hero;

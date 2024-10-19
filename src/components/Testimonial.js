import React, { useState } from 'react';
import New from './New.jpeg'; 

const testimonials = [
  { id: 1, name: "Satya Nadella", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: New },
  { id: 2, name: "Virat Kohli", text: "Eaque recusandae inventore iste ratione ex alias quis magni et optio.", img: New },
  { id: 3, name: "Sachin Tendulkar", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: New },
  { id: 4, name: "Elon Musk", text: "Eaque recusandae inventore iste ratione ex alias quis magni et optio.", img: New },
  { id: 5, name: "Jeff Bezos", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: New },
  { id: 6, name: "Bill Gates", text: "Eaque recusandae inventore iste ratione ex alias quis magni et optio.", img: New },
  { id: 7, name: "Sundar Pichai", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: New },
  { id: 8, name: "Mark Zuckerberg", text: "Eaque recusandae inventore iste ratione ex alias quis magni et optio.", img: New },
  { id: 9, name: "Tim Cook", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: New },
  { id: 10, name: "Larry Page", text: "Eaque recusandae inventore iste ratione ex alias quis magni et optio.", img: New },
];

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;


  const currentCards = testimonials.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  const handleNext = () => {
    if (currentPage < Math.ceil(testimonials.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
      
        <h2 className="text-lg text-orange-500 font-semibold mb-2">What our customers say</h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Testimonial</h3>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus provident error nesciunt.
        </p>

        
        <div className="flex justify-center space-x-6">
          {currentCards.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 mb-4">
                {testimonial.text}
              </p>
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </div>

      
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`px-4 py-2 bg-orange-500 text-white rounded ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= Math.ceil(testimonials.length / cardsPerPage) - 1}
            className={`px-4 py-2 bg-orange-500 text-white rounded ${currentPage >= Math.ceil(testimonials.length / cardsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

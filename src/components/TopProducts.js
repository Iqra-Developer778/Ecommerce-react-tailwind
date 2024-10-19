import React, { useState } from 'react';
import lady from './lady.jpg';
import New from './New.jpeg';
import shop from './shop.jpg'; 

const TopProducts = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const products = [
    {
      id: 1,
      title: 'Casual Wear',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: New,
    },
    {
      id: 2,
      title: 'Printed Shirt',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: lady
    },
    {
      id: 3,
      title: 'Women Shirt',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: shop
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Top Rated Products</h2>
      <div className="flex justify-around">
        {products.map((product) => (
          <div
            key={product.id}
            className={`border rounded-lg shadow-lg p-6 text-center cursor-pointer transition-all w-60 ${
              selectedCard === product.id ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-yellow-500">{'⭐'.repeat(product.rating)}</p>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

import React from 'react';
import lady from './lady.jpg';
import New from './New.jpeg';
import shop from './shop.jpg'; 


const Products = () => {
  const products = [
    {
      name: 'Women Ethnic',
      color: 'white',
      rating: 4.5,
      image: shop
    },
    {
      name: 'Women Western',
      color: 'Red',
      rating: 4.6,
      image: shop
    },
    {
      name: 'Goggles',
      color: 'Brown',
      rating: 4.7,
      image: shop
    },
    {
      name: 'Printed T-Shirt',
      color: 'Yellow',
      rating: 4.4,
      image: shop
    },
    {
      name: 'Fashion T-Shirt',
      color: 'Black',
      rating: 4.8,
      image: shop
    },
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white shadow-md rounded-lg p-4 w-1/5 text-center">
      <img
        src={product.image} // Use the product's image URL
        alt={product.name}
        className="mb-2"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.color}</p>
      <p className="text-yellow-500">{product.rating} ★</p>
    </div>
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Selling Products for you</h2>
      <h3 className="text-xl mb-2">Products</h3>
      <div className="flex justify-around mb-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
     
    </div>
  );
};

export default Products;


import React from 'react';
import Header from './Components/Header/Header';
import Carousel from './Components/Carousel/Carousel';
import ProductCard from './Components/ProductCard/ProductCard';
import './App.css';

const App = () => {
  const products = [
    // This would be replaced with actual product data, possibly fetched from an API
    { id: 1, name: 'Product 1', price: 99.99, imageUrl: 'dummy-image-url-1.jpg' },
    { id: 2, name: 'Product 2', price: 89.99, imageUrl: 'dummy-image-url-2.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="App">
      <Header siteName="Fashionista" />
      <Carousel />
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            productName={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
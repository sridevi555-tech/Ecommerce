

import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

// ProductCard component for displaying individual items
const ProductCard = ({ productName, price, imageUrl }) => (
  <div className="product-card">
    <img src={imageUrl} alt={productName} />
    <div className="product-info">
      <h3>{productName}</h3>
      <p>${price}</p>
    </div>
  </div>
);

ProductCard.propTypes = {
  // productName is the name of the product
  productName: PropTypes.string.isRequired,
  // price is the cost of the product
  price: PropTypes.number.isRequired,
  // imageUrl is the link to the product's image
  imageUrl: PropTypes.string.isRequired
};

export default ProductCard;
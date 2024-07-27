import React, { useState } from 'react';
import './TopProducts.css';

const TopProducts = ({ products, topN }) => {
  const [numToShow, setNumToShow] = useState(topN);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setNumToShow(value);
    }
  };

  const topProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, numToShow);

  return (
    <div className="top-products">
      <h2>Top {numToShow} Products</h2>
      <input
        type="number"
        value={numToShow}
        onChange={handleInputChange}
        min="1"
        max={products.length}
      />
      <ul>
        {topProducts.map(product => (
          <li key={product.productname}>
            <strong>{product.productname}</strong> - ${product.price} - Rating: {product.rating} - Discount: {product.discount}%
            <br />
            <small>Company: {product.companyName}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;

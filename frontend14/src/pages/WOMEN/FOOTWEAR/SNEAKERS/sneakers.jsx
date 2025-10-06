import React from 'react';
import './sneakers.css'; 

// Import sneaker images
import sneaker1 from './1.jpeg';
import sneaker2 from './2.jpeg';
import sneaker3 from './3.jpeg';
import sneaker4 from './4.jpeg';

export const Sneakers = () => {
  // Sneaker product data
  const sneakerProducts = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 79.99,
      colors: ["White", "Black", "Pink"],
      sizes: ["5", "6", "7", "8", "9"],
      description: "Iconic white sneakers with cushioned soles for all-day comfort.",
      images: [sneaker1],
      rating: 4.7,
      reviews: 215
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 99.99,
      colors: ["Blue", "Gray", "Purple"],
      sizes: ["6", "7", "8", "9"],
      description: "High-performance running shoes with breathable mesh and arch support.",
      images: [sneaker2],
      rating: 4.8,
      reviews: 184
    },
    {
      id: 3,
      name: "Chunky Platform Sneakers",
      price: 89.99,
      colors: ["Black", "White", "Silver"],
      sizes: ["5", "6", "7", "8"],
      description: "Trendy platform sneakers with bold soles for a fashion-forward look.",
      images: [sneaker3],
      rating: 4.5,
      reviews: 132
    },
    {
      id: 4,
      name: "Slip-On Canvas Sneakers",
      price: 59.99,
      colors: ["Red", "Navy", "Green"],
      sizes: ["5", "6", "7", "8", "9"],
      description: "Easy-wear slip-on sneakers with elastic sides and lightweight canvas.",
      images: [sneaker4],
      rating: 4.3,
      reviews: 167
    }
  ];

  return (
    <div className="sneakers-container">
      <h1 className="sneakers-header">Women's Sneakers</h1>
      <div className="sneakers-grid">
        {sneakerProducts.map((product) => (
          <div key={product.id} className="sneakers-product-card">
            <div className="product-image-container">
              <img src={product.images[0]} alt={product.name} className="product-main-image" />
              <div className="product-thumbnails">
                {product.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${product.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="product-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({product.reviews})</span>
              </div>
              <p className="product-description">{product.description}</p>
              <div className="product-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {product.colors.map((color) => (
                    <button key={color} className="color-option" style={{ backgroundColor: color.toLowerCase() }} />
                  ))}
                </div>
                <div className="size-options">
                  <span>Sizes: </span>
                  {product.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="wishlist-btn">♡ Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
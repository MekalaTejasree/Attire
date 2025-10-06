import React from 'react';
import './sandels.css'; // Create this CSS file similar to jeans.css

// Import sandal images
import sandal1 from './1.jpeg';
import sandal2 from './2.jpeg';
import sandal3 from './3.jpeg';
import sandal4 from './4.jpeg';

export const Sandals = () => {
  // Product data array
  const sandalProducts = [
    {
      id: 1,
      name: "Strappy Flat Sandals",
      price: 39.99,
      colors: ["Tan", "Black"],
      sizes: ["6", "7", "8", "9"],
      description: "Comfortable flat sandals with adjustable straps for perfect fit.",
      images: [sandal1],
      rating: 4.3,
      reviews: 95
    },
    {
      id: 2,
      name: "Wedge Heel Sandals",
      price: 49.99,
      colors: ["White", "Brown"],
      sizes: ["6", "7", "8"],
      description: "Elegant wedge sandals with cushioned footbed for all-day comfort.",
      images: [sandal2],
      rating: 4.6,
      reviews: 112
    },
    {
      id: 3,
      name: "Gladiator Sandals",
      price: 44.99,
      colors: ["Gold", "Silver"],
      sizes: ["5", "6", "7", "8"],
      description: "Trendy gladiator sandals with multiple straps for a stylish look.",
      images: [sandal3],
      rating: 4.4,
      reviews: 78
    },
    {
      id: 4,
      name: "Flip Flop Sandals",
      price: 24.99,
      colors: ["Blue", "Pink", "Black"],
      sizes: ["5", "6", "7", "8", "9"],
      description: "Casual flip flops with soft footbed and durable outsole.",
      images: [sandal4],
      rating: 4.1,
      reviews: 143
    }
  ];

  return (
    <div className="sandals-container">
      <h1 className="sandals-header">Women's Sandals</h1>
      <div className="sandals-grid">
        {sandalProducts.map((product) => (
          <div key={product.id} className="sandals-product-card">
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

export default Sandals;
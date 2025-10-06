import React from 'react';
import './shoes.css'; 
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import shoe images
import shoe1 from './1.jpeg';
import shoe2 from './2.jpeg';
import shoe3 from './3.jpeg';
import shoe4 from './4.jpeg';

export const Shoes = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const shoeProducts = [
    {
      id: 1,
      name: "Classic Pumps",
      price: 59.99,
      colors: ["Black", "Nude", "Red"],
      sizes: ["5", "6", "7", "8", "9"],
      description: "Timeless pointed-toe pumps with a comfortable 3-inch heel.",
      images: [shoe1],
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "Athletic Sneakers",
      price: 79.99,
      colors: ["White", "Black", "Pink"],
      sizes: ["5", "6", "7", "8"],
      description: "Lightweight running shoes with cushioned support and breathable mesh.",
      images: [shoe2],
      rating: 4.7,
      reviews: 215
    },
    {
      id: 3,
      name: "Ankle Boots",
      price: 89.99,
      colors: ["Brown", "Black", "Tan"],
      sizes: ["6", "7", "8", "9"],
      description: "Chic ankle boots with a low block heel for all-day comfort.",
      images: [shoe3],
      rating: 4.4,
      reviews: 92
    },
    {
      id: 4,
      name: "Ballet Flats",
      price: 49.99,
      colors: ["Black", "Red", "Silver"],
      sizes: ["5", "6", "7", "8"],
      description: "Soft leather flats with cushioned insoles for ultimate comfort.",
      images: [shoe4],
      rating: 4.2,
      reviews: 176
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="shoes-container">
      <h1 className="shoes-header">Women's Shoes</h1>
      <div className="shoes-grid">
        {shoeProducts.map((product) => (
          <div key={product.id} className="shoes-product-card">
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
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <button className="wishlist-btn">♡ Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
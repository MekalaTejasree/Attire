import React from 'react';
import './shoes.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import men's shoe images
import menShoe1 from './1.jpeg';
import menShoe2 from './2.jpeg';
import menShoe3 from './3.jpeg';
import menShoe4 from './4.jpeg';

export const MenShoes = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Men's shoe product data
  const menShoeProducts = [
    {
      id: 1,
      name: "Classic Oxford Shoes",
      price: 129.99,
      colors: ["Black", "Brown", "Burgundy"],
      sizes: ["8", "9", "10", "11", "12"],
      description: "Premium leather oxfords with cushioned insoles for formal occasions.",
      images: [menShoe1],
      rating: 4.6,
      reviews: 187
    },
    {
      id: 2,
      name: "Running Sneakers",
      price: 109.99,
      colors: ["Black", "Blue", "Gray"],
      sizes: ["8", "9", "10", "11", "12"],
      description: "High-performance running shoes with responsive cushioning technology.",
      images: [menShoe2],
      rating: 4.8,
      reviews: 256
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 89.99,
      colors: ["Brown", "Tan", "Black"],
      sizes: ["8", "9", "10", "11"],
      description: "Slip-on loafers with genuine leather uppers for smart-casual wear.",
      images: [menShoe3],
      rating: 4.4,
      reviews: 142
    },
    {
      id: 4,
      name: "Hiking Boots",
      price: 149.99,
      colors: ["Brown", "Black", "Olive"],
      sizes: ["8", "9", "10", "11", "12", "13"],
      description: "Waterproof hiking boots with ankle support and rugged outsoles.",
      images: [menShoe4],
      rating: 4.7,
      reviews: 198
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.images[0], quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-shoes-container">
      <h1 className="men-shoes-header">Men's Shoes</h1>
      <div className="men-shoes-grid">
        {menShoeProducts.map((product) => (
          <div key={product.id} className="men-shoes-product-card">
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

export default MenShoes;
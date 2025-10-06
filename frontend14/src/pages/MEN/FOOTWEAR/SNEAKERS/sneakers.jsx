import React from 'react';
import './sneakers.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import men's sneaker images
import menSneaker1 from './1.jpeg';
import menSneaker2 from './2.jpeg';
import menSneaker3 from './3.jpeg';
import menSneaker4 from './4.jpeg';
import menSneaker5 from './5.jpeg';

export const MenSneakers = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Men's sneaker product data
  const menSneakerProducts = [
    {
      id: 1,
      name: "Pro Running Sneakers",
      price: 129.99,
      colors: ["Black", "Blue", "Gray"],
      sizes: ["8", "9", "10", "11", "12", "13"],
      description: "High-performance running shoes with responsive cushioning and breathable mesh.",
      images: [menSneaker1],
      rating: 4.8,
      reviews: 324,
      features: ["Shock absorption", "Arch support", "Breathable"]
    },
    {
      id: 2,
      name: "Retro Basketball Sneakers",
      price: 119.99,
      colors: ["White", "Red", "Black"],
      sizes: ["8", "9", "10", "11", "12"],
      description: "Classic high-top basketball sneakers with ankle support and vintage styling.",
      images: [menSneaker2],
      rating: 4.7,
      reviews: 278,
      features: ["Ankle support", "Rubber outsole", "Padded collar"]
    },
    {
      id: 3,
      name: "Minimalist Walking Sneakers",
      price: 89.99,
      colors: ["Black", "Navy", "White"],
      sizes: ["7", "8", "9", "10", "11"],
      description: "Lightweight sneakers with flexible soles for natural movement and all-day comfort.",
      images: [menSneaker3],
      rating: 4.5,
      reviews: 196,
      features: ["Zero-drop", "Flexible sole", "Breathable upper"]
    },
    {
      id: 4,
      name: "Trail Running Shoes",
      price: 139.99,
      colors: ["Green", "Black", "Orange"],
      sizes: ["8", "9", "10", "11", "12"],
      description: "Rugged trail runners with aggressive tread and waterproof construction.",
      images: [menSneaker4],
      rating: 4.9,
      reviews: 412,
      features: ["Waterproof", "Vibram sole", "Toe protection"]
    },
    {
      id: 5,
      name: "Trail Running Shoes",
      price: 139.99,
      colors: ["Green", "Black", "Orange"],
      sizes: ["8", "9", "10", "11", "12"],
      description: "Rugged trail runners with aggressive tread and waterproof construction.",
      images: [menSneaker5],
      rating: 4.9,
      reviews: 412,
      features: ["Waterproof", "Vibram sole", "Toe protection"]
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.images[0], quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-sneakers-container">
      <h1 className="men-sneakers-header">Men's Sneakers</h1>
      <p className="men-sneakers-subheader">Performance & Lifestyle Footwear</p>
      
      <div className="men-sneakers-grid">
        {menSneakerProducts.map((product) => (
          <div key={product.id} className="men-sneakers-product-card">
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
                <span className="review-count">({product.reviews} reviews)</span>
              </div>
              
              <p className="product-description">{product.description}</p>
              
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="product-options">
                <div className="color-options">
                  <span>Color: </span>
                  {product.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
                
                <div className="size-options">
                  <span>Size: </span>
                  <select className="size-selector">
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>US {size}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSneakers;
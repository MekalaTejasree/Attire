import React from 'react';
import './formals.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import formal wear images
import formal1 from './1.jpeg';
import formal2 from './2.jpeg';
import formal3 from './3.jpeg';
import formal4 from './4.jpeg';
import formal5 from './5.jpeg';
import formal6 from './6.jpg';

export const MenFormalWear = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const formalProducts = [
    {
      id: 1,
      name: "Premium Slim Fit Suit",
      price: 199.99,
      colors: ["Navy", "Charcoal", "Black"],
      sizes: ["38", "40", "42", "44"],
      description: "Two-piece slim fit suit with premium wool blend fabric and modern cut.",
      images: [formal1],
      rating: 4.8,
      reviews: 215,
      occasion: "Business",
      fabric: "Wool Blend",
      fit: "Slim Fit",
      includes: "Jacket + Pants"
    },
    {
      id: 2,
      name: "Classic Fit Tuxedo",
      price: 249.99,
      colors: ["Black", "Midnight Blue"],
      sizes: ["38", "40", "42", "44", "46"],
      description: "Formal tuxedo with satin lapels, perfect for black tie events and weddings.",
      images: [formal2],
      rating: 4.9,
      reviews: 187,
      occasion: "Formal",
      fabric: "Poly-Viscose",
      fit: "Classic Fit",
      includes: "Jacket + Pants + Bowtie"
    },
    {
      id: 3,
      name: "Business Formal Blazer",
      price: 129.99,
      colors: ["Gray", "Navy", "Brown"],
      sizes: ["38", "40", "42", "44"],
      description: "Single-button blazer with notch lapel for professional business attire.",
      images: [formal3],
      rating: 4.6,
      reviews: 156,
      occasion: "Office",
      fabric: "Polyester Blend",
      fit: "Regular Fit",
      includes: "Blazer Only"
    },
    {
      id: 4,
      name: "Stretch Comfort Dress Pants",
      price: 59.99,
      colors: ["Black", "Gray", "Navy"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Comfortable stretch fabric dress pants with anti-wrinkle technology.",
      images: [formal4],
      rating: 4.5,
      reviews: 203,
      occasion: "Business Casual",
      fabric: "Stretch Cotton",
      fit: "Slim Fit",
      includes: "Pants Only"
    },
    {
      id: 5,
      name: "Three-Piece Wedding Suit",
      price: 279.99,
      colors: ["Light Gray", "Navy", "Burgundy"],
      sizes: ["38", "40", "42", "44"],
      description: "Elegant three-piece suit with waistcoat, perfect for weddings and special occasions.",
      images: [formal5],
      rating: 4.7,
      reviews: 178,
      occasion: "Wedding",
      fabric: "Italian Wool",
      fit: "Slim Fit",
      includes: "Jacket + Pants + Waistcoat"
    },
    {
      id: 6,
      name: "Executive Dress Shirt",
      price: 39.99,
      colors: ["White", "Blue", "Pale Pink"],
      sizes: ["S", "M", "L", "XL"],
      description: "Premium cotton dress shirt with French cuffs and spread collar.",
      images: [formal6],
      rating: 4.4,
      reviews: 167,
      occasion: "Office",
      fabric: "100% Cotton",
      fit: "Regular Fit",
      includes: "Shirt Only"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.images[0], quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-formal-container">
      <h1 className="men-formal-header">Men's Western Formal Wear</h1>
      <div className="men-formal-grid">
        {formalProducts.map((product) => (
          <div key={product.id} className="formal-product-card">
            <div className="formal-image-container">
              <img src={product.images[0]} alt={product.name} className="formal-main-image" />
              <div className="formal-thumbnails">
                {product.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${product.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="formal-info">
              <h2 className="formal-name">{product.name}</h2>
              <p className="formal-price">${product.price.toFixed(2)}</p>
              <div className="formal-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({product.reviews})</span>
              </div>
              <p className="formal-description">{product.description}</p>
              
              <div className="formal-details">
                <div className="detail-item">
                  <span className="detail-label">Occasion:</span>
                  <span className="detail-value">{product.occasion}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fabric:</span>
                  <span className="detail-value">{product.fabric}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fit:</span>
                  <span className="detail-value">{product.fit}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Includes:</span>
                  <span className="detail-value">{product.includes}</span>
                </div>
              </div>
              
              <div className="formal-options">
                <div className="color-options">
                  <span>Colors: </span>
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
                  <span>Sizes: </span>
                  {product.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="formal-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenFormalWear;
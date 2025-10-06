import React from 'react';
import './men.css';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import skincare product images
import product1 from './1.jpeg';
import product2 from './2.jpeg';
import product3 from './3.jpeg';
import product4 from './4.jpeg';
import product5 from './5.jpeg';
import product6 from './6.jpeg';
import product7 from './7.jpeg';
import product8 from './8.jpeg';
import product9 from './9.jpeg';
import product10 from './10.jpeg';
import product11 from './11.jpeg';
import product12 from './12.jpeg';
import product13 from './13.jpeg';
import product14 from './14.jpeg';
import product15 from './15.jpeg';
import product16 from './16.jpeg';

const MenSkincare = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Skincare product data
  const skincareProducts = [
    {
      id: 1,
      name: "Charcoal Face Wash",
      price: 24.99,
      description: "Deep cleansing face wash with activated charcoal",
      image: product1,
      rating: 4.7,
      reviews: 342,
      type: "Cleanser"
    },
    {
      id: 2,
      name: "Hydrating Moisturizer",
      price: 29.99,
      description: "Lightweight moisturizer with hyaluronic acid",
      image: product2,
      rating: 4.8,
      reviews: 287,
      type: "Moisturizer"
    },
    {
      id: 3,
      name: "Anti-Aging Serum",
      price: 49.99,
      description: "Powerful serum with retinol and vitamin C",
      image: product3,
      rating: 4.6,
      reviews: 198,
      type: "Serum"
    },
    {
      id: 4,
      name: "Exfoliating Scrub",
      price: 19.99,
      description: "Gentle exfoliator with jojoba beads",
      image: product4,
      rating: 4.5,
      reviews: 156,
      type: "Scrub"
    },
    {
      id: 5,
      name: "Eye Cream",
      price: 34.99,
      description: "Reduces dark circles and puffiness",
      image: product5,
      rating: 4.4,
      reviews: 231,
      type: "Eye Care"
    },
    {
      id: 6,
      name: "SPF 50 Sunscreen",
      price: 22.99,
      description: "Non-greasy broad spectrum protection",
      image: product6,
      rating: 4.7,
      reviews: 178,
      type: "Sunscreen"
    },
    {
      id: 7,
      name: "Beard Oil",
      price: 27.99,
      description: "Nourishing blend with argan and jojoba oils",
      image: product7,
      rating: 4.8,
      reviews: 254,
      type: "Beard Care"
    },
    {
      id: 8,
      name: "Face Mask Set",
      price: 39.99,
      description: "5-piece detoxifying clay mask set",
      image: product8,
      rating: 4.6,
      reviews: 167,
      type: "Mask"
    },
    {
      id: 9,
      name: "Shaving Cream",
      price: 18.99,
      description: "Ultra-smooth formula with aloe vera",
      image: product9,
      rating: 4.5,
      reviews: 312,
      type: "Shaving"
    },
    {
      id: 10,
      name: "Aftershave Balm",
      price: 26.99,
      description: "Soothes and hydrates post-shave",
      image: product10,
      rating: 4.7,
      reviews: 189,
      type: "Shaving"
    },
    {
      id: 11,
      name: "Vitamin C Toner",
      price: 21.99,
      description: "Brightening and pore-refining toner",
      image: product11,
      rating: 4.4,
      reviews: 145,
      type: "Toner"
    },
    {
      id: 12,
      name: "Night Cream",
      price: 44.99,
      description: "Intensive overnight repair treatment",
      image: product12,
      rating: 4.6,
      reviews: 178,
      type: "Moisturizer"
    },
    {
      id: 13,
      name: "Acne Treatment",
      price: 19.99,
      description: "Spot treatment with salicylic acid",
      image: product13,
      rating: 4.3,
      reviews: 267,
      type: "Treatment"
    },
    {
      id: 14,
      name: "Lip Balm",
      price: 9.99,
      description: "Hydrating SPF 15 lip protection",
      image: product14,
      rating: 4.8,
      reviews: 432,
      type: "Lip Care"
    },
    {
      id: 15,
      name: "Face Roller",
      price: 29.99,
      description: "Jade roller for facial massage",
      image: product15,
      rating: 4.5,
      reviews: 198,
      type: "Tool"
    },
    {
      id: 16,
      name: "Skincare Kit",
      price: 89.99,
      description: "Complete 5-step skincare routine",
      image: product16,
      rating: 4.9,
      reviews: 156,
      type: "Kit"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  const ProductCard = ({ product }) => (
    <div className="skincare-product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-type">{product.type}</p>
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
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="men-skincare-page">
      <h1 className="page-title">Men's Skincare Essentials</h1>
      <p className="page-subtitle">Premium products for healthy, refreshed skin</p>
      
      <div className="skincare-products-grid">
        {skincareProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenSkincare;
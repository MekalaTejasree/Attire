import React from 'react';
import './jeans.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../../../../../context/CartContext';

// Import jeans product images
import jeans1 from './1.webp';
import jeans2 from './2.jpg';
import jeans3 from './3.jpg';
import jeans4 from './4.jpg';
import jeans5 from './5.jpg';
import jeans6 from './6.jpeg';

const KidsJeans = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Jeans product data
  const jeansProducts = [
    {
      id: 1,
      name: "Classic Blue Jeans",
      price: 24.99,
      description: "Durable denim jeans with reinforced knees for active kids",
      image: jeans1,
      rating: 4.7,
      reviews: 128,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Regular Fit"
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 27.99,
      description: "Comfortable stretch denim with adjustable waistband",
      image: jeans2,
      rating: 4.5,
      reviews: 96,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Slim Fit"
    },
    {
      id: 3,
      name: "Cargo Jeans",
      price: 29.99,
      description: "Stylish jeans with functional cargo pockets",
      image: jeans3,
      rating: 4.8,
      reviews: 145,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Relaxed Fit"
    },
    {
      id: 4,
      name: "Ripped Jeans",
      price: 26.99,
      description: "Cool distressed jeans with knee rips",
      image: jeans4,
      rating: 4.6,
      reviews: 87,
      sizes: ["9-10", "11-12", "13-14"],
      type: "Slim Fit"
    },
    {
      id: 5,
      name: "Athletic Jeans",
      price: 31.99,
      description: "Flexible denim with extra stretch for active movement",
      image: jeans5,
      rating: 4.9,
      reviews: 112,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Athletic Fit"
    },
    {
      id: 6,
      name: "Black Skinny Jeans",
      price: 25.99,
      description: "Comfortable black jeans with stretch fabric",
      image: jeans6,
      rating: 4.4,
      reviews: 76,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Skinny Fit"
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="jeans-product-card">
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
        <div className="product-sizes">
          <span>Sizes: </span>
          {product.sizes.map(size => (
            <span key={size} className="size-tag">{size}</span>
          ))}
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="kids-jeans-page">
      <h1 className="page-title">Boys' Jeans (Ages 5-14)</h1>
      <p className="page-subtitle">Durable, comfortable jeans for active boys</p>
      
      <div className="jeans-products-grid">
        {jeansProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsJeans;
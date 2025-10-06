import React from 'react';
import './shots.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../../../../../context/CartContext';

// Import shorts product images
import shorts1 from './1.jpeg';
import shorts2 from './2.jpg';
import shorts3 from './3.jpeg';
import shorts4 from './4.jpeg';
import shorts5 from './5.jpeg';
import shorts6 from './6.jpeg';

const KidsShorts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Shorts product data
  const shortsProducts = [
    {
      id: 1,
      name: "Active Sports Shorts",
      price: 19.99,
      description: "Breathable mesh shorts with elastic waistband for running and play",
      image: shorts1,
      rating: 4.7,
      reviews: 142,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Athletic"
    },
    {
      id: 2,
      name: "Denim Cargo Shorts",
      price: 22.99,
      description: "Durable denim shorts with multiple pockets for storage",
      image: shorts2,
      rating: 4.5,
      reviews: 89,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Casual"
    },
    {
      id: 3,
      name: "Quick-Dry Swim Shorts",
      price: 24.99,
      description: "Water-resistant shorts with UPF 50+ sun protection",
      image: shorts3,
      rating: 4.8,
      reviews: 167,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Swim"
    },
    {
      id: 4,
      name: "Cotton Chino Shorts",
      price: 21.99,
      description: "Classic fit shorts perfect for school and outings",
      image: shorts4,
      rating: 4.6,
      reviews: 76,
      sizes: ["9-10", "11-12", "13-14"],
      type: "Casual"
    },
    {
      id: 5,
      name: "Basketball Shorts",
      price: 26.99,
      description: "Longer length shorts with side stripes and moisture-wicking fabric",
      image: shorts5,
      rating: 4.9,
      reviews: 134,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Athletic"
    },
    {
      id: 6,
      name: "Adventure Hiking Shorts",
      price: 28.99,
      description: "Lightweight quick-dry shorts with zip pockets",
      image: shorts6,
      rating: 4.4,
      reviews: 92,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Outdoor"
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="shorts-product-card">
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
    <div className="kids-shorts-page">
      <h1 className="page-title">Boys' Shorts (Ages 5-14)</h1>
      <p className="page-subtitle">Comfortable shorts for play, school, and adventure</p>
      
      <div className="shorts-products-grid">
        {shortsProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsShorts;
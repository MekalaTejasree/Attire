import React from 'react';
import './top.css';
import { useCart } from '../../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import jacket product images
import jacket1 from './1.jpeg';
import jacket2 from './2.jpeg';
import jacket3 from './3.jpeg';
import jacket4 from './4.jpeg';
import jacket5 from './5.webp';
import jacket6 from './6.jpeg';

const BabyBoyJackets = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Jacket product data
  const jacketProducts = [
    {
      id: 1,
      name: "Padded Winter Jacket",
      price: 34.99,
      description: "Warm quilted jacket with hood and snap closures",
      image: jacket1,
      rating: 4.8,
      reviews: 156,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Winter Jacket",
      colors: ["Navy", "Gray", "Red"],
      features: ["Water-Resistant", "Insulated", "Easy Snap Closures"]
    },
    {
      id: 2,
      name: "Denim Jacket with Hood",
      price: 28.99,
      description: "Lightweight denim jacket with soft lining",
      image: jacket2,
      rating: 4.6,
      reviews: 132,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Denim Jacket",
      colors: ["Light Blue", "Dark Wash"],
      features: ["Stretch Denim", "Hooded", "Machine Washable"]
    },
    {
      id: 3,
      name: "Fleece Bunting Jacket",
      price: 31.99,
      description: "Soft fleece jacket with fold-over mittens",
      image: jacket3,
      rating: 4.9,
      reviews: 201,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Fleece Jacket",
      colors: ["Blue", "Gray", "Green"],
      features: ["Fold-Over Mittens", "Zipper Front", "Breathable"]
    },
    {
      id: 4,
      name: "Rain Jacket Set",
      price: 36.99,
      description: "Waterproof jacket with matching pants",
      image: jacket4,
      rating: 4.7,
      reviews: 98,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Rain Jacket",
      colors: ["Yellow", "Blue", "Red"],
      features: ["100% Waterproof", "Adjustable Hood", "Reflective Details"]
    },
    {
      id: 5,
      name: "Bomber Style Jacket",
      price: 29.99,
      description: "Stylish bomber jacket with ribbed cuffs",
      image: jacket5,
      rating: 4.5,
      reviews: 112,
      sizes: ["12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Bomber Jacket",
      colors: ["Black", "Navy", "Olive"],
      features: ["Lightweight", "Elastic Cuffs", "Zipper Closure"]
    },
    {
      id: 6,
      name: "Puffer Vest",
      price: 26.99,
      description: "Lightweight puffer vest for layering",
      image: jacket6,
      rating: 4.6,
      reviews: 178,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Puffer Vest",
      colors: ["Royal Blue", "Gray", "Red"],
      features: ["Packable", "Zipper Front", "Warm but Light"]
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  const ProductCard = ({ product }) => (
    <div className="jacket-product-card">
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
        <div className="product-details">
          <div className="product-sizes">
            <span>Sizes: </span>
            {product.sizes.map(size => (
              <span key={size} className="size-tag">{size}</span>
            ))}
          </div>
          <div className="product-colors">
            <span>Colors: </span>
            {product.colors.map(color => (
              <span key={color} className="color-tag">{color}</span>
            ))}
          </div>
          <div className="product-features">
            {product.features.map((feature, index) => (
              <span key={index} className="feature-tag">✓ {feature}</span>
            ))}
          </div>
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
    <div className="baby-boy-jackets-page">
      <h1 className="page-title">Baby Boys' Jackets (0-5 Years)</h1>
      <p className="page-subtitle">Cozy and protective jackets for your little explorer</p>
      
      <div className="jacket-products-grid">
        {jacketProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BabyBoyJackets;
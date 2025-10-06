import React from 'react';
import './women.css';
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

const WomenSkincare = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Skincare product data
  const skincareProducts = [
    {
      id: 1,
      name: "Hydrating Cleanser",
      price: 28.99,
      description: "Gentle cleanser that removes impurities without stripping moisture",
      image: product1,
      rating: 4.8,
      reviews: 421,
      type: "Cleanser"
    },
    {
      id: 2,
      name: "Brightening Serum",
      price: 52.99,
      description: "Vitamin C serum for radiant, even-toned skin",
      image: product2,
      rating: 4.7,
      reviews: 356,
      type: "Serum"
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      price: 59.99,
      description: "Retinol-infused cream for overnight renewal",
      image: product3,
      rating: 4.9,
      reviews: 278,
      type: "Moisturizer"
    },
    {
      id: 4,
      name: "Exfoliating Toner",
      price: 24.99,
      description: "Gentle chemical exfoliant with glycolic acid",
      image: product4,
      rating: 4.6,
      reviews: 198,
      type: "Toner"
    },
    {
      id: 5,
      name: "Eye Cream",
      price: 38.99,
      description: "Reduces dark circles and fine lines",
      image: product5,
      rating: 4.5,
      reviews: 312,
      type: "Eye Care"
    },
    {
      id: 6,
      name: "Mineral SPF 50",
      price: 32.99,
      description: "Lightweight, non-comedogenic sunscreen",
      image: product6,
      rating: 4.8,
      reviews: 245,
      type: "Sunscreen"
    },
    {
      id: 7,
      name: "Hyaluronic Acid Moisturizer",
      price: 34.99,
      description: "Intensely hydrating daily moisturizer",
      image: product7,
      rating: 4.7,
      reviews: 387,
      type: "Moisturizer"
    },
    {
      id: 8,
      name: "Clay Mask",
      price: 26.99,
      description: "Detoxifying mask for oily and combination skin",
      image: product8,
      rating: 4.6,
      reviews: 215,
      type: "Mask"
    },
    {
      id: 9,
      name: "Facial Oil",
      price: 42.99,
      description: "Nourishing blend of botanical oils",
      image: product9,
      rating: 4.5,
      reviews: 178,
      type: "Treatment"
    },
    {
      id: 10,
      name: "Micellar Water",
      price: 18.99,
      description: "Gentle makeup remover and cleanser",
      image: product10,
      rating: 4.8,
      reviews: 432,
      type: "Cleanser"
    },
    {
      id: 11,
      name: "Peptide Complex",
      price: 64.99,
      description: "Advanced anti-aging treatment",
      image: product11,
      rating: 4.7,
      reviews: 156,
      type: "Serum"
    },
    {
      id: 12,
      name: "Lip Sleeping Mask",
      price: 22.99,
      description: "Overnight treatment for dry lips",
      image: product12,
      rating: 4.9,
      reviews: 298,
      type: "Lip Care"
    },
    {
      id: 13,
      name: "Acne Spot Treatment",
      price: 19.99,
      description: "Fast-acting blemish treatment",
      image: product13,
      rating: 4.4,
      reviews: 267,
      type: "Treatment"
    },
    {
      id: 14,
      name: "Facial Roller Set",
      price: 39.99,
      description: "Rose quartz roller and gua sha tool",
      image: product14,
      rating: 4.6,
      reviews: 187,
      type: "Tool"
    },
    {
      id: 15,
      name: "Skincare Gift Set",
      price: 99.99,
      description: "Luxury 6-piece skincare collection",
      image: product15,
      rating: 4.9,
      reviews: 143,
      type: "Kit"
    },
    {
      id: 16,
      name: "Sheet Mask Bundle",
      price: 29.99,
      description: "10-piece hydrating sheet mask set",
      image: product16,
      rating: 4.7,
      reviews: 201,
      type: "Mask"
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
    <div className="women-skincare-page">
      <h1 className="page-title">Women's Skincare Collection</h1>
      <p className="page-subtitle">Luxurious formulas for radiant, healthy skin</p>
      
      <div className="skincare-products-grid">
        {skincareProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WomenSkincare;
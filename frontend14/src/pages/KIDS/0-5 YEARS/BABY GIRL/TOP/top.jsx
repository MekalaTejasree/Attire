import React from 'react';
import './top.css';
import { useCart } from '../../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import top product images
import top1 from './1.jpeg';
import top2 from './2.jpeg';
import top3 from './3.jpeg';
import top4 from './4.jpeg';
import top5 from './5.jpg';
import top6 from './6.jpeg';

const BabyGirlTops = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Top product data
  const topProducts = [
    {
      id: 1,
      name: "Ruffled Bodysuit",
      price: 16.99,
      description: "Adorable snap-crotch bodysuit with delicate ruffled sleeves",
      image: top1,
      rating: 4.8,
      reviews: 178,
      sizes: ["Newborn", "0-3M", "3-6M", "6-12M"],
      type: "Bodysuit",
      colors: ["White", "Pink", "Lavender"],
      features: ["Snap Crotch", "Soft Cotton", "Easy Diaper Changes"]
    },
    {
      id: 2,
      name: "Floral Peplum Top",
      price: 22.99,
      description: "Charming peplum top with floral embroidery for special occasions",
      image: top2,
      rating: 4.9,
      reviews: 203,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M"],
      type: "Peplum Top",
      colors: ["Pink", "Mint", "Yellow"],
      features: ["Embroidered Details", "Elastic Waist", "Party Wear"]
    },
    {
      id: 3,
      name: "Unicorn Graphic Tee",
      price: 18.99,
      description: "Soft cotton tee with magical unicorn design for everyday cuteness",
      image: top3,
      rating: 4.7,
      reviews: 156,
      sizes: ["12-18M", "18-24M", "2T", "3T", "4T"],
      type: "T-Shirt",
      colors: ["Pink", "Purple", "White"],
      features: ["100% Cotton", "Tagless", "Machine Washable"]
    },
    {
      id: 4,
      name: "Lace Trim Blouse",
      price: 24.99,
      description: "Elegant blouse with lace collar and pearl button details",
      image: top4,
      rating: 4.6,
      reviews: 132,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Blouse",
      colors: ["White", "Ivory", "Blush Pink"],
      features: ["Delicate Lace", "Snap Shoulders", "Special Occasion"]
    },
    {
      id: 5,
      name: "Fleece Hoodie",
      price: 26.99,
      description: "Cozy fleece hoodie with bunny ears for chilly days",
      image: top5,
      rating: 4.7,
      reviews: 167,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Hoodie",
      colors: ["Pink", "Gray", "Lavender"],
      features: ["Bunny Ear Hood", "Kangaroo Pocket", "Super Soft"]
    },
    {
      id: 6,
      name: "Tutu Onesie",
      price: 29.99,
      description: "Adorable onesie with attached tulle skirt for ultimate cuteness",
      image: top6,
      rating: 4.9,
      reviews: 221,
      sizes: ["Newborn", "0-3M", "3-6M", "6-12M"],
      type: "Onesie",
      colors: ["Pink", "White", "Gold"],
      features: ["Snap Crotch", "Attached Tutu", "Photo-Ready"]
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  const ProductCard = ({ product }) => (
    <div className="top-product-card">
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
    <div className="baby-girl-tops-page">
      <h1 className="page-title">Baby Girls' Tops (0-5 Years)</h1>
      <p className="page-subtitle">Adorable tops for your little princess</p>
      
      <div className="top-products-grid">
        {topProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BabyGirlTops;
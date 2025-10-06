import React from 'react';
import './top.css';
import { useCart } from '../../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import top product images
import top1 from './1.jpg';
import top2 from './2.jpg';
import top3 from './3.jpg';
import top4 from './4.jpg';
import top5 from './5.jpg';
import top6 from './6.webp';

const KidsGirlsTops = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Tops product data
  const topProducts = [
    {
      id: 1,
      name: "Butterfly Graphic Tee",
      price: 16.99,
      description: "Soft cotton t-shirt with colorful butterfly print",
      image: top1,
      rating: 4.8,
      reviews: 142,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "T-Shirt",
      colors: ["Pink", "Lavender", "White"],
      features: ["100% Cotton", "Machine Washable", "Tagless"]
    },
    {
      id: 2,
      name: "Ruffled Sleeve Blouse",
      price: 22.99,
      description: "Pretty blouse with delicate ruffled sleeves",
      image: top2,
      rating: 4.7,
      reviews: 118,
      sizes: ["7-8", "9-10", "11-12"],
      type: "Blouse",
      colors: ["White", "Light Blue", "Mint"],
      features: ["Breathable Fabric", "Button Front", "School Appropriate"]
    },
    {
      id: 3,
      name: "Unicorn Hoodie",
      price: 29.99,
      description: "Cozy hoodie with unicorn graphic and rainbow details",
      image: top3,
      rating: 4.9,
      reviews: 203,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Hoodie",
      colors: ["Pink", "Purple", "Light Blue"],
      features: ["Fleece Lining", "Kangaroo Pocket", "Adjustable Drawstring"]
    },
    {
      id: 4,
      name: "Floral Peplum Top",
      price: 24.99,
      description: "Stylish peplum top with floral pattern",
      image: top4,
      rating: 4.6,
      reviews: 97,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Peplum Top",
      colors: ["Yellow", "Pink", "White"],
      features: ["Flowy Fit", "Elastic Waist", "Party Wear"]
    },
    {
      id: 5,
      name: "Striped Long Sleeve",
      price: 19.99,
      description: "Comfy striped top with ribbed cuffs",
      image: top5,
      rating: 4.5,
      reviews: 87,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Long Sleeve",
      colors: ["Navy/White", "Pink/White", "Red/White"],
      features: ["Cotton Blend", "Seasonal Colors", "Everyday Wear"]
    },
    {
      id: 6,
      name: "Glitter Heart Sweatshirt",
      price: 26.99,
      description: "Warm sweatshirt with glitter heart appliqué",
      image: top6,
      rating: 4.7,
      reviews: 156,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Sweatshirt",
      colors: ["Rose Pink", "Lavender", "Mint"],
      features: ["Soft Brushed Interior", "Glitter Details", "Cold Wash Only"]
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
    <div className="kids-girls-tops-page">
      <h1 className="page-title">Girls' Tops (Ages 5-14)</h1>
      <p className="page-subtitle">Adorable tops for school, play, and special occasions</p>
      
      <div className="top-products-grid">
        {topProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsGirlsTops;
import React from 'react';
import './bottom.css';
import { useCart } from '../../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import bottoms product images
import bottom1 from './1.jpeg';
import bottom2 from './2.jpeg';
import bottom3 from './3.jpeg';
import bottom4 from './4.jpeg';
import bottom5 from './5.png';
import bottom6 from './6.jpg';

const BabyGirlBottoms = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Bottoms product data
  const bottomProducts = [
    {
      id: 1,
      name: "Ruffled Bloomers",
      price: 19.99,
      description: "Adorable cotton bloomers with lace trim for special occasions",
      image: bottom1,
      rating: 4.8,
      reviews: 167,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Bloomers",
      colors: ["White", "Pink", "Ivory"],
      features: ["Soft Cotton", "Lace Trim", "Snap Closure"]
    },
    {
      id: 2,
      name: "Tulle Skirt Leggings",
      price: 22.99,
      description: "Comfy leggings with attached tulle skirt for twirling fun",
      image: bottom2,
      rating: 4.9,
      reviews: 203,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T"],
      type: "Leggings",
      colors: ["Pink", "Lavender", "Mint"],
      features: ["Stretchy Waistband", "Attached Skirt", "Machine Washable"]
    },
    {
      id: 3,
      name: "Floral Print Pants",
      price: 21.99,
      description: "Lightweight pants with pretty floral patterns for everyday wear",
      image: bottom3,
      rating: 4.7,
      reviews: 142,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Cotton Pants",
      colors: ["Pink Flowers", "Purple Flowers", "Yellow Flowers"],
      features: ["Elastic Waist", "Breathable Fabric", "Easy Diaper Access"]
    },
    {
      id: 4,
      name: "Denim Overalls",
      price: 26.99,
      description: "Adjustable denim overalls with heart-shaped pockets",
      image: bottom4,
      rating: 4.6,
      reviews: 118,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Overalls",
      colors: ["Light Wash", "Pink Wash"],
      features: ["Heart Pockets", "Adjustable Straps", "Snap Closures"]
    },
    {
      id: 5,
      name: "Velvet Leggings",
      price: 18.99,
      description: "Soft velvet leggings perfect for holiday outfits",
      image: bottom5,
      rating: 4.7,
      reviews: 156,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M"],
      type: "Leggings",
      colors: ["Burgundy", "Navy", "Rose Gold"],
      features: ["Stretchy Waist", "Holiday Ready", "Delicate Wash"]
    },
    {
      id: 6,
      name: "Diaper Cover Shorts",
      price: 15.99,
      description: "Breathable shorts with ruffled diaper cover for summer",
      image: bottom6,
      rating: 4.5,
      reviews: 97,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Diaper Cover",
      colors: ["White", "Pink", "Lavender"],
      features: ["Lace Trim", "Breathable Cotton", "Easy Diaper Changes"]
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  const ProductCard = ({ product }) => (
    <div className="bottom-product-card">
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
    <div className="baby-girl-bottoms-page">
      <h1 className="page-title">Baby Girls' Bottoms (0-5 Years)</h1>
      <p className="page-subtitle">Adorable and comfortable bottoms for your little princess</p>
      
      <div className="bottom-products-grid">
        {bottomProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BabyGirlBottoms;
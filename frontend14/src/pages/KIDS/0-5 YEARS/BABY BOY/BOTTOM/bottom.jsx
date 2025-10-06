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
import bottom5 from './5.jpeg';
import bottom6 from './6.jpg';

const BabyBoyBottoms = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Bottoms product data
  const bottomProducts = [
    {
      id: 1,
      name: "Stretch Waist Pants",
      price: 18.99,
      description: "Soft cotton pants with elastic waistband for easy movement",
      image: bottom1,
      rating: 4.7,
      reviews: 142,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Cotton Pants",
      colors: ["Navy", "Gray", "Khaki"],
      features: ["Elastic Waist", "Reinforced Knees", "Machine Washable"]
    },
    {
      id: 2,
      name: "Denim Overalls",
      price: 24.99,
      description: "Adjustable denim overalls with snap closures for easy diaper changes",
      image: bottom2,
      rating: 4.8,
      reviews: 156,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Overalls",
      colors: ["Light Wash", "Dark Wash"],
      features: ["Adjustable Straps", "Snap Closures", "Durable Denim"]
    },
    {
      id: 3,
      name: "Jogger Pants Set",
      price: 22.99,
      description: "Comfy jogger pants with matching top, perfect for playtime",
      image: bottom3,
      rating: 4.9,
      reviews: 187,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M"],
      type: "Joggers",
      colors: ["Blue", "Gray", "Green"],
      features: ["Ribbed Cuffs", "Set Includes Top", "Soft Fabric"]
    },
    {
      id: 4,
      name: "Cargo Shorts",
      price: 16.99,
      description: "Lightweight shorts with functional pockets for summer adventures",
      image: bottom4,
      rating: 4.6,
      reviews: 98,
      sizes: ["12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Shorts",
      colors: ["Khaki", "Navy", "Olive"],
      features: ["Multiple Pockets", "Elastic Waist", "Durable Cotton"]
    },
    {
      id: 5,
      name: "Fleece-Lined Pants",
      price: 21.99,
      description: "Warm fleece-lined pants for cold weather comfort",
      image: bottom5,
      rating: 4.7,
      reviews: 132,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Winter Pants",
      colors: ["Navy", "Black", "Gray"],
      features: ["Soft Fleece Lining", "Elastic Waist", "Ankle Cuffs"]
    },
    {
      id: 6,
      name: "Diaper Cover Shorts",
      price: 14.99,
      description: "Breathable shorts with built-in diaper cover for summer",
      image: bottom6,
      rating: 4.5,
      reviews: 112,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Diaper Cover",
      colors: ["Blue", "White", "Striped"],
      features: ["Breathable Mesh", "Easy Diaper Access", "Soft Waistband"]
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
    <div className="baby-boy-bottoms-page">
      <h1 className="page-title">Baby Boys' Bottoms (0-5 Years)</h1>
      <p className="page-subtitle">Comfortable and practical bottoms for your little one</p>
      
      <div className="bottom-products-grid">
        {bottomProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BabyBoyBottoms;
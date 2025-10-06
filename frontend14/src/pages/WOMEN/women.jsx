import React from 'react';
import './women.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import all product images
import trouser1 from './WESTERN/TROUSERS/1.jpeg';
import trouser2 from './WESTERN/TROUSERS/2.jpeg';
import trouser3 from './WESTERN/TROUSERS/3.jpeg';
import trouser4 from './WESTERN/TROUSERS/4.jpeg';


import jeans1 from './WESTERN/JEANS/1.jpeg';
import jeans2 from './WESTERN/JEANS/2.jpeg';
import jeans3 from './WESTERN/JEANS/3.jpeg';
import jeans4 from './WESTERN/JEANS/4.jpeg';
import jeans5 from './WESTERN/JEANS/5.jpeg';
import jeans6 from './WESTERN/JEANS/6.jpeg';

import tshirt1 from './WESTERN/T-SHIRTS/1.jpeg';
import tshirt2 from './WESTERN/T-SHIRTS/2.jpeg';
import tshirt3 from './WESTERN/T-SHIRTS/3.jpeg';
import tshirt4 from './WESTERN/T-SHIRTS/4.jpeg';
import tshirt5 from './WESTERN/T-SHIRTS/5.jpeg';
import tshirt6 from './WESTERN/T-SHIRTS/6.jpeg';



const WomenAllProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Combined product data array
  const allProducts = [
     {
      id: 1,
      name: "Slim Fit High Waist Jeans",
      price: 49.99,
      colors: ["Blue", "Black"],
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable slim fit jeans with high waist for a flattering look.",
      image: [jeans1],
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "Slim Fit High Waist Jeans",
      price: 49.99,
      colors: ["Blue", "Black"],
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable slim fit jeans with high waist for a flattering look.",
      image: [jeans2],
      rating: 4.5,
      reviews: 128
    },
    {
      id: 3,
      name: "Ripped Skinny Jeans",
      price: 59.99,
      colors: ["Light Blue", "Grey"],
      sizes: ["XS", "S", "M"],
      description: "Trendy ripped skinny jeans with stretch fabric for maximum comfort.",
      image: [jeans3],
      rating: 4.2,
      reviews: 87
    },
    {
      id: 4,
      name: "Ripped Skinny Jeans",
      price: 59.99,
      colors: ["Light Blue", "Grey"],
      sizes: ["XS", "S", "M"],
      description: "Trendy ripped skinny jeans with stretch fabric for maximum comfort.",
      image: [ jeans4],
      rating: 4.2,
      reviews: 87
    },
    {
      id: 5,
      name: "Mom Fit Jeans",
      price: 54.99,
      colors: ["Dark Blue", "White"],
      sizes: ["S", "M", "L"],
      description: "Classic mom fit jeans with vintage wash and comfortable fit.",
      image: [jeans5],
      rating: 4.7,
      reviews: 156
    },
     {
      id: 6,
      name: "Mom Fit Jeans",
      price: 54.99,
      colors: ["Dark Blue", "White"],
      sizes: ["S", "M", "L"],
      description: "Classic mom fit jeans with vintage wash and comfortable fit.",
      image: [jeans6],
      rating: 4.7,
      reviews: 156
    },
     {
      id: 7,
      name: "Classic V-Neck T-Shirt",
      price: 24.99,
      colors: ["White", "Black", "Red"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Soft and comfortable classic v-neck t-shirt with a flattering fit.",
      image: [tshirt1],
      rating: 4.3,
      reviews: 215
    },
    {
      id: 8,
      name: "Graphic Print T-Shirt",
      price: 29.99,
      colors: ["Black", "Grey", "Navy"],
      sizes: ["S", "M", "L"],
      description: "Trendy graphic print t-shirt with a relaxed fit and soft fabric.",
      image: [tshirt2],
      rating: 4.5,
      reviews: 178
    },
    {
      id: 9,
      name: "Off-Shoulder Casual Tee",
      price: 27.99,
      colors: ["Pink", "White", "Yellow"],
      sizes: ["XS", "S", "M"],
      description: "Fashionable off-shoulder t-shirt perfect for casual outings.",
      image: [tshirt3],
      rating: 4.1,
      reviews: 92
    },
    {
      id: 10,
      name: "Cropped Western Tee",
      price: 26.99,
      colors: ["Blue", "White", "Black"],
      sizes: ["S", "M", "L"],
      description: "Stylish cropped t-shirt with western-inspired details.",
      image: [tshirt4],
      rating: 4.4,
      reviews: 143
    },
    {
      id: 11,
      name: "Long Sleeve Basic Tee",
      price: 32.99,
      colors: ["Black", "Grey", "Burgundy"],
      sizes: ["XS", "S", "M", "L"],
      description: "Essential long sleeve t-shirt for layering or wearing alone.",
      image: [tshirt5],
      rating: 4.6,
      reviews: 201
    },
    {
      id: 12,
      name: "Embroidered Western Tee",
      price: 34.99,
      colors: ["White", "Denim Blue"],
      sizes: ["S", "M", "L"],
      description: "Beautifully embroidered western-style t-shirt with unique patterns.",
      image: [tshirt6],
      rating: 4.7,
      reviews: 167
    },
     {
      id: 13,
      name: "High Waist Wide Leg Trousers",
      price: 59.99,
      colors: ["Black", "Beige", "Navy"],
      sizes: ["XS", "S", "M", "L"],
      description: "Elegant high waist trousers with wide leg for a sophisticated look.",
      image: [trouser1],
      rating: 4.6,
      reviews: 189
    },
    {
      id: 14,
      name: "Skinny Fit Office Pants",
      price: 49.99,
      colors: ["Grey", "Black", "Brown"],
      sizes: ["S", "M", "L", "XL"],
      description: "Professional skinny fit trousers perfect for office wear.",
      image: [trouser2],
      rating: 4.4,
      reviews: 156
    },
    {
      id: 15,
      name: "Casual Linen Trousers",
      price: 44.99,
      colors: ["White", "Khaki", "Blue"],
      sizes: ["XS", "S", "M"],
      description: "Lightweight linen trousers for comfortable casual wear.",
      image: [trouser3],
      rating: 4.3,
      reviews: 112
    },
    {
      id: 16,
      name: "Western Style Bootcut Pants",
      price: 54.99,
      colors: ["Denim", "Black", "Brown"],
      sizes: ["S", "M", "L"],
      description: "Classic western bootcut trousers with stylish details.",
      image: [trouser4],
      rating: 4.5,
      reviews: 134
    }
    
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
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
        <div className="product-options">
          <div className="color-options">
            <span>Colors: </span>
            {product.colors.map((color) => (
              <span 
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
              <span key={size} className="size-option">{size}</span>
            ))}
          </div>
        </div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="women-all-products">
      <h1 className="page-title">Women's  Collection</h1>
      
      <div className="products-grid">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WomenAllProducts;

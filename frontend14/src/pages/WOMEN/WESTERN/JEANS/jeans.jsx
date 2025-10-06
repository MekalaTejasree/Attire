import React from 'react';
import './jeans.css'; // We'll create this CSS file next
import { useCart } from '../../../../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import jeans images
import jeans1 from './1.jpeg';
import jeans2 from './2.jpeg';
import jeans3 from './3.jpeg';
import jeans4 from './4.jpeg';
import jeans5 from './5.jpeg';
import jeans6 from './6.jpeg';

export const Jeans = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Product data array
  const jeansProducts = [
    {
      id: 1,
      name: "Slim Fit High Waist Jeans",
      price: 49.99,
      colors: ["Blue", "Black"],
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable slim fit jeans with high waist for a flattering look.",
      images: [jeans1],
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
      images: [jeans2],
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
      images: [jeans3],
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
      images: [ jeans4],
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
      images: [jeans5],
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
      images: [jeans6],
      rating: 4.7,
      reviews: 156
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="jeans-container">
      <h1 className="jeans-header">Women's Western Jeans</h1>
      <div className="jeans-grid">
        {jeansProducts.map((product) => (
          <div key={product.id} className="jeans-product-card">
            <div className="product-image-container">
              <img src={product.images[0]} alt={product.name} className="product-main-image" />
              <div className="product-thumbnails">
                {product.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${product.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
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
                    <button key={color} className="color-option" style={{ backgroundColor: color.toLowerCase() }} />
                  ))}
                </div>
                <div className="size-options">
                  <span>Sizes: </span>
                  {product.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <button className="wishlist-btn">♡ Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// At the very bottom of the file
export default Jeans;
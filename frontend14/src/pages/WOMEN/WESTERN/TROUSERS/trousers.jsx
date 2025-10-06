import React from 'react';
import './trousers.css';
import { useCart } from '../../../../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import trousers images
import trouser1 from './1.jpeg';
import trouser2 from './2.jpeg';
import trouser3 from './3.jpeg';
import trouser4 from './4.jpeg';

export const Trousers = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const trouserProducts = [
    {
      id: 1,
      name: "High Waist Wide Leg Trousers",
      price: 59.99,
      colors: ["Black", "Beige", "Navy"],
      sizes: ["XS", "S", "M", "L"],
      description: "Elegant high waist trousers with wide leg for a sophisticated look.",
      images: [trouser1],
      rating: 4.6,
      reviews: 189
    },
    {
      id: 2,
      name: "Skinny Fit Office Pants",
      price: 49.99,
      colors: ["Grey", "Black", "Brown"],
      sizes: ["S", "M", "L", "XL"],
      description: "Professional skinny fit trousers perfect for office wear.",
      images: [trouser2],
      rating: 4.4,
      reviews: 156
    },
    {
      id: 3,
      name: "Casual Linen Trousers",
      price: 44.99,
      colors: ["White", "Khaki", "Blue"],
      sizes: ["XS", "S", "M"],
      description: "Lightweight linen trousers for comfortable casual wear.",
      images: [trouser3],
      rating: 4.3,
      reviews: 112
    },
    {
      id: 4,
      name: "Western Style Bootcut Pants",
      price: 54.99,
      colors: ["Denim", "Black", "Brown"],
      sizes: ["S", "M", "L"],
      description: "Classic western bootcut trousers with stylish details.",
      images: [trouser4],
      rating: 4.5,
      reviews: 134
    }
   
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="trousers-container">
      <h1 className="trousers-header">Women's Western Trousers</h1>
      <div className="trousers-grid">
        {trouserProducts.map((product) => (
          <div key={product.id} className="trouser-product-card">
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

export default Trousers;
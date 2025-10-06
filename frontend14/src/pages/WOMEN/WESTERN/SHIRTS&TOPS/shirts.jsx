import React from 'react';
import './shirts.css';
import { useCart } from '../../../../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import t-shirt images
import tshirt1 from './1.jpeg';
import tshirt2 from './2.jpeg';
import tshirt3 from './3.jpeg';
import tshirt4 from './4.jpeg';
import tshirt5 from './5.jpeg';
import tshirt6 from './6.jpeg';

export const Shirts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Product data array
  const tshirtProducts = [
    {
      id: 1,
      name: "Classic V-Neck T-Shirt",
      price: 24.99,
      colors: ["White", "Black", "Red"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Soft and comfortable classic v-neck t-shirt with a flattering fit.",
      images: [tshirt1],
      rating: 4.3,
      reviews: 215
    },
    {
      id: 2,
      name: "Graphic Print T-Shirt",
      price: 29.99,
      colors: ["Black", "Grey", "Navy"],
      sizes: ["S", "M", "L"],
      description: "Trendy graphic print t-shirt with a relaxed fit and soft fabric.",
      images: [tshirt2],
      rating: 4.5,
      reviews: 178
    },
    {
      id: 3,
      name: "Off-Shoulder Casual Tee",
      price: 27.99,
      colors: ["Pink", "White", "Yellow"],
      sizes: ["XS", "S", "M"],
      description: "Fashionable off-shoulder t-shirt perfect for casual outings.",
      images: [tshirt3],
      rating: 4.1,
      reviews: 92
    },
    {
      id: 4,
      name: "Cropped Western Tee",
      price: 26.99,
      colors: ["Blue", "White", "Black"],
      sizes: ["S", "M", "L"],
      description: "Stylish cropped t-shirt with western-inspired details.",
      images: [tshirt4],
      rating: 4.4,
      reviews: 143
    },
    {
      id: 5,
      name: "Long Sleeve Basic Tee",
      price: 32.99,
      colors: ["Black", "Grey", "Burgundy"],
      sizes: ["XS", "S", "M", "L"],
      description: "Essential long sleeve t-shirt for layering or wearing alone.",
      images: [tshirt5],
      rating: 4.6,
      reviews: 201
    },
    {
      id: 6,
      name: "Embroidered Western Tee",
      price: 34.99,
      colors: ["White", "Denim Blue"],
      sizes: ["S", "M", "L"],
      description: "Beautifully embroidered western-style t-shirt with unique patterns.",
      images: [tshirt6],
      rating: 4.7,
      reviews: 167
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="tshirts-container">
      <h1 className="tshirts-header">Women's Western Shirts</h1>
      <div className="tshirts-grid">
        {tshirtProducts.map((product) => (
          <div key={product.id} className="tshirt-product-card">
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

export default Shirts;

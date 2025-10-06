import React from 'react';
import './sunglasses.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import sunglasses images
import sunglass1 from './1.jpeg';
import sunglass2 from './2.jpeg';
import sunglass3 from './3.jpeg';
import sunglass4 from './4.jpeg';
import sunglass5 from './5.jpeg';
import sunglass6 from './6.jpeg';

export const Sunglasses = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const sunglasses = [
    {
      id: 1,
      name: "Aviator Classic",
      price: 129.99,
      colors: ["Gold", "Silver", "Black"],
      sizes: ["One Size"],
      description: "Timeless aviator sunglasses with UV400 protection and polarized lenses for optimal glare reduction.",
      images: [sunglass1],
      rating: 4.8,
      reviews: 245,
      frame: "Metal",
      lensType: "Polarized",
      uvProtection: "UV400"
    },
    {
      id: 2,
      name: "Wayfarer Retro",
      price: 89.99,
      colors: ["Tortoise", "Black", "Red"],
      sizes: ["One Size"],
      description: "Classic wayfarer style with durable acetate frames and 100% UV protection lenses.",
      images: [sunglass2],
      rating: 4.6,
      reviews: 189,
      frame: "Acetate",
      lensType: "UV Protection",
      uvProtection: "UV400"
    },
    {
      id: 3,
      name: "Sport Wraparound",
      price: 79.99,
      colors: ["Black", "Blue", "Red"],
      sizes: ["One Size"],
      description: "Lightweight polycarbonate frames with rubber grips and impact-resistant lenses for active lifestyles.",
      images: [sunglass3],
      rating: 4.5,
      reviews: 156,
      frame: "Polycarbonate",
      lensType: "Impact-Resistant",
      uvProtection: "UV400"
    },
    {
      id: 4,
      name: "Oversized Cat-Eye",
      price: 109.99,
      colors: ["Gold", "Rose Gold", "Silver"],
      sizes: ["One Size"],
      description: "Fashionable cat-eye sunglasses with mirrored lenses and ultra-light metal frames.",
      images: [sunglass4],
      rating: 4.7,
      reviews: 201,
      frame: "Metal",
      lensType: "Mirrored",
      uvProtection: "UV400"
    },
    {
      id: 5,
      name: "Round Vintage",
      price: 99.99,
      colors: ["Gold", "Silver", "Gunmetal"],
      sizes: ["One Size"],
      description: "Vintage-inspired round frames with gradient lenses and keyhole bridge for a retro look.",
      images: [sunglass5],
      rating: 4.4,
      reviews: 132,
      frame: "Metal",
      lensType: "Gradient",
      uvProtection: "UV400"
    },
    {
      id: 6,
      name: "Rectangle Polarized",
      price: 149.99,
      colors: ["Black", "Brown", "Tortoise"],
      sizes: ["One Size"],
      description: "Premium polarized sunglasses with ultra-lightweight titanium frames and anti-reflective coating.",
      images: [sunglass6],
      rating: 4.9,
      reviews: 278,
      frame: "Titanium",
      lensType: "Polarized",
      uvProtection: "UV400"
    }
  ];

  const handleAddToCart = (sunglass) => {
    addToCart({ ...sunglass, image: sunglass.images && sunglass.images[0], quantity: 1 });
    toast.success(`${sunglass.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="sunglasses-container">
      <h1 className="sunglasses-header">Designer Sunglasses</h1>
      <div className="sunglasses-grid">
        {sunglasses.map((sunglass) => (
          <div key={sunglass.id} className="sunglass-card">
            <div className="sunglass-image-container">
              <img src={sunglass.images[0]} alt={sunglass.name} className="sunglass-main-image" />
              <div className="sunglass-thumbnails">
                {sunglass.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${sunglass.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="sunglass-info">
              <h2 className="sunglass-name">{sunglass.name}</h2>
              <p className="sunglass-price">${sunglass.price.toFixed(2)}</p>
              <div className="sunglass-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(sunglass.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(sunglass.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({sunglass.reviews})</span>
              </div>
              <p className="sunglass-description">{sunglass.description}</p>
              
              <div className="sunglass-details">
                <div className="detail-item">
                  <span className="detail-label">Frame:</span>
                  <span className="detail-value">{sunglass.frame}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Lens Type:</span>
                  <span className="detail-value">{sunglass.lensType}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">UV Protection:</span>
                  <span className="detail-value">{sunglass.uvProtection}</span>
                </div>
              </div>
              
              <div className="sunglass-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {sunglass.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ 
                        backgroundColor: color === "Gold" ? "#FFD700" : 
                                      color === "Silver" ? "#C0C0C0" : 
                                      color === "Black" ? "#000000" : 
                                      color === "Tortoise" ? "#964B00" : 
                                      color === "Red" ? "#FF0000" : 
                                      color === "Blue" ? "#0000FF" : 
                                      color === "Rose Gold" ? "#E0BFB8" : 
                                      color === "Gunmetal" ? "#2C3539" : 
                                      color === "Brown" ? "#A52A2A" : "#FFFFFF",
                        border: color === "Silver" || color === "Gold" || color === "Rose Gold" ? "1px solid #ccc" : "none"
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <div className="sunglass-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(sunglass)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sunglasses;
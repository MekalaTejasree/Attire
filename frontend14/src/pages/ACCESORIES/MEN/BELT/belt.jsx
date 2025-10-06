import React from 'react';
import './belt.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import belt product images
import belt1 from './1.jpeg';
import belt2 from './2.jpeg';
import belt3 from './3.jpeg';
import belt4 from './4.jpeg';
import belt5 from './5.jpeg';
import belt6 from './6.jpeg';
import belt7 from './7.jpeg';

const MenBelts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Belt product data array
  const beltsCollection = [
    {
      id: 1,
      name: "Classic Leather Dress Belt",
      price: 49.99,
      description: "Premium full-grain leather belt with polished buckle",
      image: belt1,
      rating: 4.8,
      reviews: 215,
      sizes: ["30", "32", "34", "36", "38", "40"],
      colors: ["Black", "Brown", "Tan"],
      features: ["Genuine Leather", "Brushed Nickel Buckle", "Reversible"]
    },
    {
      id: 2,
      name: "Reversible Leather Belt",
      price: 39.99,
      description: "Dual-color reversible belt with quick-release buckle",
      image: belt2,
      rating: 4.7,
      reviews: 187,
      sizes: ["30", "32", "34", "36", "38"],
      colors: ["Black/Brown", "Brown/Tan"],
      features: ["Two-Tone Design", "Quick-Release Buckle", "Soft Leather"]
    },
    {
      id: 3,
      name: "Ratchet Dress Belt",
      price: 44.99,
      description: "Adjustable ratchet belt with micro-adjustable fit",
      image: belt3,
      rating: 4.9,
      reviews: 312,
      sizes: ["28-42"],
      colors: ["Black", "Brown", "Dark Brown"],
      features: ["No Holes Design", "Precision Fit", "Slim Profile"]
    },
    {
      id: 4,
      name: "Casual Webbed Belt",
      price: 29.99,
      description: "Durable nylon webbed belt with metal buckle",
      image: belt4,
      rating: 4.5,
      reviews: 143,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Khaki", "Navy"],
      features: ["Heavy-Duty Nylon", "Military Style", "Quick-Release"]
    },
    {
      id: 5,
      name: "Formal Crocodile Belt",
      price: 79.99,
      description: "Luxury crocodile-embossed leather dress belt",
      image: belt5,
      rating: 4.7,
      reviews: 98,
      sizes: ["32", "34", "36", "38"],
      colors: ["Black", "Dark Brown"],
      features: ["Exotic Finish", "Solid Brass Buckle", "Lined Leather"]
    },
    {
      id: 6,
      name: "Minimalist Leather Belt",
      price: 34.99,
      description: "Sleek leather belt with hidden magnetic buckle",
      image: belt6,
      rating: 4.6,
      reviews: 176,
      sizes: ["30", "32", "34", "36"],
      colors: ["Black", "Brown"],
      features: ["Seamless Design", "Magnetic Closure", "No Visible Hardware"]
    },
    {
      id: 7,
      name: "Vintage Western Belt",
      price: 59.99,
      description: "Hand-tooled leather belt with ornate buckle",
      image: belt7,
      rating: 4.8,
      reviews: 201,
      sizes: ["32", "34", "36", "38", "40"],
      colors: ["Brown", "Cognac"],
      features: ["Hand-Tooled Design", "Antique Brass Buckle", "1.5\" Width"]
    }
  ];

  const handleAddToCart = (belt) => {
    addToCart({ ...belt, image: belt.image, quantity: 1 });
    toast.success(`${belt.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-belts-container">
      <h1 className="men-belts-header">Men's Premium Belts</h1>
      <div className="men-belts-grid">
        {beltsCollection.map((belt) => (
          <div key={belt.id} className="belt-card">
            <div className="belt-image-container">
              {/* Changed from belt.images[0] to belt.image */}
              <img src={belt.image} alt={belt.name} className="belt-main-image" />
              <div className="belt-thumbnails">
                {belt.colors.map((color, index) => (
                  <div 
                    key={index} 
                    className="thumbnail" 
                    style={{ 
                      backgroundColor: color.toLowerCase().includes('black') ? '#000' : 
                                      color.toLowerCase().includes('brown') ? '#8B4513' : 
                                      color.toLowerCase().includes('tan') ? '#D2B48C' : 
                                      color.toLowerCase().includes('navy') ? '#000080' : 
                                      color.toLowerCase().includes('khaki') ? '#F0E68C' : '#fff',
                      border: color.toLowerCase().includes('white') ? '1px solid #ccc' : 'none'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>
            <div className="belt-info">
              <h2 className="belt-name">{belt.name}</h2>
              <p className="belt-price">${belt.price.toFixed(2)}</p>
              <div className="belt-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(belt.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(belt.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({belt.reviews})</span>
              </div>
              <p className="belt-description">{belt.description}</p>
              
              <div className="belt-details">
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{belt.material}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Width:</span>
                  <span className="detail-value">{belt.width}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Buckle:</span>
                  <span className="detail-value">{belt.buckle}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Style:</span>
                  <span className="detail-value">{belt.style}</span>
                </div>
              </div>
              
              <div className="belt-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {belt.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ 
                        backgroundColor: color.toLowerCase().includes('black') ? '#000' : 
                                        color.toLowerCase().includes('brown') ? '#8B4513' : 
                                        color.toLowerCase().includes('tan') ? '#D2B48C' : 
                                        color.toLowerCase().includes('navy') ? '#000080' : 
                                        color.toLowerCase().includes('khaki') ? '#F0E68C' : '#fff',
                        border: color.toLowerCase().includes('white') ? '1px solid #ccc' : 'none'
                      }}
                      title={color}
                    />
                  ))}
                </div>
                <div className="size-options">
                  <span>Sizes: </span>
                  {belt.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="belt-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(belt)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenBelts;
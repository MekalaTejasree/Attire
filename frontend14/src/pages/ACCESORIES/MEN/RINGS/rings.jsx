import React from 'react';
import './rings.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import ring images
import ring1 from './1.jpeg';
import ring2 from './2.jpeg';
import ring3 from './3.jpeg';
import ring4 from './4.jpeg';
import ring5 from './5.jpeg';
import ring6 from './6.jpeg'; 
import ring7 from './7.jpeg'; 
import ring8 from './8.jpeg'; 

export const Rings = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const rings = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 899.99,
      colors: ["White Gold", "Yellow Gold", "Rose Gold"],
      sizes: ["5", "6", "7", "8"],
      description: "Classic solitaire ring featuring a brilliant-cut diamond in a prong setting, perfect for engagements.",
      images: [ring1],
      rating: 4.9,
      reviews: 342,
      material: "14K Gold",
      stone: "Diamond"
    },
    {
      id: 2,
      name: "Sapphire Halo Ring",
      price: 649.99,
      colors: ["White Gold", "Yellow Gold"],
      sizes: ["5", "6", "7"],
      description: "Elegant halo ring with a center blue sapphire surrounded by sparkling diamonds.",
      images: [ring2],
      rating: 4.7,
      reviews: 215,
      material: "18K Gold",
      stone: "Sapphire & Diamond"
    },
    {
      id: 3,
      name: "Vintage Filigree Ring",
      price: 459.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["6", "7", "8"],
      description: "Intricate vintage-inspired filigree design with milgrain detailing and small accent diamonds.",
      images: [ring3],
      rating: 4.6,
      reviews: 178,
      material: "14K Gold",
      stone: "Diamond"
    },
    {
      id: 4,
      name: "Modern Stackable Ring Set",
      price: 299.99,
      colors: ["White Gold", "Rose Gold"],
      sizes: ["5", "6", "7"],
      description: "Set of three thin bands designed to be worn together or separately for a contemporary look.",
      images: [ring4],
      rating: 4.5,
      reviews: 156,
      material: "14K Gold",
      stone: "None"
    },
    {
      id: 5,
      name: "Emerald Cut Three-Stone Ring",
      price: 759.99,
      colors: ["White Gold", "Yellow Gold"],
      sizes: ["5", "6", "7", "8"],
      description: "Stunning three-stone ring featuring an emerald-cut center stone with two tapered baguettes.",
      images: [ring5],
      rating: 4.8,
      reviews: 267,
      material: "18K Gold",
      stone: "Diamond"
    },
    {
      id: 6,
      name: "Minimalist Hammered Band",
      price: 199.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["4", "5", "6", "7", "8"],
      description: "Hand-hammered gold band with a textured finish for a modern, understated look.",
      images: [ring6],
      rating: 4.4,
      reviews: 132,
      material: "14K Gold",
      stone: "None"
    },
     {
      id: 7,
      name: "Minimalist Hammered Band",
      price: 199.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["4", "5", "6", "7", "8"],
      description: "Hand-hammered gold band with a textured finish for a modern, understated look.",
      images: [ring7],
      rating: 4.4,
      reviews: 132,
      material: "14K Gold",
      stone: "None"
    },
     {
      id: 8,
      name: "Minimalist Hammered Band",
      price: 199.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["4", "5", "6", "7", "8"],
      description: "Hand-hammered gold band with a textured finish for a modern, understated look.",
      images: [ring8],
      rating: 4.4,
      reviews: 132,
      material: "14K Gold",
      stone: "None"
    }
  ];

  const handleAddToCart = (ring) => {
    addToCart({ ...ring, image: ring.images && ring.images[0], quantity: 1 });
    toast.success(`${ring.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="rings-container">
      <h1 className="rings-header">Fine Jewelry Rings</h1>
      <div className="rings-grid">
        {rings.map((ring) => (
          <div key={ring.id} className="ring-card">
            <div className="ring-image-container">
              <img src={ring.images[0]} alt={ring.name} className="ring-main-image" />
              <div className="ring-thumbnails">
                {ring.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${ring.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="ring-info">
              <h2 className="ring-name">{ring.name}</h2>
              <p className="ring-price">${ring.price.toFixed(2)}</p>
              <div className="ring-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(ring.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(ring.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({ring.reviews})</span>
              </div>
              <p className="ring-description">{ring.description}</p>
              
              <div className="ring-details">
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{ring.material}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Stone:</span>
                  <span className="detail-value">{ring.stone}</span>
                </div>
              </div>
              
              <div className="ring-options">
                <div className="metal-options">
                  <span>Metals: </span>
                  {ring.colors.map((color) => (
                    <button 
                      key={color} 
                      className="metal-option" 
                      style={{ backgroundColor: color === "White Gold" ? "#f5f5f5" : 
                                              color === "Yellow Gold" ? "#ffd700" : "#e0bfb8" }}
                      title={color}
                    >
                      {color === "White Gold" ? "WG" : color === "Yellow Gold" ? "YG" : "RG"}
                    </button>
                  ))}
                </div>
                <div className="size-options">
                  <span>Sizes: </span>
                  {ring.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="ring-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(ring)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rings;
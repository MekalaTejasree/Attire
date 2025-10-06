import React from 'react';
import './ethnicset.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import dress images
import dress1 from './1.jpeg';
import dress2 from './2.jpeg';
import dress3 from './3.jpeg';
import dress4 from './4.jpeg';
import dress5 from './5.jpeg';
import dress6 from './6.jpeg';

export const EthnicDresses = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const ethnicDresses = [
    {
      id: 1,
      name: "Silk Banarasi Saree",
      price: 89.99,
      colors: ["Red", "Green", "Gold"],
      sizes: ["Free Size"],
      description: "Traditional Banarasi silk saree with intricate zari work, perfect for weddings and festivals.",
      images: [dress1],
      rating: 4.8,
      reviews: 245,
      occasion: "Wedding",
      fabric: "Silk"
    },
    {
      id: 2,
      name: "Cotton Printed Anarkali",
      price: 59.99,
      colors: ["Blue", "Pink", "Yellow"],
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable cotton Anarkali suit with beautiful floral prints, ideal for daytime events.",
      images: [dress2],
      rating: 4.5,
      reviews: 189,
      occasion: "Casual",
      fabric: "Cotton"
    },
    {
      id: 3,
      name: "Lehenga Choli Set",
      price: 129.99,
      colors: ["Maroon", "Peach", "Teal"],
      sizes: ["S", "M", "L"],
      description: "Stunning lehenga choli set with heavy embroidery and matching dupatta for special occasions.",
      images: [dress3],
      rating: 4.9,
      reviews: 312,
      occasion: "Festival",
      fabric: "Silk"
    },
    {
      id: 4,
      name: "Kalamkari Kurti with Palazzos",
      price: 49.99,
      colors: ["Black", "White", "Mustard"],
      sizes: ["S", "M", "L"],
      description: "Hand-painted Kalamkari kurti paired with comfortable palazzo pants, perfect for ethnic chic look.",
      images: [dress4],
      rating: 4.4,
      reviews: 156,
      occasion: "Casual",
      fabric: "Cotton"
    },
    {
      id: 5,
      name: "Kanjivaram Silk Saree",
      price: 149.99,
      colors: ["Purple", "Orange", "Green"],
      sizes: ["Free Size"],
      description: "Authentic Kanjivaram silk saree with temple border and rich gold zari work.",
      images: [dress5],
      rating: 4.7,
      reviews: 278,
      occasion: "Wedding",
      fabric: "Silk"
    },
    {
      id: 6,
      name: "Chanderi Suit Set",
      price: 69.99,
      colors: ["Peach", "Mint", "Lavender"],
      sizes: ["S", "M", "L"],
      description: "Lightweight Chanderi suit set with delicate embroidery and matching dupatta.",
      images: [dress6],
      rating: 4.6,
      reviews: 201,
      occasion: "Party",
      fabric: "Chanderi"
    }
  ];

  const handleAddToCart = (dress) => {
    addToCart({ ...dress, quantity: 1 });
    toast.success(`${dress.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="ethnic-dresses-container">
      <h1 className="ethnic-dresses-header">Women's Ethnic Dresses</h1>
      <div className="ethnic-dresses-grid">
        {ethnicDresses.map((dress) => (
          <div key={dress.id} className="ethnic-dress-card">
            <div className="dress-image-container">
              <img src={dress.images[0]} alt={dress.name} className="dress-main-image" />
              <div className="dress-thumbnails">
                {dress.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${dress.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="dress-info">
              <h2 className="dress-name">{dress.name}</h2>
              <p className="dress-price">${dress.price.toFixed(2)}</p>
              <div className="dress-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(dress.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(dress.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({dress.reviews})</span>
              </div>
              <p className="dress-description">{dress.description}</p>
              
              <div className="dress-details">
                <div className="detail-item">
                  <span className="detail-label">Fabric:</span>
                  <span className="detail-value">{dress.fabric}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Occasion:</span>
                  <span className="detail-value">{dress.occasion}</span>
                </div>
              </div>
              
              <div className="dress-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {dress.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
                <div className="size-options">
                  <span>Sizes: </span>
                  {dress.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="dress-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(dress)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthnicDresses;
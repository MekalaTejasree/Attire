import React from 'react';
import './suits.css';

// Import suit images
import suit1 from './1.jpeg';
import suit2 from './2.jpeg';
import suit3 from './3.jpeg';
import suit4 from './4.jpeg';
import suit5 from './5.jpeg';
import suit6 from './6.jpeg';

export const EthnicSuits = () => {
  // Product data array
  const ethnicSuits = [
    {
      id: 1,
      name: "Anarkali Suit with Dupatta",
      price: 79.99,
      colors: ["Red", "Pink", "Blue"],
      sizes: ["S", "M", "L", "XL"],
      description: "Elegant Anarkali suit with heavy embroidery and flowing silhouette, comes with matching dupatta.",
      images: [suit1],
      rating: 4.7,
      reviews: 198,
      occasion: "Wedding",
      fabric: "Silk",
      type: "Anarkali"
    },
    {
      id: 2,
      name: "Straight Cut Cotton Suit",
      price: 49.99,
      colors: ["White", "Black", "Yellow"],
      sizes: ["XS", "S", "M", "L"],
      description: "Comfortable straight cut suit in pure cotton with minimal embroidery for daily wear.",
      images: [suit2],
      rating: 4.4,
      reviews: 145,
      occasion: "Casual",
      fabric: "Cotton",
      type: "Straight Cut"
    },
    {
      id: 3,
      name: "Pakistani Style Lawn Suit",
      price: 59.99,
      colors: ["Green", "Peach", "Lavender"],
      sizes: ["S", "M", "L"],
      description: "Premium lawn fabric suit with intricate prints and light embroidery, perfect for summer.",
      images: [suit3],
      rating: 4.6,
      reviews: 176,
      occasion: "Party",
      fabric: "Lawn",
      type: "Pakistani"
    },
    {
      id: 4,
      name: "Sharara Suit Set",
      price: 89.99,
      colors: ["Gold", "Silver", "Maroon"],
      sizes: ["M", "L", "XL"],
      description: "Traditional sharara suit set with heavy work and voluminous bottoms for festive occasions.",
      images: [suit4],
      rating: 4.8,
      reviews: 223,
      occasion: "Festival",
      fabric: "Georgette",
      type: "Sharara"
    },
    {
      id: 5,
      name: "Kurta with Palazzo Set",
      price: 54.99,
      colors: ["Navy", "Grey", "Mint"],
      sizes: ["XS", "S", "M", "L"],
      description: "Contemporary kurta with palazzo pants, featuring modern prints and comfortable fit.",
      images: [suit5],
      rating: 4.5,
      reviews: 167,
      occasion: "Casual",
      fabric: "Cotton",
      type: "Kurta Palazzo"
    },
    {
      id: 6,
      name: "Designer Lehenga Style Suit",
      price: 99.99,
      colors: ["Black", "Red", "Royal Blue"],
      sizes: ["S", "M", "L"],
      description: "Lehenga style suit with heavy embroidery and designer details for special functions.",
      images: [suit6],
      rating: 4.9,
      reviews: 256,
      occasion: "Wedding",
      fabric: "Silk",
      type: "Lehenga Style"
    }
  ];

  return (
    <div className="ethnic-suits-container">
      <h1 className="ethnic-suits-header">Women's Ethnic Suits</h1>
      <div className="ethnic-suits-grid">
        {ethnicSuits.map((suit) => (
          <div key={suit.id} className="ethnic-suit-card">
            <div className="suit-image-container">
              <img src={suit.images[0]} alt={suit.name} className="suit-main-image" />
              <div className="suit-thumbnails">
                {suit.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${suit.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="suit-info">
              <h2 className="suit-name">{suit.name}</h2>
              <p className="suit-price">${suit.price.toFixed(2)}</p>
              <div className="suit-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(suit.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(suit.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({suit.reviews})</span>
              </div>
              <p className="suit-description">{suit.description}</p>
              
              <div className="suit-details">
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{suit.type}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fabric:</span>
                  <span className="detail-value">{suit.fabric}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Occasion:</span>
                  <span className="detail-value">{suit.occasion}</span>
                </div>
              </div>
              
              <div className="suit-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {suit.colors.map((color) => (
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
                  {suit.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="suit-actions">
                <button className="add-to-cart-btn">Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthnicSuits;
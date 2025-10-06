import React from 'react';
import './handbag.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import handbag images (replace with actual imports)
import bag1 from './1.jpeg';
import bag2 from './2.jpeg';
import bag3 from './3.jpeg';
import bag4 from './4.jpeg';
import bag5 from './5.jpeg';
import bag6 from './6.jpg';

export const Handbags = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Product data array
  const handbags = [
    {
      id: 1,
      name: "Luxury Leather Tote",
      price: 199.99,
      colors: ["Black", "Brown", "Camel"],
      sizes: ["One Size"],
      description: "Premium genuine leather tote bag with gold-tone hardware and spacious interior.",
      images: [bag1],
      rating: 4.9,
      reviews: 312,
      category: "Tote",
      material: "Leather"
    },
    {
      id: 2,
      name: "Mini Crossbody Bag",
      price: 79.99,
      colors: ["Pink", "Beige", "Red"],
      sizes: ["Adjustable Strap"],
      description: "Compact crossbody with chain strap and multiple card slots for everyday use.",
      images: [bag2],
      rating: 4.5,
      reviews: 189,
      category: "Crossbody",
      material: "Faux Leather"
    },
    {
      id: 3,
      name: "Evening Clutch",
      price: 59.99,
      colors: ["Gold", "Silver", "Black"],
      sizes: ["One Size"],
      description: "Sparkly clutch with rhinestone details for formal events and parties.",
      images: [bag3],
      rating: 4.7,
      reviews: 245,
      category: "Clutch",
      material: "Metallic"
    },
    {
      id: 4,
      name: "Structured Satchel",
      price: 149.99,
      colors: ["Navy", "Burgundy", "Gray"],
      sizes: ["One Size"],
      description: "Professional satchel with top handle and detachable shoulder strap.",
      images: [bag4],
      rating: 4.8,
      reviews: 278,
      category: "Satchel",
      material: "Genuine Leather"
    },
    {
      id: 5,
      name: "Straw Bucket Bag",
      price: 69.99,
      colors: ["Natural", "White", "Black"],
      sizes: ["One Size"],
      description: "Boho-chic woven straw bag with leather accents and drawstring closure.",
      images: [bag5],
      rating: 4.6,
      reviews: 201,
      category: "Bucket",
      material: "Straw"
    },
    {
      id: 6,
      name: "Designer Shoulder Bag",
      price: 249.99,
      colors: ["Black", "Cream", "Green"],
      sizes: ["One Size"],
      description: "Iconic designer shoulder bag with signature monogram and protective feet.",
      images: [bag6],
      rating: 4.9,
      reviews: 356,
      category: "Shoulder",
      material: "Canvas/Leather"
    }
  ];

  const handleAddToCart = (bag) => {
    addToCart({ ...bag, image: bag.images[0], quantity: 1 });
    toast.success(`${bag.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="handbags-container">
      <h1 className="handbags-header">Women's Handbags</h1>
      <div className="handbags-grid">
        {handbags.map((bag) => (
          <div key={bag.id} className="handbag-card">
            <div className="bag-image-container">
              <img src={bag.images[0]} alt={bag.name} className="bag-main-image" />
              <div className="bag-thumbnails">
                {bag.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${bag.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="bag-info">
              <h2 className="bag-name">{bag.name}</h2>
              <p className="bag-price">${bag.price.toFixed(2)}</p>
              <div className="bag-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(bag.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(bag.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({bag.reviews})</span>
              </div>
              <p className="bag-description">{bag.description}</p>
              
              <div className="bag-details">
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{bag.material}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{bag.category}</span>
                </div>
              </div>
              
              <div className="bag-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {bag.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <div className="bag-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(bag)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Handbags;
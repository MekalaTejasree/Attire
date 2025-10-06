import React from 'react';
import './sunglass.css';
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
import sunglass7 from './7.jpeg';

export const Sunglasses = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Product data array
  const sunglasses = [
    {
      id: 1,
      name: "Aviator Sunglasses",
      price: 89.99,
      colors: ["Gold", "Silver", "Rose Gold"],
      sizes: ["One Size"],
      description: "Classic aviator sunglasses with UV400 protection lenses and lightweight metal frame.",
      images: [sunglass1],
      rating: 4.8,
      reviews: 245,
      style: "Aviator",
      lensType: "Polarized"
    },
    {
      id: 2,
      name: "Cat Eye Sunglasses",
      price: 59.99,
      colors: ["Black", "Tortoise", "Red"],
      sizes: ["One Size"],
      description: "Fashionable cat eye sunglasses with retro vibe and 100% UV protection.",
      images: [sunglass2],
      rating: 4.5,
      reviews: 189,
      style: "Cat Eye",
      lensType: "Mirrored"
    },
    {
      id: 3,
      name: "Oversized Square Sunglasses",
      price: 129.99,
      colors: ["Black", "Brown", "White"],
      sizes: ["One Size"],
      description: "Chic oversized square sunglasses with gradient lenses and comfortable acetate frame.",
      images: [sunglass3],
      rating: 4.9,
      reviews: 312,
      style: "Square",
      lensType: "Gradient"
    },
    {
      id: 4,
      name: "Round Metal Sunglasses",
      price: 49.99,
      colors: ["Gold", "Silver", "Gunmetal"],
      sizes: ["One Size"],
      description: "Vintage-inspired round sunglasses with thin metal frame and blue light blocking.",
      images: [sunglass4],
      rating: 4.4,
      reviews: 156,
      style: "Round",
      lensType: "Blue Light"
    },
    {
      id: 5,
      name: "Sport Wraparound Sunglasses",
      price: 149.99,
      colors: ["Black", "Blue", "Red"],
      sizes: ["One Size"],
      description: "Performance sport sunglasses with non-slip nose pads and impact-resistant lenses.",
      images: [sunglass5],
      rating: 4.7,
      reviews: 278,
      style: "Sport",
      lensType: "Polarized"
    },
    {
      id: 6,
      name: "Butterfly Sunglasses",
      price: 69.99,
      colors: ["Black", "Tortoise", "Pink"],
      sizes: ["One Size"],
      description: "Trendy butterfly sunglasses with oversized lenses and lightweight frame.",
      images: [sunglass6],
      rating: 4.6,
      reviews: 201,
      style: "Butterfly",
      lensType: "UV400"
    },
    {
      id: 7,
      name: "Butterfly Sunglasses",
      price: 69.99,
      colors: ["Black", "Tortoise", "Pink"],
      sizes: ["One Size"],
      description: "Trendy butterfly sunglasses with oversized lenses and lightweight frame.",
      images: [sunglass7],
      rating: 4.6,
      reviews: 201,
      style: "Butterfly",
      lensType: "UV400"
    }
  ];

  const handleAddToCart = (sunglass) => {
    addToCart({ ...sunglass, image: sunglass.images && sunglass.images[0], quantity: 1 });
    toast.success(`${sunglass.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="sunglasses-container">
      <h1 className="sunglasses-header">Women's Sunglasses</h1>
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
                  <span className="detail-label">Style:</span>
                  <span className="detail-value">{sunglass.style}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Lens Type:</span>
                  <span className="detail-value">{sunglass.lensType}</span>
                </div>
              </div>
              
              <div className="sunglass-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {sunglass.colors.map((color) => (
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
                  {sunglass.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
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
import React from 'react';
import './jeans.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import jeans images
import jeans1 from './1.jpeg';
import jeans2 from './2.jpeg';
import jeans3 from './3.jpeg';
import jeans4 from './4.jpeg';
import jeans5 from './5.jpeg';
import jeans6 from './6.jpeg';

export const MenJeans = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const jeansProducts = [
    {
      id: 1,
      name: "Slim Fit Stretch Jeans",
      price: 49.99,
      colors: ["Dark Blue", "Black", "Light Wash"],
      sizes: ["28", "30", "32", "34", "36"],
      description: "Comfortable slim fit jeans with 2% elastane for flexibility and all-day comfort.",
      images: [jeans1],
      rating: 4.6,
      reviews: 342,
      fit: "Slim Fit",
      wash: "Dark Wash",
      material: "98% Cotton, 2% Elastane"
    },
    {
      id: 2,
      name: "Straight Fit Classic Jeans",
      price: 44.99,
      colors: ["Medium Blue", "Black", "Stone Wash"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Timeless straight fit jeans with classic five-pocket styling and durable construction.",
      images: [jeans2],
      rating: 4.5,
      reviews: 287,
      fit: "Straight Fit",
      wash: "Medium Wash",
      material: "100% Cotton"
    },
    {
      id: 3,
      name: "Tapered Fit Stretch Jeans",
      price: 54.99,
      colors: ["Black", "Dark Indigo", "Grey"],
      sizes: ["28", "30", "32", "34"],
      description: "Modern tapered fit that's roomy in the thigh and narrow at the ankle with stretch fabric.",
      images: [jeans3],
      rating: 4.7,
      reviews: 198,
      fit: "Tapered Fit",
      wash: "Rinse Wash",
      material: "99% Cotton, 1% Elastane"
    },
    {
      id: 4,
      name: "Relaxed Fit Carpenter Jeans",
      price: 59.99,
      colors: ["Dark Blue", "Khaki", "Olive"],
      sizes: ["32", "34", "36", "38", "40"],
      description: "Durable carpenter jeans with utility pockets and relaxed fit for maximum comfort.",
      images: [jeans4],
      rating: 4.4,
      reviews: 156,
      fit: "Relaxed Fit",
      wash: "Dark Wash",
      material: "100% Cotton"
    },
    {
      id: 5,
      name: "Skinny Fit Ripped Jeans",
      price: 64.99,
      colors: ["Light Blue", "Black", "Grey Wash"],
      sizes: ["28", "30", "32"],
      description: "Trendy skinny fit jeans with distressed details and stretch fabric for mobility.",
      images: [jeans5],
      rating: 4.3,
      reviews: 231,
      fit: "Skinny Fit",
      wash: "Distressed Wash",
      material: "98% Cotton, 2% Elastane"
    },
    {
      id: 6,
      name: "Bootcut Fit Vintage Jeans",
      price: 69.99,
      colors: ["Vintage Blue", "Dark Wash", "Black"],
      sizes: ["30", "32", "34", "36"],
      description: "Classic bootcut jeans with vintage wash, slightly flared to fit over boots comfortably.",
      images: [jeans6],
      rating: 4.5,
      reviews: 178,
      fit: "Bootcut Fit",
      wash: "Vintage Wash",
      material: "100% Cotton"
    }
  ];

  const handleAddToCart = (jeans) => {
    addToCart({ ...jeans, image: jeans.images[0], quantity: 1 });
    toast.success(`${jeans.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-jeans-container">
      <h1 className="men-jeans-header">Men's Western Jeans</h1>
      <div className="men-jeans-grid">
        {jeansProducts.map((jeans) => (
          <div key={jeans.id} className="jeans-product-card">
            <div className="jeans-image-container">
              <img src={jeans.images[0]} alt={jeans.name} className="jeans-main-image" />
              <div className="jeans-thumbnails">
                {jeans.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${jeans.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="jeans-info">
              <h2 className="jeans-name">{jeans.name}</h2>
              <p className="jeans-price">${jeans.price.toFixed(2)}</p>
              <div className="jeans-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(jeans.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(jeans.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({jeans.reviews})</span>
              </div>
              <p className="jeans-description">{jeans.description}</p>
              
              <div className="jeans-details">
                <div className="detail-item">
                  <span className="detail-label">Fit:</span>
                  <span className="detail-value">{jeans.fit}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Wash:</span>
                  <span className="detail-value">{jeans.wash}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{jeans.material}</span>
                </div>
              </div>
              
              <div className="jeans-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {jeans.colors.map((color) => (
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
                  {jeans.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="jeans-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(jeans)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenJeans;
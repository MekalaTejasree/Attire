import React from 'react';
import './tshirts.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import t-shirt images
import tshirt1 from './1.jpeg';
import tshirt2 from './2.jpeg';
import tshirt3 from './3.jpeg';
import tshirt4 from './4.jpeg';
import tshirt5 from './5.webp';
import tshirt6 from './6.jpg';

export const MenTshirts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Product data array
  const tshirtProducts = [
    {
      id: 1,
      name: "Classic Crew Neck T-Shirt",
      price: 19.99,
      colors: ["White", "Black", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Premium cotton crew neck t-shirt with perfect fit and comfortable wear.",
      images: [tshirt1],
      rating: 4.5,
      reviews: 428,
      fit: "Regular Fit",
      material: "100% Cotton",
      sleeve: "Short Sleeve"
    },
    {
      id: 2,
      name: "Graphic Print T-Shirt",
      price: 24.99,
      colors: ["Black", "Grey", "Red"],
      sizes: ["S", "M", "L", "XL"],
      description: "Trendy graphic print t-shirt with unique artwork and soft fabric.",
      images: [tshirt2],
      rating: 4.6,
      reviews: 312,
      fit: "Slim Fit",
      material: "95% Cotton, 5% Elastane",
      sleeve: "Short Sleeve"
    },
    {
      id: 3,
      name: "V-Neck Stretch T-Shirt",
      price: 22.99,
      colors: ["White", "Charcoal", "Burgundy"],
      sizes: ["M", "L", "XL", "XXL"],
      description: "Comfortable v-neck t-shirt with stretch fabric for active lifestyle.",
      images: [tshirt3],
      rating: 4.4,
      reviews: 287,
      fit: "Fitted",
      material: "98% Cotton, 2% Spandex",
      sleeve: "Short Sleeve"
    },
    {
      id: 4,
      name: "Pocket T-Shirt",
      price: 26.99,
      colors: ["Navy", "Olive", "Heather Grey"],
      sizes: ["S", "M", "L", "XL"],
      description: "Classic pocket t-shirt with reinforced stitching and premium fabric.",
      images: [tshirt4],
      rating: 4.7,
      reviews: 198,
      fit: "Classic Fit",
      material: "100% Organic Cotton",
      sleeve: "Short Sleeve"
    },
    {
      id: 5,
      name: "Oversized Fit T-Shirt",
      price: 29.99,
      colors: ["Black", "White", "Beige"],
      sizes: ["L", "XL", "XXL"],
      description: "Trendy oversized fit t-shirt with dropped shoulders and relaxed silhouette.",
      images: [tshirt5],
      rating: 4.3,
      reviews: 176,
      fit: "Oversized",
      material: "100% Cotton",
      sleeve: "Short Sleeve"
    },
    {
      id: 6,
      name: "Performance Quick-Dry T-Shirt",
      price: 34.99,
      colors: ["Blue", "Black", "Grey"],
      sizes: ["S", "M", "L", "XL"],
      description: "Moisture-wicking performance tee with UV protection for sports and outdoor activities.",
      images: [tshirt6],
      rating: 4.8,
      reviews: 254,
      fit: "Athletic Fit",
      material: "Polyester Blend",
      sleeve: "Short Sleeve"
    }
  ];

  const handleAddToCart = (tshirt) => {
    addToCart({ ...tshirt, image: tshirt.images[0], quantity: 1 });
    toast.success(`${tshirt.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-tshirts-container">
      <h1 className="men-tshirts-header">Men's Western T-Shirts</h1>
      <div className="men-tshirts-grid">
        {tshirtProducts.map((tshirt) => (
          <div key={tshirt.id} className="tshirt-product-card">
            <div className="tshirt-image-container">
              <img src={tshirt.images[0]} alt={tshirt.name} className="tshirt-main-image" />
              <div className="tshirt-thumbnails">
                {tshirt.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${tshirt.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="tshirt-info">
              <h2 className="tshirt-name">{tshirt.name}</h2>
              <p className="tshirt-price">${tshirt.price.toFixed(2)}</p>
              <div className="tshirt-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(tshirt.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(tshirt.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({tshirt.reviews})</span>
              </div>
              <p className="tshirt-description">{tshirt.description}</p>
              
              <div className="tshirt-details">
                <div className="detail-item">
                  <span className="detail-label">Fit:</span>
                  <span className="detail-value">{tshirt.fit}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{tshirt.material}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Sleeve:</span>
                  <span className="detail-value">{tshirt.sleeve}</span>
                </div>
              </div>
              
              <div className="tshirt-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {tshirt.colors.map((color) => (
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
                  {tshirt.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="tshirt-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenTshirts;
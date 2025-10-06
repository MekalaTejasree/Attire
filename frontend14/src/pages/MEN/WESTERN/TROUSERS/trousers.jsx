import React from 'react';
import './trousers.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import trousers images
import trouser1 from './1.jpeg';
import trouser2 from './2.jpeg';
import trouser3 from './3.jpeg';
import trouser4 from './4.jpeg';
import trouser5 from './5.webp';
import trouser6 from './6.jpeg';

export const MenTrousers = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const trouserProducts = [
    {
      id: 1,
      name: "Slim Fit Chino Pants",
      price: 59.99,
      colors: ["Khaki", "Navy", "Olive"],
      sizes: ["28", "30", "32", "34", "36"],
      description: "Versatile slim fit chinos with stretch fabric for all-day comfort and mobility.",
      images: [trouser1],
      rating: 4.7,
      reviews: 342,
      fit: "Slim Fit",
      material: "98% Cotton, 2% Elastane",
      style: "Chino"
    },
    {
      id: 2,
      name: "Classic Fit Dress Pants",
      price: 69.99,
      colors: ["Black", "Charcoal", "Navy"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Professional dress pants with wrinkle-resistant fabric and perfect drape.",
      images: [trouser2],
      rating: 4.6,
      reviews: 287,
      fit: "Classic Fit",
      material: "Polyester-Wool Blend",
      style: "Dress Pants"
    },
    {
      id: 3,
      name: "Tapered Fit Cargo Pants",
      price: 54.99,
      colors: ["Beige", "Black", "Green"],
      sizes: ["30", "32", "34", "36"],
      description: "Functional cargo pants with tapered leg and multiple utility pockets.",
      images: [trouser3],
      rating: 4.5,
      reviews: 198,
      fit: "Tapered Fit",
      material: "100% Cotton Twill",
      style: "Cargo"
    },
    {
      id: 4,
      name: "Relaxed Fit Linen Pants",
      price: 49.99,
      colors: ["White", "Beige", "Blue"],
      sizes: ["32", "34", "36", "38"],
      description: "Breathable linen pants with relaxed fit for summer comfort.",
      images: [trouser4],
      rating: 4.4,
      reviews: 156,
      fit: "Relaxed Fit",
      material: "100% Linen",
      style: "Linen Pants"
    },
    {
      id: 5,
      name: "Slim Fit Corduroy Pants",
      price: 64.99,
      colors: ["Brown", "Burgundy", "Navy"],
      sizes: ["30", "32", "34"],
      description: "Stylish corduroy pants with fine wale texture and comfortable stretch.",
      images: [trouser5],
      rating: 4.6,
      reviews: 231,
      fit: "Slim Fit",
      material: "100% Cotton Corduroy",
      style: "Corduroy"
    },
    {
      id: 6,
      name: "Performance Travel Pants",
      price: 79.99,
      colors: ["Black", "Gray", "Navy"],
      sizes: ["30", "32", "34", "36"],
      description: "Tech fabric pants with stretch, water resistance, and quick-dry properties.",
      images: [trouser6],
      rating: 4.8,
      reviews: 254,
      fit: "Straight Fit",
      material: "Nylon-Spandex Blend",
      style: "Performance"
    }
  ];

  const handleAddToCart = (trouser) => {
    addToCart({ ...trouser, image: trouser.images[0], quantity: 1 });
    toast.success(`${trouser.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="men-trousers-container">
      <h1 className="men-trousers-header">Men's Western Trousers</h1>
      <div className="men-trousers-grid">
        {trouserProducts.map((trouser) => (
          <div key={trouser.id} className="trouser-product-card">
            <div className="trouser-image-container">
              <img src={trouser.images[0]} alt={trouser.name} className="trouser-main-image" />
              <div className="trouser-thumbnails">
                {trouser.images.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${trouser.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="trouser-info">
              <h2 className="trouser-name">{trouser.name}</h2>
              <p className="trouser-price">${trouser.price.toFixed(2)}</p>
              <div className="trouser-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(trouser.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(trouser.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({trouser.reviews})</span>
              </div>
              <p className="trouser-description">{trouser.description}</p>
              
              <div className="trouser-details">
                <div className="detail-item">
                  <span className="detail-label">Fit:</span>
                  <span className="detail-value">{trouser.fit}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{trouser.material}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Style:</span>
                  <span className="detail-value">{trouser.style}</span>
                </div>
              </div>
              
              <div className="trouser-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {trouser.colors.map((color) => (
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
                  {trouser.sizes.map((size) => (
                    <button key={size} className="size-option">{size}</button>
                  ))}
                </div>
              </div>
              
              <div className="trouser-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(trouser)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenTrousers;
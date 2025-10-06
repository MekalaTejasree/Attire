import React from 'react';
import './hairpins.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import hairpin images
import pearlHairpin from './1.jpeg';
import goldHairpin from './2.jpeg';
import floralHairpin from './3.jpeg';
import crystalHairpin from './4.jpeg';
import minimalistHairpin from './5.jpeg';
import vintageHairpin from './6.jpeg';
import giftSetHairpin from './7.jpg';

export const WomensHairpins = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const womensHairpins = [
    {
      id: 1,
      name: "Pearl Elegance Hairpin Set",
      price: 29.99,
      description: "Set of 3 delicate hairpins with genuine freshwater pearls",
      image: pearlHairpin,
      rating: 4.9,
      reviews: 286,
      colors: ["White", "Ivory", "Pink"],
      materials: ["Freshwater Pearls", "Gold-Plated Metal"],
      features: ["Hypoallergenic", "Secure Grip", "Wedding Ready", "Gift Box Included"]
    },
    {
      id: 2,
      name: "24K Gold Plated Hairpin",
      price: 39.99,
      description: "Luxurious gold-plated hairpin with intricate filigree design",
      image: goldHairpin,
      rating: 4.7,
      reviews: 198,
      colors: ["Gold", "Rose Gold"],
      materials: ["24K Gold Plated", "Brass Base"],
      features: ["Handcrafted", "Tarnish Resistant", "Versatile Styling", "Elegant Presentation Box"]
    },
    {
      id: 3,
      name: "Floral Crystal Hair Clips",
      price: 24.99,
      description: "Pair of floral-shaped clips with sparkling crystals",
      image: floralHairpin,
      rating: 4.8,
      reviews: 342,
      colors: ["Silver", "Gold", "Rose Gold"],
      materials: ["Swarovski Crystals", "Alloy Base"],
      features: ["Non-Slip Grip", "Lightweight", "Perfect for Updos", "Gift Ready"]
    },
    {
      id: 4,
      name: "Crystal Barrette Collection",
      price: 34.99,
      description: "Set of 2 crystal-embellished barrettes for all hair types",
      image: crystalHairpin,
      rating: 4.6,
      reviews: 175,
      colors: ["Clear", "Sapphire", "Ruby"],
      materials: ["Lead-Free Crystals", "Sturdy Metal Base"],
      features: ["Strong Hold", "Won't Snag Hair", "Formal Event Ready", "Velvet Pouch Included"]
    },
    {
      id: 5,
      name: "Minimalist Hairpin Duo",
      price: 19.99,
      description: "Simple yet elegant U-shaped pins for everyday wear",
      image: minimalistHairpin,
      rating: 4.5,
      reviews: 203,
      colors: ["Silver", "Black", "Gold"],
      materials: ["Stainless Steel", "Matte Finish"],
      features: ["Discreet Hold", "Tangle-Free", "All-Day Comfort", "Minimalist Packaging"]
    },
    {
      id: 6,
      name: "Vintage Inspired Hair Comb",
      price: 27.99,
      description: "Art deco style comb perfect for special occasions",
      image: vintageHairpin,
      rating: 4.7,
      reviews: 156,
      colors: ["Pearl White", "Antique Gold"],
      materials: ["Resin", "Metal Reinforcement"],
      features: ["Vintage Design", "Secure Fit", "Wedding Appropriate", "Collector's Box"]
    },
    {
      id: 7,
      name: "Hair Accessory Gift Set",
      price: 45.99,
      description: "Complete set of 12 pieces including clips, pins and headband",
      image: giftSetHairpin,
      rating: 4.8,
      reviews: 224,
      colors: ["Rose Gold Set", "Silver Set", "Mixed Metals"],
      materials: ["Various High-Quality Materials"],
      features: ["Multiple Styles", "Gift Packaging", "Travel Case", "Value Collection"]
    }
  ];
  
  const handleAddToCart = (hairpin) => {
    addToCart({ ...hairpin, image: hairpin.image || (hairpin.images && hairpin.images[0]), quantity: 1 });
    toast.success(`${hairpin.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="womens-hairpins-container">
      <h1 className="womens-hairpins-header">Women's Hairpins Collection</h1>
      <div className="womens-hairpins-grid">
        {womensHairpins.map((hairpin) => (
          <div key={hairpin.id} className="womens-hairpin-card">
            <div className="hairpin-image-container">
              <img src={hairpin.image} alt={hairpin.name} className="hairpin-main-image" />
              <div className="hairpin-thumbnails">
                {hairpin.images?.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${hairpin.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="hairpin-info">
              <h2 className="hairpin-name">{hairpin.name}</h2>
              <p className="hairpin-price">${hairpin.price.toFixed(2)}</p>
              <div className="hairpin-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(hairpin.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(hairpin.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({hairpin.reviews})</span>
              </div>
              <p className="hairpin-description">{hairpin.description}</p>
              
              <div className="hairpin-details">
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{hairpin.materials.join(', ')}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Features:</span>
                  <span className="detail-value">{hairpin.features.join(', ')}</span>
                </div>
              </div>
              
              <div className="hairpin-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {hairpin.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ 
                        backgroundColor: color === "White" ? "#ffffff" : 
                                      color === "Ivory" ? "#fffff0" : 
                                      color === "Pink" ? "#ffc0cb" : 
                                      color === "Gold" ? "#ffd700" : 
                                      color === "Rose Gold" ? "#e0bfb8" : 
                                      color === "Silver" ? "#c0c0c0" : 
                                      color === "Black" ? "#000000" : 
                                      color === "Clear" ? "#f0f8ff" :
                                      color === "Sapphire" ? "#0f52ba" :
                                      color === "Ruby" ? "#e0115f" :
                                      color === "Pearl White" ? "#f8f8ff" :
                                      color === "Antique Gold" ? "#eed9c4" : "#ffffff",
                        border: color === "White" || color === "Ivory" || color === "Pearl White" ? "1px solid #ccc" : "none"
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <div className="hairpin-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(hairpin)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensHairpins;
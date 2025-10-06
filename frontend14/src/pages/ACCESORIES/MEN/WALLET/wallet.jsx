import React from 'react';
import './wallet.css';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import wallet product images
import leatherBifold from './1.jpeg';
import rfidWallet from './2.jpeg';
import minimalist from './3.jpeg';
import moneyClip from './4.jpeg';
import travelWallet from './5.jpeg';
import cardHolder from './6.jpeg';
import customgiftset1 from './7.jpeg'

export const MensWallets = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Product data array
  const mensWallets = [
    {
      id: 1,
      name: "Premium Leather Bifold Wallet",
      price: 59.99,
      description: "Classic bifold design crafted from full-grain leather",
      image: [leatherBifold],
      rating: 4.8,
      reviews: 342,
      colors: ["Black", "Brown", "Cognac"],
      materials: ["Full-Grain Leather", "Polyester Lining"],
      features: ["12 Card Slots", "2 Bill Compartments", "ID Window", "Hand-Stitched"]
    },
    {
      id: 2,
      name: "RFID Blocking Slim Wallet",
      price: 49.99,
      description: "Protect your cards from digital theft with this secure wallet",
      image: [rfidWallet],
      rating: 4.7,
      reviews: 278,
      colors: ["Black", "Navy", "Charcoal"],
      materials: ["RFID-Blocking Material", "Synthetic Leather"],
      features: ["Blocks 13.56MHz Frequency", "Holds 8-10 Cards", "Slim Profile"]
    },
    {
      id: 3,
      name: "Minimalist Front Pocket Wallet",
      price: 39.99,
      description: "Ultra-thin design perfect for front pocket carry",
      image: [minimalist],
      rating: 4.9,
      reviews: 412,
      colors: ["Black", "Tan", "Olive"],
      materials: ["Top-Grain Leather", "Elastic Band"],
      features: ["Holds 4-6 Cards", "Cash Strap", "0.3\" Thick", "Weight: 1.5oz"]
    },
    {
      id: 4,
      name: "Stainless Steel Money Clip",
      price: 29.99,
      description: "Sleek metal money clip with card capacity",
      image: [moneyClip],
      rating: 4.6,
      reviews: 195,
      colors: ["Silver", "Black", "Gunmetal"],
      materials: ["Stainless Steel", "Rubber Grip"],
      features: ["Holds 10+ Bills", "3 Card Capacity", "Anti-Slip Design", "Lifetime Guarantee"]
    },
    {
      id: 5,
      name: "Travel Passport Wallet",
      price: 69.99,
      description: "Organized travel companion for documents and cards",
      image: [travelWallet],
      rating: 4.7,
      reviews: 187,
      colors: ["Black", "Brown", "Navy"],
      materials: ["Genuine Leather", "Nylon Interior"],
      features: ["Passport Slot", "4 Card Pockets", "Ticket Holder", "Pen Loop", "Zippered Coin Pocket"]
    },
    {
      id: 6,
      name: "Aluminum Card Holder",
      price: 45.99,
      description: "Modern metal card case with quick-access mechanism",
      image: [cardHolder],
      rating: 4.5,
      reviews: 156,
      colors: ["Silver", "Black", "Gold"],
      materials: ["Aircraft-Grade Aluminum", "Rubberized Interior"],
      features: ["Holds 2-4 Cards", "Push-Button Release", "Scratch Resistant", "Money Clip"]
    },{
  id: 7,
  name: "Personalized Wallet & Keychain Gift Set",
  price: 22.49,
  description: "A premium black faux-leather wallet and matching keychain featuring gold-plated customized name tags. Ideal for gifting on birthdays, anniversaries, or special occasions.",
  image: [customgiftset1],
  rating: 4.6,
  reviews: 198,
  type: "Gift Set",
  colors: ["Black with Gold Accents"],
  features: ["Custom Name Engraving", "Premium Faux Leather", "Includes Wallet & Keychain", "Crown Emblem Detailing", "Gift-Ready Packaging" ],
 } ];
  
  const handleAddToCart = (wallet) => {
    addToCart({ ...wallet, image: wallet.image && wallet.image[0], quantity: 1 });
    toast.success(`${wallet.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="mens-wallets-container">
      <h1 className="mens-wallets-header">Men's Wallets Collection</h1>
      <div className="mens-wallets-grid">
        {mensWallets.map((wallet) => (
          <div key={wallet.id} className="mens-wallet-card">
            <div className="wallet-image-container">
              <img src={wallet.image[0]} alt={wallet.name} className="wallet-main-image" />
              <div className="wallet-thumbnails">
                {wallet.image.slice(1).map((img, index) => (
                  <img key={index} src={img} alt={`${wallet.name} ${index + 2}`} className="thumbnail" />
                ))}
              </div>
            </div>
            <div className="wallet-info">
              <h2 className="wallet-name">{wallet.name}</h2>
              <p className="wallet-price">${wallet.price.toFixed(2)}</p>
              <div className="wallet-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(wallet.rating) ? 'filled' : ''}`}>
                    {i < Math.floor(wallet.rating) ? '★' : '☆'}
                  </span>
                ))}
                <span className="review-count">({wallet.reviews})</span>
              </div>
              <p className="wallet-description">{wallet.description}</p>
              
              <div className="wallet-details">
                <div className="detail-item">
                  <span className="detail-label">Material:</span>
                  <span className="detail-value">{wallet.material}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{wallet.type}</span>
                </div>
              </div>
              
              <div className="wallet-options">
                <div className="color-options">
                  <span>Colors: </span>
                  {wallet.colors.map((color) => (
                    <button 
                      key={color} 
                      className="color-option" 
                      style={{ 
                        backgroundColor: color === "Black" ? "#000000" : 
                                      color === "Brown" ? "#5e2c04" : 
                                      color === "Tan" ? "#d2b48c" : 
                                      color === "Navy" ? "#001f3f" : 
                                      color === "Gray" ? "#808080" : 
                                      color === "Silver" ? "#c0c0c0" : 
                                      color === "Gunmetal" ? "#2a3439" : "#ffffff",
                        border: color === "Tan" || color === "Silver" ? "1px solid #ccc" : "none"
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              <div className="wallet-actions">
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(wallet)}>Add to Cart</button>
                <button className="wishlist-btn">♡ Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensWallets;
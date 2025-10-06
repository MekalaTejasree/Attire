import React from 'react';
import './dress.css';

// Import dress product images
import dress1 from './1.jpg';
import dress2 from './2.jpg';
import dress3 from './3.webp';
import dress4 from './4.webp';
import dress5 from './5.jpeg';
import dress6 from './6.jpg';
import dress7 from './7.webp';
import dress8 from './8.jpg';
import dress9 from './9.jpg';

const KidsDresses = () => {
  // Dress product data
  const dressProducts = [
    {
      id: 1,
      name: "Floral Party Dress",
      price: 34.99,
      description: "Beautiful floral dress with ruffled sleeves and satin ribbon",
      image: dress1,
      rating: 4.9,
      reviews: 187,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Party Dress",
      colors: ["Pink", "Lavender", "Yellow"],
      occasion: "Birthdays, Special Events"
    },
    {
      id: 2,
      name: "Denim Pinafore Dress",
      price: 29.99,
      description: "Stylish denim dress with adjustable straps and pockets",
      image: dress2,
      rating: 4.7,
      reviews: 142,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Casual Dress",
      colors: ["Light Blue", "Dark Wash"],
      occasion: "School, Everyday"
    },
    {
      id: 3,
      name: "Tutu Dress Set",
      price: 39.99,
      description: "Sparkly tutu with matching leotard and hair accessory",
      image: dress3,
      rating: 4.8,
      reviews: 231,
      sizes: ["5-6", "7-8", "9-10"],
      type: "Tutu Dress",
      colors: ["Pink", "Purple", "Blue"],
      occasion: "Dance, Parties"
    },
    {
      id: 4,
      name: "Sunflower Sundress",
      price: 27.99,
      description: "Lightweight cotton dress with sunflower print and smocking",
      image: dress4,
      rating: 4.6,
      reviews: 98,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Summer Dress",
      colors: ["Yellow", "White"],
      occasion: "Summer, Vacations"
    },
    {
      id: 5,
      name: "Velvet Holiday Dress",
      price: 44.99,
      description: "Elegant velvet dress with lace collar and satin bow",
      image: dress5,
      rating: 4.9,
      reviews: 176,
      sizes: ["7-8", "9-10", "11-12"],
      type: "Holiday Dress",
      colors: ["Red", "Navy", "Burgundy"],
      occasion: "Christmas, Holidays"
    },
    {
      id: 6,
      name: "T-Shirt Dress",
      price: 22.99,
      description: "Comfy knit dress with unicorn graphic and pockets",
      image: dress6,
      rating: 4.5,
      reviews: 112,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Casual Dress",
      colors: ["Gray", "Pink", "Mint"],
      occasion: "Playdates, Everyday"
    },
    {
  id: 7,
  name: "Floral Charm Bow Dress",
  price: 34.99,
  description: "Elegant pink floral knee-length dress with a white top and front bow tie, perfect for parties and festive occasions.",
  image:dress7 ,
  rating: 4.7,
  reviews: 205,
  sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
  type: "Party Dress",
  colors: ["White & Pink", "Peach & Cream"],
  features: ["Soft Blended Fabric","Decorative Front Bow","Short Flutter Sleeves","Back Zip Closure","Comfort Fit for All-Day Wear" ]
},
{
  id: 8,
  name: "Royal Blue Princess Tulle Dress",
  price: 42.99,
  description: "A beautiful sleeveless royal blue dress with a floral lace bodice, layered tulle skirt, and a statement bow — perfect for weddings, birthdays, and special occasions.",
  image:dress8 ,
  rating: 4.9,
  reviews: 312,
  sizes: ["4-5", "6-7", "8-9", "10-11", "12-13"],
  type: "Formal Party Dress",
  colors: ["Royal Blue", "Lavender", "Champagne"],
  features: ["Elegant Lace Bodice","Layered Sparkle Tulle Skirt","Satin Waistband with Large Bow","Hidden Zip Closure", "Fully Lined for Comfort" ]
},
{
  id: 9,
  name: "Midnight Sparkle Gown",
  price: 44.99,
description: "An enchanting midnight blue gown with a V-neck bodice, tulle layers, and a jeweled waist accent. Ideal for flower girls, birthdays, or elegant evening events.",
  image: dress9,
  rating: 4.8,
  reviews: 289,
  sizes: ["4-5", "6-7", "8-9", "10-11", "12-13"],
  type: "Occasion Wear",
  colors: ["Midnight Blue", "Rose Gold", "Ivory"],
  features: [ "Sleeveless V-Neck Design","Soft Glitter Tulle Overlay","Embellished Waist Detail", "Full Flared Skirt","Concealed Back Zipper" ]
}



  ];

  const ProductCard = ({ product }) => (
    <div className="dress-product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <span className="product-type">{product.type}</span>
          <span className="product-occasion">{product.occasion}</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </span>
          ))}
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-details">
          <div className="product-sizes">
            <span>Sizes: </span>
            {product.sizes.map(size => (
              <span key={size} className="size-tag">{size}</span>
            ))}
          </div>
          <div className="product-colors">
            <span>Colors: </span>
            {product.colors.map(color => (
              <span key={color} className="color-tag">{color}</span>
            ))}
          </div>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="kids-dresses-page">
      <h1 className="page-title">Girls' Dresses (Ages 5-14)</h1>
      <p className="page-subtitle">Beautiful dresses for every occasion</p>
      
      <div className="dress-products-grid">
        {dressProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsDresses;
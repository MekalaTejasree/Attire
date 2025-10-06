import React from 'react';
import './men.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import all product images
import formal1 from './WESTERN/FORMALS/1.jpeg';
import formal2 from './WESTERN/FORMALS/2.jpeg';
import formal3 from './WESTERN/FORMALS/3.jpeg';
import formal4 from './WESTERN/FORMALS/4.jpeg';
import formal5 from './WESTERN/FORMALS/5.jpeg';
import formal6 from './WESTERN/FORMALS/6.jpg';

import jeans1 from './WESTERN/JEANS/1.jpeg';
import jeans2 from './WESTERN/JEANS/2.jpeg';
import jeans3 from './WESTERN/JEANS/3.jpeg';
import jeans4 from './WESTERN/JEANS/4.jpeg';
import jeans5 from './WESTERN/JEANS/5.jpeg';
import jeans6 from './WESTERN/JEANS/6.jpeg';

import tshirt1 from './WESTERN/T-SHIRTS/1.jpeg';
import tshirt2 from './WESTERN/T-SHIRTS/2.jpeg';
import tshirt3 from './WESTERN/T-SHIRTS/3.jpeg';
import tshirt4 from './WESTERN/T-SHIRTS/4.jpeg';
import tshirt5 from './WESTERN/T-SHIRTS/5.webp';
import tshirt6 from './WESTERN/T-SHIRTS/6.jpg';

import trouser1 from './WESTERN/TROUSERS/1.jpeg';
import trouser2 from './WESTERN/TROUSERS/2.jpeg';
import trouser3 from './WESTERN/TROUSERS/3.jpeg';
import trouser4 from './WESTERN/TROUSERS/4.jpeg';
import trouser5 from './WESTERN/TROUSERS/5.webp';
import trouser6 from './WESTERN/TROUSERS/6.jpeg';

const MenAllProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Combined product data array
  const allProducts = [
    {
      id: 1,
      name: "Premium Slim Fit Suit",
      price: 199.99,
      colors: ["Navy", "Charcoal", "Black"],
      sizes: ["38", "40", "42", "44"],
      description: "Two-piece slim fit suit with premium wool blend fabric.",
      image: formal1,
      rating: 4.8,
      reviews: 215,
      category: "formal"
    },
    {
      id: 2,
      name: "Classic Fit Tuxedo",
      price: 249.99,
      colors: ["Black", "Midnight Blue"],
      sizes: ["38", "40", "42", "44", "46"],
      description: "Formal tuxedo with satin lapels for special occasions.",
      image: formal2,
      rating: 4.9,
      reviews: 187,
      category: "formal"
    },
    {
      id: 3,
      name: "Slim Fit Stretch Jeans",
      price: 49.99,
      colors: ["Dark Blue", "Black", "Light Wash"],
      sizes: ["28", "30", "32", "34", "36"],
      description: "Comfortable slim fit jeans with 2% elastane.",
      image: jeans1,
      rating: 4.6,
      reviews: 342,
      category: "jeans"
    },
    {
      id: 4,
      name: "Straight Fit Classic Jeans",
      price: 44.99,
      colors: ["Medium Blue", "Black", "Stone Wash"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Timeless straight fit jeans with classic styling.",
      image: jeans2,
      rating: 4.5,
      reviews: 287,
      category: "jeans"
    },
    {
      id: 5,
      name: "Classic Crew Neck T-Shirt",
      price: 19.99,
      colors: ["White", "Black", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Premium cotton crew neck t-shirt.",
      image: tshirt1,
      rating: 4.5,
      reviews: 428,
      category: "tshirts"
    },
    {
      id: 6,
      name: "Graphic Print T-Shirt",
      price: 24.99,
      colors: ["Black", "Grey", "Red"],
      sizes: ["S", "M", "L", "XL"],
      description: "Trendy graphic print t-shirt with unique artwork.",
      image: tshirt2,
      rating: 4.6,
      reviews: 312,
      category: "tshirts"
    },
    {
      id: 7,
      name: "Slim Fit Chino Pants",
      price: 59.99,
      colors: ["Khaki", "Navy", "Olive"],
      sizes: ["28", "30", "32", "34", "36"],
      description: "Versatile slim fit chinos with stretch fabric.",
      image: trouser1,
      rating: 4.7,
      reviews: 342,
      category: "trousers"
    },
    {
      id: 8,
      name: "Classic Fit Dress Pants",
      price: 69.99,
      colors: ["Black", "Charcoal", "Navy"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Professional dress pants with wrinkle-resistant fabric.",
      image: trouser2,
      rating: 4.6,
      reviews: 287,
      category: "trousers"
    },
        {
      id: 9,
      name: "Business Formal Blazer",
      price: 129.99,
      colors: ["Gray", "Navy", "Brown"],
      sizes: ["38", "40", "42", "44"],
      description: "Single-button blazer with notch lapel for professional business attire.",
      image: formal3,
      rating: 4.6,
      reviews: 156,
      occasion: "Office",
      fabric: "Polyester Blend",
      fit: "Regular Fit",
      includes: "Blazer Only"
    },
    {
      id: 10,
      name: "Stretch Comfort Dress Pants",
      price: 59.99,
      colors: ["Black", "Gray", "Navy"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Comfortable stretch fabric dress pants with anti-wrinkle technology.",
      image: formal4,
      rating: 4.5,
      reviews: 203,
      occasion: "Business Casual",
      fabric: "Stretch Cotton",
      fit: "Slim Fit",
      includes: "Pants Only"
    },
    {
      id: 11,
      name: "Three-Piece Wedding Suit",
      price: 279.99,
      colors: ["Light Gray", "Navy", "Burgundy"],
      sizes: ["38", "40", "42", "44"],
      description: "Elegant three-piece suit with waistcoat, perfect for weddings and special occasions.",
      image: formal5,
      rating: 4.7,
      reviews: 178,
      occasion: "Wedding",
      fabric: "Italian Wool",
      fit: "Slim Fit",
      includes: "Jacket + Pants + Waistcoat"
    },
    {
      id: 12,
      name: "Executive Dress Shirt",
      price: 39.99,
      colors: ["White", "Blue", "Pale Pink"],
      sizes: ["S", "M", "L", "XL"],
      description: "Premium cotton dress shirt with French cuffs and spread collar.",
      image: formal6,
      rating: 4.4,
      reviews: 167,
      occasion: "Office",
      fabric: "100% Cotton",
      fit: "Regular Fit",
      includes: "Shirt Only"
    },
    {
      id: 13,
      name: "Tapered Fit Stretch Jeans",
      price: 54.99,
      colors: ["Black", "Dark Indigo", "Grey"],
      sizes: ["28", "30", "32", "34"],
      description: "Modern tapered fit that's roomy in the thigh and narrow at the ankle with stretch fabric.",
      image: jeans3,
      rating: 4.7,
      reviews: 198,
      fit: "Tapered Fit",
      wash: "Rinse Wash",
      material: "99% Cotton, 1% Elastane"
    },
    {
      id: 14,
      name: "Relaxed Fit Carpenter Jeans",
      price: 59.99,
      colors: ["Dark Blue", "Khaki", "Olive"],
      sizes: ["32", "34", "36", "38", "40"],
      description: "Durable carpenter jeans with utility pockets and relaxed fit for maximum comfort.",
      image: jeans4,
      rating: 4.4,
      reviews: 156,
      fit: "Relaxed Fit",
      wash: "Dark Wash",
      material: "100% Cotton"
    },
    {
      id: 15,
      name: "Skinny Fit Ripped Jeans",
      price: 64.99,
      colors: ["Light Blue", "Black", "Grey Wash"],
      sizes: ["28", "30", "32"],
      description: "Trendy skinny fit jeans with distressed details and stretch fabric for mobility.",
      image: [jeans5],
      rating: 4.3,
      reviews: 231,
      fit: "Skinny Fit",
      wash: "Distressed Wash",
      material: "98% Cotton, 2% Elastane"
    },
    {
      id: 16,
      name: "Bootcut Fit Vintage Jeans",
      price: 69.99,
      colors: ["Vintage Blue", "Dark Wash", "Black"],
      sizes: ["30", "32", "34", "36"],
      description: "Classic bootcut jeans with vintage wash, slightly flared to fit over boots comfortably.",
      image: [jeans6],
      rating: 4.5,
      reviews: 178,
      fit: "Bootcut Fit",
      wash: "Vintage Wash",
      material: "100% Cotton"
    },
    {
      id: 17,
      name: "Tapered Fit Cargo Pants",
      price: 54.99,
      colors: ["Beige", "Black", "Green"],
      sizes: ["30", "32", "34", "36"],
      description: "Functional cargo pants with tapered leg and multiple utility pockets.",
      image: [trouser3],
      rating: 4.5,
      reviews: 198,
      fit: "Tapered Fit",
      material: "100% Cotton Twill",
      style: "Cargo"
    },
    {
      id: 18,
      name: "Relaxed Fit Linen Pants",
      price: 49.99,
      colors: ["White", "Beige", "Blue"],
      sizes: ["32", "34", "36", "38"],
      description: "Breathable linen pants with relaxed fit for summer comfort.",
      image: [trouser4],
      rating: 4.4,
      reviews: 156,
      fit: "Relaxed Fit",
      material: "100% Linen",
      style: "Linen Pants"
    },
    {
      id: 19,
      name: "Slim Fit Corduroy Pants",
      price: 64.99,
      colors: ["Brown", "Burgundy", "Navy"],
      sizes: ["30", "32", "34"],
      description: "Stylish corduroy pants with fine wale texture and comfortable stretch.",
      image: [trouser5],
      rating: 4.6,
      reviews: 231,
      fit: "Slim Fit",
      material: "100% Cotton Corduroy",
      style: "Corduroy"
    },
    {
      id: 20,
      name: "Performance Travel Pants",
      price: 79.99,
      colors: ["Black", "Gray", "Navy"],
      sizes: ["30", "32", "34", "36"],
      description: "Tech fabric pants with stretch, water resistance, and quick-dry properties.",
      image: [trouser6],
      rating: 4.8,
      reviews: 254,
      fit: "Straight Fit",
      material: "Nylon-Spandex Blend",
      style: "Performance"
    },
    {
      id: 21,
      name: "V-Neck Stretch T-Shirt",
      price: 22.99,
      colors: ["White", "Charcoal", "Burgundy"],
      sizes: ["M", "L", "XL", "XXL"],
      description: "Comfortable v-neck t-shirt with stretch fabric for active lifestyle.",
      image: [tshirt3],
      rating: 4.4,
      reviews: 287,
      fit: "Fitted",
      material: "98% Cotton, 2% Spandex",
      sleeve: "Short Sleeve"
    },
    {
      id: 22,
      name: "Pocket T-Shirt",
      price: 26.99,
      colors: ["Navy", "Olive", "Heather Grey"],
      sizes: ["S", "M", "L", "XL"],
      description: "Classic pocket t-shirt with reinforced stitching and premium fabric.",
      image: [tshirt4],
      rating: 4.7,
      reviews: 198,
      fit: "Classic Fit",
      material: "100% Organic Cotton",
      sleeve: "Short Sleeve"
    },
    {
      id: 23,
      name: "Oversized Fit T-Shirt",
      price: 29.99,
      colors: ["Black", "White", "Beige"],
      sizes: ["L", "XL", "XXL"],
      description: "Trendy oversized fit t-shirt with dropped shoulders and relaxed silhouette.",
      image: [tshirt5],
      rating: 4.3,
      reviews: 176,
      fit: "Oversized",
      material: "100% Cotton",
      sleeve: "Short Sleeve"
    },
    {
      id: 24,
      name: "Performance Quick-Dry T-Shirt",
      price: 34.99,
      colors: ["Blue", "Black", "Grey"],
      sizes: ["S", "M", "L", "XL"],
      description: "Moisture-wicking performance tee with UV protection for sports and outdoor activities.",
      image: [tshirt6],
      rating: 4.8,
      reviews: 254,
      fit: "Athletic Fit",
      material: "Polyester Blend",
      sleeve: "Short Sleeve"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </span>
          ))}
          <span className="review-count">({product.reviews})</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-options">
          <div className="color-options">
            <span>Colors: </span>
            {product.colors.map((color) => (
              <span 
                key={color} 
                className="color-option" 
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
          <div className="size-options">
            <span>Sizes: </span>
            {product.sizes.map((size) => (
              <span key={size} className="size-option">{size}</span>
            ))}
          </div>
        </div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="men-all-products">
      <h1 className="page-title">Men's Collection</h1>
      
      <div className="products-grid">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MenAllProducts;
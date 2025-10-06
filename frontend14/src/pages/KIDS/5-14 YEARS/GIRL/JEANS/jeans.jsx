import React from 'react';
import './jeans.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../../../../../context/CartContext';

// Import jeans product images
import jeans1 from './1.jpg';
import jeans2 from './2.jpg';
import jeans3 from './3.jpg';
import jeans4 from './4.jpg';
import jeans5 from './5.webp';
import jeans6 from './6.avif';
import jeans7 from './7.jpg';


const KidsGirlsJeans = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Jeans product data
  const jeansProducts = [
    {
      id: 1,
      name: "Skinny Jeans with Rhinestones",
      price: 29.99,
      description: "Stretchy skinny jeans with glittery rhinestone details",
      image: jeans1,
      rating: 4.8,
      reviews: 156,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Skinny Fit",
      colors: ["Light Blue", "Black"],
      features: ["Stretch Denim", "Rhinestone Accents", "Comfort Waistband"]
    },
    {
      id: 2,
      name: "Flared Jeans with Embroidery",
      price: 34.99,
      description: "Trendy flared jeans with floral embroidery details",
      image: jeans2,
      rating: 4.7,
      reviews: 132,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Flared Fit",
      colors: ["Medium Wash", "White Wash"],
      features: ["Cotton Blend", "Embroidered Details", "Adjustable Waist"]
    },
    {
      id: 3,
      name: "Jeggings with Sparkle",
      price: 26.99,
      description: "Super soft jeggings with subtle sparkle thread",
      image: jeans3,
      rating: 4.9,
      reviews: 201,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Jegging Fit",
      colors: ["Dark Blue", "Gray", "Black"],
      features: ["Ultra Stretchy", "No Scratch Tags", "Pull-On Design"]
    },
    {
      id: 4,
      name: "High-Waisted Mom Jeans",
      price: 31.99,
      description: "Vintage-inspired high-waisted jeans with raw hem",
      image: jeans4,
      rating: 4.6,
      reviews: 98,
      sizes: ["9-10", "11-12", "13-14"],
      type: "Relaxed Fit",
      colors: ["Light Wash", "Medium Wash"],
      features: ["90s Style", "Comfort Waist", "Distressed Details"]
    },
    {
      id: 5,
      name: "Colored Skinny Jeans",
      price: 27.99,
      description: "Vibrant colored jeans in super stretchy fabric",
      image: jeans5,
      rating: 4.5,
      reviews: 112,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Skinny Fit",
      colors: ["Pink", "Purple", "Red", "Mint"],
      features: ["Fun Colors", "Play-Friendly", "Easy Care"]
    },
    {
      id: 6,
      name: "Denim Overalls",
      price: 39.99,
      description: "Adjustable denim overalls with embroidered patches",
      image: jeans6,
      rating: 4.8,
      reviews: 178,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Overalls",
      colors: ["Classic Blue", "Black"],
      features: ["Adjustable Straps", "Functional Pockets", "Fun Patches"]
    },
    {
  id: 7,
  name: "Chic Yellow Tee & Button-Up Jeggings",
  price: 29.99,
  description: "Trendy yellow graphic tee paired with high-waisted button-up jeggings. A perfect combo of comfort and style for casual days.",
  image: jeans7,
  rating: 4.6,
  reviews: 124,
  sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
  type: "Tee & Jeggings Set",
  colors: ["Yellow & Black"],
  features: [
    "Soft Cotton Tee with Sparkle Print","Stretchy High-Rise Jeggings","Decorative Front Buttons","Easy Pull-On Waistband"]
}
  ];

  const ProductCard = ({ product }) => (
    <div className="jeans-product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-type">{product.type}</p>
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
          <div className="product-features">
            {product.features.map((feature, index) => (
              <span key={index} className="feature-tag">✓ {feature}</span>
            ))}
          </div>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="kids-girls-jeans-page">
      <h1 className="page-title">Girls' Jeans (Ages 5-14)</h1>
      <p className="page-subtitle">Stylish and comfortable jeans for active girls</p>
      
      <div className="jeans-products-grid">
        {jeansProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsGirlsJeans;
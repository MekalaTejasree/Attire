import React from 'react';
import './top.css';

// Import t-shirt product images
import tshirt1 from './1.jpg';
import tshirt2 from './2.jpg';
import tshirt3 from './3.jpeg';
import tshirt4 from './4.jpeg';
import tshirt5 from './5.jpeg';
import tshirt6 from './6.jpg';

const KidsTshirts = () => {
  // T-shirt product data
  const tshirtProducts = [
    {
      id: 1,
      name: "Superhero Graphic Tee",
      price: 14.99,
      description: "100% cotton t-shirt with cool superhero print",
      image: tshirt1,
      rating: 4.8,
      reviews: 156,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Graphic",
      colors: ["Red", "Blue", "Black"]
    },
    {
      id: 2,
      name: "Striped Polo Shirt",
      price: 19.99,
      description: "Classic polo with breathable pique cotton",
      image: tshirt2,
      rating: 4.6,
      reviews: 98,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Polo",
      colors: ["Navy/White", "Red/White"]
    },
    {
      id: 3,
      name: "Athletic Quick-Dry Tee",
      price: 16.99,
      description: "Moisture-wicking fabric for sports and play",
      image: tshirt3,
      rating: 4.7,
      reviews: 132,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Activewear",
      colors: ["Gray", "Black", "Royal Blue"]
    },
    {
      id: 4,
      name: "Dinosaur Print T-Shirt",
      price: 15.99,
      description: "Fun dinosaur graphic on soft cotton tee",
      image: tshirt4,
      rating: 4.9,
      reviews: 187,
      sizes: ["5-6", "7-8", "9-10"],
      type: "Graphic",
      colors: ["Green", "Blue", "Red"]
    },
    {
      id: 5,
      name: "Plain Crewneck Tee",
      price: 12.99,
      description: "Basic comfortable tee for everyday wear",
      image: tshirt5,
      rating: 4.5,
      reviews: 112,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Basic",
      colors: ["White", "Black", "Gray", "Navy"]
    },
    {
      id: 6,
      name: "Long Sleeve Jersey",
      price: 18.99,
      description: "Soft long sleeve shirt for cooler days",
      image: tshirt6,
      rating: 4.4,
      reviews: 87,
      sizes: ["7-8", "9-10", "11-12"],
      type: "Long Sleeve",
      colors: ["Black", "Navy", "Maroon"]
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="tshirt-product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-type">{product.type} T-Shirt</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </span>
          ))}
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-sizes-colors">
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
    <div className="kids-tshirts-page">
      <h1 className="page-title">Boys' T-Shirts (Ages 5-14)</h1>
      <p className="page-subtitle">Fun, comfortable tees for school, play, and everyday wear</p>
      
      <div className="tshirt-products-grid">
        {tshirtProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsTshirts;
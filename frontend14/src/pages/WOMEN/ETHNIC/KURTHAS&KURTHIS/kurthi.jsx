import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import { toast } from 'react-hot-toast';
import './kurthi.css';

// Import kurthi images
import kurthi1 from './1.jpeg';
import kurthi2 from './2.jpeg';
import kurthi3 from './3.jpeg';
import kurthi4 from './4.jpeg';
import kurthi5 from './5.jpeg';
import kurthi6 from './6.jpeg';

const EthnicKurtis = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    {
      id: 801,
      name: "Silk Printed Kurthi with Dupatta",
      price: 1599,
      image: kurthi1,
      details: "Pure silk, floral prints, comes with matching dupatta, Elegant silk kurthi with beautiful floral prints, perfect for weddings and festive occasions. Comes with a matching dupatta.",
      rating: 4.7,
      sizes: ["S", "M", "L"],
      colors: ["Red", "Pink"],
      category: "Women > Ethnic > Kurtis"
    },
    {
      id: 802,
      name: "Cotton Chikankari Kurthi Set",
      price: 1299,
      image: kurthi2,
      details: "Hand-embroidered chikankari, cotton fabric ,Traditional chikankari work kurthi set in breathable cotton fabric, ideal for summer wear and casual outings.",
      rating: 4.5,
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Blue"],
      category: "Women > Ethnic > Kurtis"
    },
    {
      id: 803,
      name: "Designer Party Wear Kurthi",
      price: 1899,
      oldPrice: 2299,
      image: kurthi3,
      details: "Heavy embroidery, sequin work, semi-stitched ,Glamorous party wear kurthi with heavy embroidery and sequin work. Semi-stitched for perfect fit.",
      rating: 4.8,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gold"],
      category: "Women > Ethnic > Kurtis"
    },
    {
      id: 804,
      name: "Casual Printed Kurthi",
      price: 899,
      image: kurthi4,
      details: "Rayon fabric, a-line cut, side slits ,Comfortable daily wear kurthi in rayon fabric with trendy prints and a-line cut for flattering fit.",
      rating: 4.3,
      sizes: ["XS", "S", "M"],
      colors: ["blue", "Yellow"],
      category: "Women > Ethnic > Kurtis"
    },
    {
      id: 805,
      name: "Bridal Kurthi with Lehenga",
      price: 3499,
      oldPrice: 3999,
      image: kurthi5,
      details: "Heavy zari work, lehenga style, dupatta included, Exquisite bridal kurthi with lehenga style bottom and heavy zari work. Complete with matching dupatta.",
      rating: 4.9,
      sizes: ["M", "L", "XL"],
      colors: ["Red", "pink"],
      category: "Women > Ethnic > Kurtis"
    },
    {
      id: 806,
      name: "Anarkali Style Kurthi",
      price: 1399,
      image: kurthi6,
      details: "Flowy silhouette, floor length, cotton-silk blend, Graceful Anarkali style kurthi with flowy silhouette and elegant floor length design in premium cotton-silk blend.",
      rating: 4.6,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Purple"],
      category: "Women > Ethnic > Kurtis"
    }
  ];

  const handleAddToCart = (product, selectedSize) => {
    addToCart({
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} (Size ${selectedSize})`,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize
    });
    
    toast.success(`${product.name} (Size ${selectedSize}) added to cart!`, {
      duration: 2000,
      position: 'bottom-right',
      action: {
        label: 'View Cart',
        onClick: () => navigate('/cart')
      }
    });
  };

  const handleQuickView = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="we-kurthi-container">
      <header className="we-kurthi-header">
        <h3>Women's Ethnic Kurtis Collection</h3></header>
        
    

      <div className="we-kurthi-grid">
        {products.map(product => {
          const discount = product.oldPrice 
            ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
            : 0;

          return (
            <article key={product.id} className="we-kurthi-card">
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="we-kurthi-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.webp';
                    e.target.alt = 'Product image not available';
                  }}
                />
                
              
              </div>
              <div className="we-kurthi-details">
                <h2>{product.name}</h2>
                <div className="price-rating">
                  <div className="price-container">
                    <span className="we-price">₹{product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="old-price">₹{product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`star ${i < Math.floor(product.rating) ? 'filled' : ''} ${
                          i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? 'half-filled' : ''
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="we-desc">{product.details}</p>
                <div className="size-selector">
                  <label>Size:</label>
                  <select className="size-dropdown" id={`size-${product.id}`}>
                    {product.sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="color-options">
                  <label>Colors:</label>
                  <div className="color-swatches">
                    {product.colors.map(color => (
                      <span 
                        key={color}
                        className="color-swatch"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                <div className="we-actions">
                  <button 
                    className="we-cart-btn"
                    onClick={() => handleAddToCart(product, document.getElementById(`size-${product.id}`).value)}
                  >
                    Add to Cart
                  </button>
                  <button className="we-wishlist-btn">♡ Wishlist</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default EthnicKurtis;
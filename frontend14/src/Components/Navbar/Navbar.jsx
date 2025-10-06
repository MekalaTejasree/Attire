import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo2.jpeg';
import cart_icon from '../Assets/cart.jpeg';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/authcontext';
import { logoutUser } from '../../context/firebase/firebase';
import { toast } from 'react-hot-toast';

export const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { itemCount } = useCart();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Logout failed. Please try again.');
    }
  };

  // Get display name from user object
  const getDisplayName = () => {
    if (currentUser) {
      // Try to get display name, fallback to email, then to "User"
      return currentUser.displayName || 
             currentUser.email?.split('@')[0] || 
             'User';
    }
    return null;
  };

  const navData = {
    WOMEN: {
      Western: ['Jeans', 'T-shirts', 'Tops', 'Trousers'],
      Ethnic: ['Dresses', 'Suits', 'Kurtas'],
      Footwear: ['Shoes', 'Sandals', 'Sneakers']
    },
    MEN: {
      Western: ['Formal', 'Jeans',  'Trousers', 'T-shirts'],
      Footwear: ['Sneakers', 'Shoes']
    },
    KIDS: {
      'Boys (5-14)': ['Jeans', 'Shots', 'T-shirt'],
      'Girls (5-14)': ['Dress', 'Jeans',  'Tops'],
      'Baby Boy (0-5)': ['jacket', 'Bottom'],
      'Baby Girl (0-5)': [ 'Top', 'bottom']
    },
    SKINCARE: [
      'Men',
      'Women'
    ],
    ACCESORIES: {
      Men: ['Belts', 'Rings & Bracelets', 'SunGlass', 'Wallets'],
      Women: ['SunGlasses', 'Handbags', 'Hairpins']
    }
  };

  return (
    <div className='navbar-container'>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
          <p>ATTIRE</p>
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/">All</Link>
            
          </li>

          {Object.keys(navData).map((category) => (
            <li
              key={category}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link to={`/${category}`}>{category}</Link>

              {hoveredCategory === category && (
                <div className="dropdown-menu">
                  {typeof navData[category] === 'object' &&
                  !Array.isArray(navData[category]) ? (
                    Object.keys(navData[category]).map((subcategory) =>
                      Array.isArray(navData[category][subcategory]) ? (
                        <div key={subcategory} className="dropdown-column">
                          <h4>{subcategory}</h4>
                          <ul>
                            {navData[category][subcategory].map((item) => (
                              <li key={item}>
                                <Link
                                  to={`/${category}/${item
                                    .replace(/\s+/g, '-')
                                    .toLowerCase()}`}
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null
                    )
                  ) : (
                    <div className="dropdown-column">
                      <ul>
                        {Array.isArray(navData[category]) &&
                          navData[category].map((item) => (
                            <li key={item}>
                              <Link
                                to={`/${category}/${item
                                  .replace(/\s+/g, '-')
                                  .toLowerCase()}`}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {currentUser ? (
            <div className="user-section">
              <span className="username">Welcome, {getDisplayName()}!</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
          <Link to="/cart" className="cart-link">
            <img src={cart_icon} alt="Cart" className="cart-icon" />
            <span className="cart-count">{itemCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

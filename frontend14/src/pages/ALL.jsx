import React from 'react';
import { Link } from 'react-router-dom';
import './ALL.css';
import jeans from '../pages/WOMEN/WESTERN/JEANS/6.jpeg';
import shirts from '../pages/WOMEN/WESTERN/SHIRTS&TOPS/5.jpeg';
import tops from '../pages/WOMEN/WESTERN/T-SHIRTS/1.jpeg';
import trousers from '../pages/WOMEN/WESTERN/TROUSERS/4.jpeg';
import dresses from '../pages/WOMEN/ETHNIC/ETHNIC SET/1.jpeg';
import suit from '../pages/WOMEN/ETHNIC/ETHNIC SUITS/1.jpeg';
import kurtha from '../pages/WOMEN/ETHNIC/KURTHAS&KURTHIS/4.jpeg';
import kurthis from '../pages/WOMEN/ETHNIC/KURTHAS&KURTHIS/1.jpeg';
import formal from '../pages/MEN/WESTERN/FORMALS/2.jpeg';
import Jeans from '../pages/MEN/WESTERN/JEANS/2.jpeg';
import tshirts from '../pages/MEN/WESTERN/T-SHIRTS/2.jpeg';
import Trousers from '../pages/MEN/WESTERN/TROUSERS/3.jpeg';
import babyboytop from '../pages/KIDS/0-5 YEARS/BABY BOY/TOP/1.jpeg';
import babyboybottom from '../pages/KIDS/0-5 YEARS/BABY BOY/BOTTOM/4.jpeg';
import babygirltop from '../pages/KIDS/0-5 YEARS/BABY GIRL/TOP/2.jpeg';
import babygirlbottom from '../pages/KIDS/0-5 YEARS/BABY GIRL/BOTTOM/2.jpeg';
import boyjeans from '../pages/KIDS/5-14 YEARS/BOY/JEANS/3.jpg';
import boytop from '../pages/KIDS/5-14 YEARS/BOY/TOP/3.jpeg';
import girltop from '../pages/KIDS/5-14 YEARS/GIRL/TOP/4.jpg';
import girldress from '../pages/KIDS/5-14 YEARS/GIRL/DRESS/9.jpg';
import sc1 from '../pages/SKIN CARE/MEN/3.jpeg';
import sc2 from '../pages/SKIN CARE/MEN/15.jpeg';
import sc3 from '../pages/SKIN CARE/WOMEN/4.jpeg';
import sc4 from '../pages/SKIN CARE/WOMEN/12.jpeg';
import belt from '../pages/ACCESORIES/MEN/BELT/7.jpeg';
import rings from '../pages/ACCESORIES/MEN/RINGS/6.jpeg';
import sunglass from '../pages/ACCESORIES/MEN/SUNGLASSES/2.jpeg';
import wallet from '../pages/ACCESORIES/MEN/WALLET/2.jpeg';
import hairpins from '../pages/ACCESORIES/WOMEN/HAIRPINS/1.jpeg';
import handbag1 from '../pages/ACCESORIES/WOMEN/HANDBAGS/4.jpeg';
import handbag2 from '../pages/ACCESORIES/WOMEN/HANDBAGS/5.jpeg';
import sunglasses from '../pages/ACCESORIES/WOMEN/SUNGLASSES/5.jpeg';
import menshoes1 from '../pages/MEN/FOOTWEAR/SHOES/4.jpeg';
import menshoes2 from '../pages/MEN/FOOTWEAR/SHOES/3.jpeg';
import mensneakers1 from '../pages/MEN/FOOTWEAR/SNEAKERS/2.jpeg';
import mensneakers2 from '../pages/MEN/FOOTWEAR/SNEAKERS/3.jpeg';
import sandels from '../pages/WOMEN/FOOTWEAR/SANDELS/4.jpeg';
import shoes from '../pages/WOMEN/FOOTWEAR/SHOES/1.jpeg';
import sneakers1 from '../pages/WOMEN/FOOTWEAR/SNEAKERS/3.jpeg';
import sneakers2 from '../pages/WOMEN/FOOTWEAR/SNEAKERS/4.jpeg';



export const All = () => {
  const slides = [
    { id: 1, image:shirts, title: "Women's Collection", link: "/WOMEN" },
    { id: 2, image:formal, title: "Men's Collection", link: "/MEN" },
    { id: 3, image: girldress, title: "Kids Collection", link: "/KIDS" },
    { id: 4, image: sc1, title: "Beauty Products", link: "/SKIN CARE" },
    { id: 5, image: hairpins, title: "Accessories", link: "/ACCESORIES" },
    { id: 6, image: mensneakers1, title: "Footwear", link: "/FOOTWEAR" },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>

      {/* New Arrivals Slideshow */}
      <div className="new-arrivals">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="slideshow-container">
          <div className="slideshow" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                <Link to={slide.link}>
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-content">
                    <h3>NEW collections for everyone</h3>
                    <p>{slide.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="slideshow-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Women Western */}
      <div className='western category-section'>
        <h2 className='category-title'>Women Western</h2>
        <div className='items-grid'>
          <Link to="/WOMEN/jeans" className='item'>
            <img src={jeans} alt='jeans' />
            <p className="item-name">Jeans</p>
          </Link>
          <Link to="/WOMEN/tops" className='item'>
            <img src={shirts} alt='shirts' />
            <p className="item-name">Shirts & Tops</p>
          </Link>
          <Link to="/WOMEN/t-shirts" className='item'>
            <img src={tops} alt='tops' />
            <p className="item-name">T-Shirts</p>
          </Link>
          <Link to="/WOMEN/trousers" className='item'>
            <img src={trousers} alt='trousers' />
            <p className="item-name">Trousers</p>
          </Link>
        </div>
      </div>

      {/* Women Ethnic */}
      <div className='ethnic category-section'>
        <h2 className='category-title'>Women Ethnic</h2>
        <div className='items-grid'>
          <Link to="/WOMEN/dresses" className='item'>
            <img src={dresses} alt='dresses' />
            <p className="item-name">Ethnic Sets</p>
          </Link>
          <Link to="/WOMEN/suits" className='item'>
            <img src={suit} alt='suits' />
            <p className="item-name">Ethnic Suits</p>
          </Link>
          <Link to="/WOMEN/kurtas" className='item'>
            <img src={kurtha} alt='kurtas' />
            <p className="item-name">Kurtas</p>
          </Link>
          <Link to="/WOMEN/kurtas" className='item'>
            <img src={kurthis} alt='kurthis' />
            <p className="item-name">Kurtis</p>
          </Link>
        </div>
      </div>

      {/* Men Western */}
      <div className='menwestern category-section'>
        <h2 className='category-title'>Men Western</h2>
        <div className='items-grid'>
          <Link to="/MEN/formal" className='item'>
            <img src={formal} alt='formal' />
            <p className="item-name">Formals</p>
          </Link>
          <Link to="/MEN/jeans" className='item'>
            <img src={Jeans} alt='jeans' />
            <p className="item-name">Jeans</p>
          </Link>
          <Link to="/MEN/t-shirts" className='item'>
            <img src={tshirts} alt='tshirts' />
            <p className="item-name">T-Shirts</p>
          </Link>
          <Link to="/MEN/trousers" className='item'>
            <img src={Trousers} alt='trousers' />
            <p className="item-name">Trousers</p>
          </Link>
        </div>
      </div>

      {/* Kids 0-5 Years */}
      <div className='_0-5kids category-section'>
        <h2 className='category-title'>Kids (0-5 Years)</h2>
        <div className='items-grid'>
          <Link to="/KIDS/jacket" className='item'>
            <img src={babyboytop} alt='babyboytop' />
            <p className="item-name">Baby Boy Top</p>
          </Link>
          <Link to="/KIDS/bottom" className='item'>
            <img src={babyboybottom} alt='babyboybottom' />
            <p className="item-name">Baby Boy Bottom</p>
          </Link>
          <Link to="/KIDS/top" className='item'>
            <img src={babygirltop} alt='babygirltop' />
            <p className="item-name">Baby Girl Top</p>
          </Link>
          <Link to="/KIDS/bottom" className='item'>
            <img src={babygirlbottom} alt='babygirlbottom' />
            <p className="item-name">Baby Girl Bottom</p>
          </Link>
        </div>
      </div>

      {/* Kids 5-14 Years */}
      <div className='_5-14kids category-section'>
        <h2 className='category-title'>Kids (5-14 Years)</h2>
        <div className='items-grid'>
          <Link to="/KIDS/jeans" className='item'>
            <img src={boyjeans} alt='boyjeans' />
            <p className="item-name">Boy Jeans</p>
          </Link>
          <Link to="/KIDS/t-shirts" className='item'>
            <img src={boytop} alt='boytop' />
            <p className="item-name">Boy T-Shirts</p>
          </Link>
          <Link to="/KIDS/tops" className='item'>
            <img src={girltop} alt='girltop' />
            <p className="item-name">Girl Tops</p>
          </Link>
          <Link to="/KIDS/dress" className='item'>
            <img src={girldress} alt='girldress' />
            <p className="item-name">Girl Dresses</p>
          </Link>
        </div>
      </div>

      {/* Skincare */}
      <div className='skincare category-section'>
        <h2 className='category-title'>Skincare</h2>
        <div className='items-grid'>
          <Link to="/SKIN CARE/men" className='item'>
            <img src={sc1} alt='sc1' />
            <p className="item-name">Men's Skincare</p>
          </Link>
          <Link to="/SKIN CARE/men" className='item'>
            <img src={sc2} alt='sc2' />
            <p className="item-name">Men's Grooming</p>
          </Link>
          <Link to="/SKIN CARE/men" className='item'>
            <img src={sc3} alt='sc3' />
            <p className="item-name">Women's Skincare</p>
          </Link>
          <Link to="/SKIN CARE/men" className='item'>
            <img src={sc4} alt='sc4' />
            <p className="item-name">Women's Beauty</p>
          </Link>
        </div>
      </div>

      {/* Men Accessories */}
      <div className='menaccesories category-section'>
        <h2 className='category-title'>Men Accessories</h2>
        <div className='items-grid'>
          <Link to="/ACCESORIES/MEN/belts" className='item'>
            <img src={belt} alt='belts' />
            <p className="item-name">Belts</p>
          </Link>
          <Link to="/ACCESORIES/MEN/rings-&-braclets" className='item'>
            <img src={rings} alt='rings' />
            <p className="item-name">Rings&Chains&Braclets</p>
          </Link>
          <Link to="/ACCESORIES/MEN/sunglass" className='item'>
            <img src={sunglass} alt='sunglass' />
            <p className="item-name">Sunglasses</p>
          </Link>
          <Link to="/ACCESORIES/MEN/wallets" className='item'>
            <img src={wallet} alt='wallet' />
            <p className="item-name">Wallets</p>
          </Link>
        </div>
      </div>

      {/* Women Accessories */}
      <div className='womenaccesories category-section'>
        <h2 className='category-title'>Women Accessories</h2>
        <div className='items-grid'>
          <Link to="/ACCESORIES/WOMEN/hairpins" className='item'>
            <img src={hairpins} alt='hairpins' />
            <p className="item-name">Hairpins</p>
          </Link>
          <Link to="/ACCESORIES/WOMEN/handbags" className='item'>
            <img src={handbag1} alt='handbag1' />
            <p className="item-name">Handbags</p>
          </Link>
          <Link to="/ACCESORIES/WOMEN/handbags" className='item'>
            <img src={handbag2} alt='handbag2' />
            <p className="item-name">Designer Bags</p>
          </Link>
          <Link to="/ACCESORIES/WOMEN/sunglasses" className='item'>
            <img src={sunglasses} alt='sunglasses' />
            <p className="item-name">Sunglasses</p>
          </Link>
        </div>
      </div>

      {/* Men Footwear */}
      <div className='menfootwear category-section'>
        <h2 className='category-title'>Men Footwear</h2>
        <div className='items-grid'>
          <Link to="/MEN/shoes" className='item'>
            <img src={menshoes1} alt='shoes1' />
            <p className="item-name">Sports Shoes</p>
          </Link>
          <Link to="/MEN/shoes" className='item'>
            <img src={menshoes2} alt='shoes2' />
            <p className="item-name">Formal Shoes</p>
          </Link>
          <Link to="/MEN/sneakers" className='item'>
            <img src={mensneakers1} alt='sneakers1' />
            <p className="item-name">Sneakers</p>
          </Link>
          <Link to="/MEN/sneakers" className='item'>
            <img src={mensneakers2} alt='sneakers2' />
            <p className="item-name">Casual Shoes</p>
          </Link>
        </div>
      </div>

      {/* Women Footwear */}
      <div className='womenfootwear category-section'>
        <h2 className='category-title'>Women Footwear</h2>
        <div className='items-grid'>
          <Link to="/WOMEN/sandels" className='item'>
            <img src={sandels} alt='sandels' />
            <p className="item-name">Sandals</p>
          </Link>
          <Link to="/WOMEN/shoes" className='item'>
            <img src={shoes} alt='shoes' />
            <p className="item-name">Shoes</p>
          </Link>
          <Link to="/WOMEN/sneakers" className='item'>
            <img src={sneakers1} alt='sneakers' />
            <p className="item-name">Sports Sneakers</p>
          </Link>
          <Link to="/WOMEN/sneakers" className='item'>
            <img src={sneakers2} alt='sneakers' />
            <p className="item-name">Causal Sneakers</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
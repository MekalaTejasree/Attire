import React from 'react';
import './accesories.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
// Import belt product images
import belt1 from './MEN/BELT/1.jpeg';
import belt2 from './MEN/BELT/2.jpeg';
import belt3 from './MEN/BELT/3.jpeg';
import belt4 from './MEN/BELT/4.jpeg';
import belt5 from './MEN/BELT/5.jpeg';
import belt6 from './MEN/BELT/6.jpeg';
import belt7 from './MEN/BELT/7.jpeg';


// Import ring images
import ring1 from './MEN/RINGS/1.jpeg';
import ring2 from './MEN/RINGS/2.jpeg';
import ring3 from './MEN/RINGS/3.jpeg';
import ring4 from './MEN/RINGS/4.jpeg';
import ring5 from './MEN/RINGS/5.jpeg';
import ring6 from './MEN/RINGS/6.jpeg'; 
import ring7 from './MEN/RINGS/7.jpeg'; 
import ring8 from './MEN/RINGS/8.jpeg'; 


// Import sunglasses images
import sunglass1 from './MEN/SUNGLASSES/1.jpeg';
import sunglass2 from './MEN/SUNGLASSES/2.jpeg';
import sunglass3 from './MEN/SUNGLASSES/3.jpeg';
import sunglass4 from './MEN/SUNGLASSES/4.jpeg';
import sunglass5 from './MEN/SUNGLASSES/5.jpeg';
import sunglass6 from './MEN/SUNGLASSES/6.jpeg';

// Import wallet product images
import leatherBifold from './MEN/WALLET/1.jpeg';
import rfidWallet from './MEN/WALLET/2.jpeg';
import minimalist from './MEN/WALLET/3.jpeg';
import moneyClip from './MEN/WALLET/4.jpeg';
import travelWallet from './MEN/WALLET/5.jpeg';
import cardHolder from './MEN/WALLET/6.jpeg';
import customgiftset1 from './MEN/WALLET/7.jpeg'

 // Import hairpin images
import pearlHairpin from './WOMEN/HAIRPINS/1.jpeg';
import goldHairpin from './WOMEN/HAIRPINS/2.jpeg';
import floralHairpin from './WOMEN/HAIRPINS/3.jpeg';
import crystalHairpin from './WOMEN/HAIRPINS/4.jpeg';
import minimalistHairpin from './WOMEN/HAIRPINS/5.jpeg';
import vintageHairpin from './WOMEN/HAIRPINS/6.jpeg';
import giftSetHairpin from './WOMEN/HAIRPINS/7.jpg';

// Import handbag images (replace with actual imports)
import bag1 from './WOMEN/HANDBAGS/1.jpeg';
import bag2 from './WOMEN/HANDBAGS/2.jpeg';
import bag3 from './WOMEN/HANDBAGS/3.jpeg';
import bag4 from './WOMEN/HANDBAGS/4.jpeg';
import bag5 from './WOMEN/HANDBAGS/5.jpeg';
import bag6 from './WOMEN/HANDBAGS/6.jpg';


// Import sunglasses images
import sunglasses1 from './WOMEN/SUNGLASSES/1.jpeg';
import sunglasses2 from './WOMEN/SUNGLASSES/2.jpeg';
import sunglasses3 from './WOMEN/SUNGLASSES/3.jpeg';
import sunglasses4 from './WOMEN/SUNGLASSES/4.jpeg';
import sunglasses5 from './WOMEN/SUNGLASSES/5.jpeg';
import sunglasses6 from './WOMEN/SUNGLASSES/6.jpeg';
import sunglasses7 from './WOMEN/SUNGLASSES/7.jpeg';

const AccessoriesAllProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Combined product data array
  const allProducts = [
    {
      id: 1,
      name: "Classic Leather Dress Belt",
      price: 49.99,
      description: "Premium full-grain leather belt with polished buckle",
      image: [belt1],
      rating: 4.8,
      reviews: 215,
      sizes: ["30", "32", "34", "36", "38", "40"],
      colors: ["Black", "Brown", "Tan"],
      features: ["Genuine Leather", "Brushed Nickel Buckle", "Reversible"]
    },
    {
      id: 2,
      name: "Reversible Leather Belt",
      price: 39.99,
      description: "Dual-color reversible belt with quick-release buckle",
      image: [belt2],
      rating: 4.7,
      reviews: 187,
      sizes: ["30", "32", "34", "36", "38"],
      colors: ["Black/Brown", "Brown/Tan"],
      features: ["Two-Tone Design", "Quick-Release Buckle", "Soft Leather"]
    },
    {
      id: 3,
      name: "Ratchet Dress Belt",
      price: 44.99,
      description: "Adjustable ratchet belt with micro-adjustable fit",
      image: [belt3],
      rating: 4.9,
      reviews: 312,
      sizes: ["28-42"],
      colors: ["Black", "Brown", "Dark Brown"],
      features: ["No Holes Design", "Precision Fit", "Slim Profile"]
    },
    {
      id: 4,
      name: "Casual Webbed Belt",
      price: 29.99,
      description: "Durable nylon webbed belt with metal buckle",
      image: [belt4],
      rating: 4.5,
      reviews: 143,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Khaki", "Navy"],
      features: ["Heavy-Duty Nylon", "Military Style", "Quick-Release"]
    },
    {
      id: 5,
      name: "Formal Crocodile Belt",
      price: 79.99,
      description: "Luxury crocodile-embossed leather dress belt",
      image: [belt5],
      rating: 4.7,
      reviews: 98,
      sizes: ["32", "34", "36", "38"],
      colors: ["Black", "Dark Brown"],
      features: ["Exotic Finish", "Solid Brass Buckle", "Lined Leather"]
    },
    {
      id: 6,
      name: "Minimalist Leather Belt",
      price: 34.99,
      description: "Sleek leather belt with hidden magnetic buckle",
      image: [belt6],
      rating: 4.6,
      reviews: 176,
      sizes: ["30", "32", "34", "36"],
      colors: ["Black", "Brown"],
      features: ["Seamless Design", "Magnetic Closure", "No Visible Hardware"]
    },
    {
      id: 7,
      name: "Vintage Western Belt",
      price: 59.99,
      description: "Hand-tooled leather belt with ornate buckle",
      image: [belt7],
      rating: 4.8,
      reviews: 201,
      sizes: ["32", "34", "36", "38", "40"],
      colors: ["Brown", "Cognac"],
      features: ["Hand-Tooled Design", "Antique Brass Buckle", "1.5\" Width"]
    },


    {
      id: 8,
      name: "Diamond Solitaire Ring",
      price: 899.99,
      colors: ["White Gold", "Yellow Gold", "Rose Gold"],
      sizes: ["5", "6", "7", "8"],
      description: "Classic solitaire ring featuring a brilliant-cut diamond in a prong setting, perfect for engagements.",
      images: [ring1],
      rating: 4.9,
      reviews: 342,
      material: "14K Gold",
      stone: "Diamond"
    },
    {
      id: 9,
      name: "Sapphire Halo Ring",
      price: 649.99,
      colors: ["White Gold", "Yellow Gold"],
      sizes: ["5", "6", "7"],
      description: "Elegant halo ring with a center blue sapphire surrounded by sparkling diamonds.",
      images: [ring2],
      rating: 4.7,
      reviews: 215,
      material: "18K Gold",
      stone: "Sapphire & Diamond"
    },
    {
      id: 10,
      name: "Vintage Filigree Ring",
      price: 459.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["6", "7", "8"],
      description: "Intricate vintage-inspired filigree design with milgrain detailing and small accent diamonds.",
      images: [ring3],
      rating: 4.6,
      reviews: 178,
      material: "14K Gold",
      stone: "Diamond"
    },
    {
      id: 11,
      name: "Modern Stackable Ring Set",
      price: 299.99,
      colors: ["White Gold", "Rose Gold"],
      sizes: ["5", "6", "7"],
      description: "Set of three thin bands designed to be worn together or separately for a contemporary look.",
      images: [ring4],
      rating: 4.5,
      reviews: 156,
      material: "14K Gold",
      stone: "None"
    },
    {
      id: 12,
      name: "Emerald Cut Three-Stone Ring",
      price: 759.99,
      colors: ["White Gold", "Yellow Gold"],
      sizes: ["5", "6", "7", "8"],
      description: "Stunning three-stone ring featuring an emerald-cut center stone with two tapered baguettes.",
      images: [ring5],
      rating: 4.8,
      reviews: 267,
      material: "18K Gold",
      stone: "Diamond"
    },
    {
      id: 13,
      name: "Minimalist Hammered Band",
      price: 199.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["4", "5", "6", "7", "8"],
      description: "Hand-hammered gold band with a textured finish for a modern, understated look.",
      images: [ring6],
      rating: 4.4,
      reviews: 132,
      material: "14K Gold",
      stone: "None"
    },
     {
      id: 14,
      name: "Minimalist Hammered Band",
      price: 199.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["4", "5", "6", "7", "8"],
      description: "Hand-hammered gold band with a textured finish for a modern, understated look.",
      images: [ring7],
      rating: 4.4,
      reviews: 132,
      material: "14K Gold",
      stone: "None"
    },
     {
      id: 15,
      name: "Minimalist Hammered Band",
      price: 199.99,
      colors: ["Yellow Gold", "Rose Gold"],
      sizes: ["4", "5", "6", "7", "8"],
      description: "Hand-hammered gold band with a textured finish for a modern, understated look.",
      images: [ring8],
      rating: 4.4,
      reviews: 132,
      material: "14K Gold",
      stone: "None"
    },

    {
      id: 16,
      name: "Aviator Classic",
      price: 129.99,
      colors: ["Gold", "Silver", "Black"],
      sizes: ["One Size"],
      description: "Timeless aviator sunglasses with UV400 protection and polarized lenses for optimal glare reduction.",
      images: [sunglass1],
      rating: 4.8,
      reviews: 245,
      frame: "Metal",
      lensType: "Polarized",
      uvProtection: "UV400"
    },
    {
      id: 17,
      name: "Wayfarer Retro",
      price: 89.99,
      colors: ["Tortoise", "Black", "Red"],
      sizes: ["One Size"],
      description: "Classic wayfarer style with durable acetate frames and 100% UV protection lenses.",
      images: [sunglass2],
      rating: 4.6,
      reviews: 189,
      frame: "Acetate",
      lensType: "UV Protection",
      uvProtection: "UV400"
    },
    {
      id: 18,
      name: "Sport Wraparound",
      price: 79.99,
      colors: ["Black", "Blue", "Red"],
      sizes: ["One Size"],
      description: "Lightweight polycarbonate frames with rubber grips and impact-resistant lenses for active lifestyles.",
      images: [sunglass3],
      rating: 4.5,
      reviews: 156,
      frame: "Polycarbonate",
      lensType: "Impact-Resistant",
      uvProtection: "UV400"
    },
    {
      id: 19,
      name: "Oversized Cat-Eye",
      price: 109.99,
      colors: ["Gold", "Rose Gold", "Silver"],
      sizes: ["One Size"],
      description: "Fashionable cat-eye sunglasses with mirrored lenses and ultra-light metal frames.",
      images: [sunglass4],
      rating: 4.7,
      reviews: 201,
      frame: "Metal",
      lensType: "Mirrored",
      uvProtection: "UV400"
    },
    {
      id: 20,
      name: "Round Vintage",
      price: 99.99,
      colors: ["Gold", "Silver", "Gunmetal"],
      sizes: ["One Size"],
      description: "Vintage-inspired round frames with gradient lenses and keyhole bridge for a retro look.",
      images: [sunglass5],
      rating: 4.4,
      reviews: 132,
      frame: "Metal",
      lensType: "Gradient",
      uvProtection: "UV400"
    },
    {
      id: 21,
      name: "Rectangle Polarized",
      price: 149.99,
      colors: ["Black", "Brown", "Tortoise"],
      sizes: ["One Size"],
      description: "Premium polarized sunglasses with ultra-lightweight titanium frames and anti-reflective coating.",
      images: [sunglass6],
      rating: 4.9,
      reviews: 278,
      frame: "Titanium",
      lensType: "Polarized",
      uvProtection: "UV400"
    },


    {
      id: 22,
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
      id: 23,
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
      id: 24,
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
      id: 25,
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
      id: 26,
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
      id: 27,
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
  id:28,
  name: "Personalized Wallet & Keychain Gift Set",
  price: 22.49,
  description: "A premium black faux-leather wallet and matching keychain featuring gold-plated customized name tags. Ideal for gifting on birthdays, anniversaries, or special occasions.",
  image: [customgiftset1],
  rating: 4.6,
  reviews: 198,
  type: "Gift Set",
  colors: ["Black with Gold Accents"],
  features: ["Custom Name Engraving", "Premium Faux Leather", "Includes Wallet & Keychain", "Crown Emblem Detailing", "Gift-Ready Packaging" ],
 },

{
      id: 29,
      name: "Pearl Elegance Hairpin Set",
      price: 29.99,
      description: "Set of 3 delicate hairpins with genuine freshwater pearls",
      image: [pearlHairpin],
      rating: 4.9,
      reviews: 286,
      colors: ["White", "Ivory", "Pink"],
      materials: ["Freshwater Pearls", "Gold-Plated Metal"],
      features: ["Hypoallergenic", "Secure Grip", "Wedding Ready", "Gift Box Included"]
    },
    {
      id: 30,
      name: "24K Gold Plated Hairpin",
      price: 39.99,
      description: "Luxurious gold-plated hairpin with intricate filigree design",
      image: [goldHairpin],
      rating: 4.7,
      reviews: 198,
      colors: ["Gold", "Rose Gold"],
      materials: ["24K Gold Plated", "Brass Base"],
      features: ["Handcrafted", "Tarnish Resistant", "Versatile Styling", "Elegant Presentation Box"]
    },
    {
      id: 31,
      name: "Floral Crystal Hair Clips",
      price: 24.99,
      description: "Pair of floral-shaped clips with sparkling crystals",
      image: [floralHairpin],
      rating: 4.8,
      reviews: 342,
      colors: ["Silver", "Gold", "Rose Gold"],
      materials: ["Swarovski Crystals", "Alloy Base"],
      features: ["Non-Slip Grip", "Lightweight", "Perfect for Updos", "Gift Ready"]
    },
    {
      id: 32,
      name: "Crystal Barrette Collection",
      price: 34.99,
      description: "Set of 2 crystal-embellished barrettes for all hair types",
      image: [crystalHairpin],
      rating: 4.6,
      reviews: 175,
      colors: ["Clear", "Sapphire", "Ruby"],
      materials: ["Lead-Free Crystals", "Sturdy Metal Base"],
      features: ["Strong Hold", "Won't Snag Hair", "Formal Event Ready", "Velvet Pouch Included"]
    },
    {
      id: 33,
      name: "Minimalist Hairpin Duo",
      price: 19.99,
      description: "Simple yet elegant U-shaped pins for everyday wear",
      image:[ minimalistHairpin],
      rating: 4.5,
      reviews: 203,
      colors: ["Silver", "Black", "Gold"],
      materials: ["Stainless Steel", "Matte Finish"],
      features: ["Discreet Hold", "Tangle-Free", "All-Day Comfort", "Minimalist Packaging"]
    },
    {
      id: 34,
      name: "Vintage Inspired Hair Comb",
      price: 27.99,
      description: "Art deco style comb perfect for special occasions",
      image: [vintageHairpin],
      rating: 4.7,
      reviews: 156,
      colors: ["Pearl White", "Antique Gold"],
      materials: ["Resin", "Metal Reinforcement"],
      features: ["Vintage Design", "Secure Fit", "Wedding Appropriate", "Collector's Box"]
    },
    {
      id: 35,
      name: "Hair Accessory Gift Set",
      price: 45.99,
      description: "Complete set of 12 pieces including clips, pins and headband",
      image: [giftSetHairpin],
      rating: 4.8,
      reviews: 224,
      colors: ["Rose Gold Set","Silver Set","Mixed Metals"],
      materials: ["Various High-Quality Materials"],
      features: ["Multiple Styles", "Gift Packaging", "Travel Case", "Value Collection"]
    },

    {
      id: 36,
      name: "Luxury Leather Tote",
      price: 199.99,
      colors: ["Black","Brown","Camel"],
      sizes: ["One Size"],
      description: "Premium genuine leather tote bag with gold-tone hardware and spacious interior.",
      images: [bag1],
      rating: 4.9,
      reviews: 312,
      category: "Tote",
      material: "Leather"
    },
    {
      id: 37,
      name: "Mini Crossbody Bag",
      price: 79.99,
      colors: ["Pink","Beige","Red"],
      sizes: ["Adjustable Strap"],
      description: "Compact crossbody with chain strap and multiple card slots for everyday use.",
      images: [bag2],
      rating: 4.5,
      reviews: 189,
      category: "Crossbody",
      material: "Faux Leather"
    },
    {
      id: 38,
      name: "Evening Clutch",
      price: 59.99,
      colors: ["Gold","Silver","Black"],
      sizes: ["One Size"],
      description: "Sparkly clutch with rhinestone details for formal events and parties.",
      images: [bag3],
      rating: 4.7,
      reviews: 245,
      category: "Clutch",
      material: "Metallic"
    },
    {
      id: 39,
      name: "Structured Satchel",
      price: 149.99,
      colors: ["Navy","Burgundy","Gray"],
      sizes: ["One Size"],
      description: "Professional satchel with top handle and detachable shoulder strap.",
      images: [bag4],
      rating: 4.8,
      reviews: 278,
      category: "Satchel",
      material: "Genuine Leather"
    },
    {
      id: 40,
      name: "Straw Bucket Bag",
      price: 69.99,
      colors: ["Natural","White","Black"],
      sizes: ["One Size"],
      description: "Boho-chic woven straw bag with leather accents and drawstring closure.",
      images: [bag5],
      rating: 4.6,
      reviews: 201,
      category: "Bucket",
      material: "Straw"
    },
    {
      id: 41,
      name: "Designer Shoulder Bag",
      price: 249.99,
      colors: ["Black","Cream","Green"],
      sizes: ["One Size"],
      description: "Iconic designer shoulder bag with signature monogram and protective feet.",
      images: [bag6],
      rating: 4.9,
      reviews: 356,
      category: "Shoulder",
      material: "Canvas/Leather"
    },

{
      id: 42,
      name: "Aviator Sunglasses",
      price: 89.99,
      colors: ["Gold","Silver","Rose Gold"],
      sizes: ["One Size"],
      description: "Classic aviator sunglasses with UV400 protection lenses and lightweight metal frame.",
      images: [sunglasses1],
      rating: 4.8,
      reviews: 245,
      style: "Aviator",
      lensType: "Polarized"
    },
    {
      id: 43,
      name: "Cat Eye Sunglasses",
      price: 59.99,
      colors: ["Black","Tortoise","Red"],
      sizes: ["One Size"],
      description: "Fashionable cat eye sunglasses with retro vibe and 100% UV protection.",
      images: [sunglasses2],
      rating: 4.5,
      reviews: 189,
      style: "Cat Eye",
      lensType: "Mirrored"
    },
    {
      id: 44,
      name: "Oversized Square Sunglasses",
      price: 129.99,
      colors: ["Black","Brown","White"],
      sizes: ["One Size"],
      description: "Chic oversized square sunglasses with gradient lenses and comfortable acetate frame.",
      images: [sunglasses3],
      rating: 4.9,
      reviews: 312,
      style: "Square",
      lensType: "Gradient"
    },
    {
      id: 45,
      name: "Round Metal Sunglasses",
      price: 49.99,
      colors: ["Gold","Silver","Gunmetal"],
      sizes: ["One Size"],
      description: "Vintage-inspired round sunglasses with thin metal frame and blue light blocking.",
      images: [sunglasses4],
      rating: 4.4,
      reviews: 156,
      style: "Round",
      lensType: "Blue Light"
    },
    {
      id: 46,
      name: "Sport Wraparound Sunglasses",
      price: 149.99,
      colors: ["Black","Blue","Red"],
      sizes: ["One Size"],
      description: "Performance sport sunglasses with non-slip nose pads and impact-resistant lenses.",
      images: [sunglasses5],
      rating: 4.7,
      reviews: 278,
      style: "Sport",
      lensType: "Polarized"
    },
    {
      id: 47,
      name: "Butterfly Sunglasses",
      price: 69.99,
      colors: ["Black","Tortoise","Pink"],
      sizes: ["One Size"],
      description: "Trendy butterfly sunglasses with oversized lenses and lightweight frame.",
      images: [sunglasses6],
      rating: 4.6,
      reviews: 201,
      style: "Butterfly",
      lensType: "UV400"
    },
    {
      id: 48,
      name: "Butterfly Sunglasses",
      price: 69.99,
      colors: ["Black","Tortoise","Pink"],
      sizes: ["One Size"],
      description: "Trendy butterfly sunglasses with oversized lenses and lightweight frame.",
      images: [sunglasses7],
      rating: 4.6,
      reviews: 201,
      style: "Butterfly",
      lensType: "UV400"
    },];

  const handleAddToCart = (product) => {
    addToCart({ ...product, image: product.image || (product.images && product.images[0]), quantity: 1 });
    toast.success(`${product.name} added to cart!`);
    navigate('/cart');
  };

const ProductCard = ({ product }) => {
  // Safely get the image source - handles both 'image' and 'images' props
  const imageSrc = Array.isArray(product.image) 
    ? product.image[0] 
    : product.image || product.images?.[0];

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={imageSrc} 
          alt={product.name || 'Product image'} 
          className="product-image" 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'path-to-fallback-image.jpg';
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name || 'Product Name'}</h3>
        <p className="product-price">
          ${product.price ? product.price.toFixed(2) : '0.00'}
        </p>
        
        <div className="product-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span 
              key={i} 
              className={`star ${i < Math.floor(product.rating || 0) ? 'filled' : ''}`}
            >
              {i < Math.floor(product.rating || 0) ? '★' : '☆'}
            </span>
          ))}
          <span className="review-count">
            ({product.reviews || 0})
          </span>
        </div>

        <p className="product-description">
          {product.description || 'No description available'}
        </p>

        <div className="product-options">
          <div className="color-options">
            <span>Colors: </span>
            {(product.colors || ['Multicolor']).map((color) => (
              <span 
                key={color} 
                className="color-option" 
                style={{ 
                  backgroundColor: color.toLowerCase().includes('multi') 
                    ? 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)'
                    : color.toLowerCase(),
                  border: color.toLowerCase() === 'white' ? '1px solid #ddd' : 'none'
                }}
                title={color}
              />
            ))}
          </div>

          <div className="size-options">
            <span>Sizes: </span>
            {(product.sizes || ['One Size']).map((size) => (
              <span key={size} className="size-option">
                {size}
              </span>
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
};
return (
  <div className="accessories-all-products">
    <h1 className="page-title">Accessories Collection</h1>
    
    <div className="products-grid">
      {allProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={{
            ...product,
            // Ensure all required fields exist
            colors: product.colors || ['Multicolor'],
            sizes: product.sizes || ['One Size'],
            rating: product.rating || 0,
            reviews: product.reviews || 0
          }} 
        />
      ))}
    </div>
  </div>
)}; 
export default AccessoriesAllProducts;
import React from 'react';
import './kids.css'; 
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import bottom1 from './0-5 YEARS/BABY BOY/BOTTOM/1.jpeg'
import bottom2 from './0-5 YEARS/BABY BOY/BOTTOM/2.jpeg'
import bottom3 from './0-5 YEARS/BABY BOY/BOTTOM/3.jpeg'
import bottom4 from './0-5 YEARS/BABY BOY/BOTTOM/4.jpeg'
import bottom5 from './0-5 YEARS/BABY BOY/BOTTOM/5.jpeg'
import bottom6 from './0-5 YEARS/BABY BOY/BOTTOM/6.jpg'

import jacket1 from './0-5 YEARS/BABY BOY/TOP/1.jpeg'
import jacket2 from './0-5 YEARS/BABY BOY/TOP/2.jpeg'
import jacket3 from './0-5 YEARS/BABY BOY/TOP/3.jpeg'
import jacket4 from './0-5 YEARS/BABY BOY/TOP/4.jpeg'
import jacket5 from './0-5 YEARS/BABY BOY/TOP/5.webp'
import jacket6 from './0-5 YEARS/BABY BOY/TOP/6.jpeg'
 
import Gbottom1 from './0-5 YEARS/BABY GIRL/BOTTOM/1.jpeg'
import Gbottom2 from './0-5 YEARS/BABY GIRL/BOTTOM/2.jpeg'
import Gbottom3 from './0-5 YEARS/BABY GIRL/BOTTOM/3.jpeg'
import Gbottom4 from './0-5 YEARS/BABY GIRL/BOTTOM/4.jpeg'
import Gbottom5 from './0-5 YEARS/BABY GIRL/BOTTOM/5.png'
import Gbottom6 from './0-5 YEARS/BABY GIRL/BOTTOM/6.jpg'

import top1 from './0-5 YEARS/BABY GIRL/TOP/1.jpeg'
import top2 from './0-5 YEARS/BABY GIRL/TOP/2.jpeg'
import top3 from './0-5 YEARS/BABY GIRL/TOP/3.jpeg'
import top4 from './0-5 YEARS/BABY GIRL/TOP/4.jpeg'
import top5 from './0-5 YEARS/BABY GIRL/TOP/5.jpg'
import top6 from './0-5 YEARS/BABY GIRL/TOP/6.jpeg'

import jeans1 from './5-14 YEARS/BOY/JEANS/1.webp'
import jeans2 from './5-14 YEARS/BOY/JEANS/2.jpg'
import jeans3 from './5-14 YEARS/BOY/JEANS/3.jpg'
import jeans4 from './5-14 YEARS/BOY/JEANS/4.jpg'
import jeans5 from './5-14 YEARS/BOY/JEANS/5.jpg'
import jeans6 from './5-14 YEARS/BOY/JEANS/6.jpeg'


import shorts1 from './5-14 YEARS/BOY/SHOTS/1.jpeg'
import shorts2 from './5-14 YEARS/BOY/SHOTS/2.jpg'
import shorts3 from './5-14 YEARS/BOY/SHOTS/3.jpeg'
import shorts4 from './5-14 YEARS/BOY/SHOTS/4.jpeg'
import shorts5 from './5-14 YEARS/BOY/SHOTS/5.jpeg'
import shorts6 from './5-14 YEARS/BOY/SHOTS/6.jpeg'


import tshirt1 from './5-14 YEARS/BOY/TOP/1.jpg'
import tshirt2 from './5-14 YEARS/BOY/TOP/2.jpg'
import tshirt3 from './5-14 YEARS/BOY/TOP/3.jpeg'
import tshirt4 from './5-14 YEARS/BOY/TOP/4.jpeg'
import tshirt5 from './5-14 YEARS/BOY/TOP/5.jpeg'
import tshirt6 from './5-14 YEARS/BOY/TOP/6.jpg'

import dress1 from './5-14 YEARS/GIRL/DRESS/1.jpg'
import dress2 from './5-14 YEARS/GIRL/DRESS/2.jpg'
import dress3 from './5-14 YEARS/GIRL/DRESS/3.webp'
import dress4 from './5-14 YEARS/GIRL/DRESS/4.webp'
import dress5 from './5-14 YEARS/GIRL/DRESS/5.jpeg'
import dress6 from './5-14 YEARS/GIRL/DRESS/6.jpg'
import dress7 from './5-14 YEARS/GIRL/DRESS/7.webp'
import dress8 from './5-14 YEARS/GIRL/DRESS/8.jpg'
import dress9 from './5-14 YEARS/GIRL/DRESS/9.jpg'

import Gjeans1 from './5-14 YEARS/GIRL/JEANS/1.jpg'
import Gjeans2 from './5-14 YEARS/GIRL/JEANS/2.jpg'
import Gjeans3 from './5-14 YEARS/GIRL/JEANS/3.jpg'
import Gjeans4 from './5-14 YEARS/GIRL/JEANS/4.jpg'
import Gjeans5 from './5-14 YEARS/GIRL/JEANS/5.webp'
import Gjeans6 from './5-14 YEARS/GIRL/JEANS/6.avif'
import Gjeans7 from './5-14 YEARS/GIRL/JEANS/7.jpg'


import Gtop1 from './5-14 YEARS/GIRL/TOP/1.jpg'
import Gtop2 from './5-14 YEARS/GIRL/TOP/2.jpg'
import Gtop3 from './5-14 YEARS/GIRL/TOP/3.jpg'
import Gtop4 from './5-14 YEARS/GIRL/TOP/4.jpg'
import Gtop5 from './5-14 YEARS/GIRL/TOP/5.jpg'
import Gtop6 from './5-14 YEARS/GIRL/TOP/6.webp'


const KidsAllProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  // Combined product data array
  const allProducts = [
    {
      id: 1,
      name: "Stretch Waist Pants",
      price: 18.99,
      description: "Soft cotton pants with elastic waistband for easy movement",
      image: bottom1,
      rating: 4.7,
      reviews: 142,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Cotton Pants",
      colors: ["Navy", "Gray", "Khaki"],
      features: ["Elastic Waist", "Reinforced Knees", "Machine Washable"]
    },
    {
      id: 2,
      name: "Denim Overalls",
      price: 24.99,
      description: "Adjustable denim overalls with snap closures for easy diaper changes",
      image: bottom2,
      rating: 4.8,
      reviews: 156,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Overalls",
      colors: ["Light Wash", "Dark Wash"],
      features: ["Adjustable Straps", "Snap Closures", "Durable Denim"]
    },
    {
      id: 3,
      name: "Jogger Pants Set",
      price: 22.99,
      description: "Comfy jogger pants with matching top, perfect for playtime",
      image: bottom3,
      rating: 4.9,
      reviews: 187,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M"],
      type: "Joggers",
      colors: ["Blue", "Gray", "Green"],
      features: ["Ribbed Cuffs", "Set Includes Top", "Soft Fabric"]
    },
    {
      id: 4,
      name: "Cargo Shorts",
      price: 16.99,
      description: "Lightweight shorts with functional pockets for summer adventures",
      image: bottom4,
      rating: 4.6,
      reviews: 98,
      sizes: ["12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Shorts",
      colors: ["Khaki", "Navy", "Olive"],
      features: ["Multiple Pockets", "Elastic Waist", "Durable Cotton"]
    },
    {
      id: 5,
      name: "Fleece-Lined Pants",
      price: 21.99,
      description: "Warm fleece-lined pants for cold weather comfort",
      image: bottom5,
      rating: 4.7,
      reviews: 132,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Winter Pants",
      colors: ["Navy", "Black", "Gray"],
      features: ["Soft Fleece Lining", "Elastic Waist", "Ankle Cuffs"]
    },
    {
      id: 6,
      name: "Diaper Cover Shorts",
      price: 14.99,
      description: "Breathable shorts with built-in diaper cover for summer",
      image: bottom6,
      rating: 4.5,
      reviews: 112,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Diaper Cover",
      colors: ["Blue", "White", "Striped"],
      features: ["Breathable Mesh", "Easy Diaper Access", "Soft Waistband"]
    },
    {
      id: 7,
      name: "Padded Winter Jacket",
      price: 34.99,
      description: "Warm quilted jacket with hood and snap closures",
      image: jacket1,
      rating: 4.8,
      reviews: 156,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Winter Jacket",
      colors: ["Navy", "Gray", "Red"],
      features: ["Water-Resistant", "Insulated", "Easy Snap Closures"]
    },
    {
      id: 8,
      name: "Denim Jacket with Hood",
      price: 28.99,
      description: "Lightweight denim jacket with soft lining",
      image: jacket2,
      rating: 4.6,
      reviews: 132,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Denim Jacket",
      colors: ["Light Blue", "Dark Wash"],
      features: ["Stretch Denim", "Hooded", "Machine Washable"]
    },
    {
      id: 9,
      name: "Fleece Bunting Jacket",
      price: 31.99,
      description: "Soft fleece jacket with fold-over mittens",
      image: jacket3,
      rating: 4.9,
      reviews: 201,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Fleece Jacket",
      colors: ["Blue", "Gray", "Green"],
      features: ["Fold-Over Mittens", "Zipper Front", "Breathable"]
    },
    {
      id: 10,
      name: "Rain Jacket Set",
      price: 36.99,
      description: "Waterproof jacket with matching pants",
      image: jacket4,
      rating: 4.7,
      reviews: 98,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Rain Jacket",
      colors: ["Yellow", "Blue", "Red"],
      features: ["100% Waterproof", "Adjustable Hood", "Reflective Details"]
    },
    {
      id: 11,
      name: "Bomber Style Jacket",
      price: 29.99,
      description: "Stylish bomber jacket with ribbed cuffs",
      image: jacket5,
      rating: 4.5,
      reviews: 112,
      sizes: ["12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Bomber Jacket",
      colors: ["Black", "Navy", "Olive"],
      features: ["Lightweight", "Elastic Cuffs", "Zipper Closure"]
    },
    {
      id: 12,
      name: "Puffer Vest",
      price: 26.99,
      description: "Lightweight puffer vest for layering",
      image: jacket6,
      rating: 4.6,
      reviews: 178,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Puffer Vest",
      colors: ["Royal Blue", "Gray", "Red"],
      features: ["Packable", "Zipper Front", "Warm but Light"]
    },
    {
      id: 13,
      name: "Ruffled Bloomers",
      price: 19.99,
      description: "Adorable cotton bloomers with lace trim for special occasions",
      image: Gbottom1,
      rating: 4.8,
      reviews: 167,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Bloomers",
      colors: ["White", "Pink", "Ivory"],
      features: ["Soft Cotton", "Lace Trim", "Snap Closure"]
    },
    {
      id: 14,
      name: "Tulle Skirt Leggings",
      price: 22.99,
      description: "Comfy leggings with attached tulle skirt for twirling fun",
      image: Gbottom2,
      rating: 4.9,
      reviews: 203,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M", "2T"],
      type: "Leggings",
      colors: ["Pink", "Lavender", "Mint"],
      features: ["Stretchy Waistband", "Attached Skirt", "Machine Washable"]
    },
    {
      id: 15,
      name: "Floral Print Pants",
      price: 21.99,
      description: "Lightweight pants with pretty floral patterns for everyday wear",
      image: Gbottom3,
      rating: 4.7,
      reviews: 142,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Cotton Pants",
      colors: ["Pink Flowers", "Purple Flowers", "Yellow Flowers"],
      features: ["Elastic Waist", "Breathable Fabric", "Easy Diaper Access"]
    },
    {
      id: 16,
      name: "Denim Overalls",
      price: 26.99,
      description: "Adjustable denim overalls with heart-shaped pockets",
      image: Gbottom4,
      rating: 4.6,
      reviews: 118,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
      type: "Overalls",
      colors: ["Light Wash", "Pink Wash"],
      features: ["Heart Pockets", "Adjustable Straps", "Snap Closures"]
    },
    {
      id: 17,
      name: "Velvet Leggings",
      price: 18.99,
      description: "Soft velvet leggings perfect for holiday outfits",
      image: Gbottom5,
      rating: 4.7,
      reviews: 156,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M"],
      type: "Leggings",
      colors: ["Burgundy", "Navy", "Rose Gold"],
      features: ["Stretchy Waist", "Holiday Ready", "Delicate Wash"]
    },
    {
      id: 18,
      name: "Diaper Cover Shorts",
      price: 15.99,
      description: "Breathable shorts with ruffled diaper cover for summer",
      image: Gbottom6,
      rating: 4.5,
      reviews: 97,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Diaper Cover",
      colors: ["White", "Pink", "Lavender"],
      features: ["Lace Trim", "Breathable Cotton", "Easy Diaper Changes"]
    },
    {
      id: 19,
      name: "Ruffled Bodysuit",
      price: 16.99,
      description: "Adorable snap-crotch bodysuit with delicate ruffled sleeves",
      image: top1,
      rating: 4.8,
      reviews: 178,
      sizes: ["Newborn", "0-3M", "3-6M", "6-12M"],
      type: "Bodysuit",
      colors: ["White", "Pink", "Lavender"],
      features: ["Snap Crotch", "Soft Cotton", "Easy Diaper Changes"]
    },
    {
      id: 20,
      name: "Floral Peplum Top",
      price: 22.99,
      description: "Charming peplum top with floral embroidery for special occasions",
      image: top2,
      rating: 4.9,
      reviews: 203,
      sizes: ["3-6M", "6-12M", "12-18M", "18-24M"],
      type: "Peplum Top",
      colors: ["Pink", "Mint", "Yellow"],
      features: ["Embroidered Details", "Elastic Waist", "Party Wear"]
    },
    {
      id: 21,
      name: "Unicorn Graphic Tee",
      price: 18.99,
      description: "Soft cotton tee with magical unicorn design for everyday cuteness",
      image: top3,
      rating: 4.7,
      reviews: 156,
      sizes: ["12-18M", "18-24M", "2T", "3T", "4T"],
      type: "T-Shirt",
      colors: ["Pink", "Purple", "White"],
      features: ["100% Cotton", "Tagless", "Machine Washable"]
    },
    {
      id: 22,
      name: "Lace Trim Blouse",
      price: 24.99,
      description: "Elegant blouse with lace collar and pearl button details",
      image: top4,
      rating: 4.6,
      reviews: 132,
      sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
      type: "Blouse",
      colors: ["White", "Ivory", "Blush Pink"],
      features: ["Delicate Lace", "Snap Shoulders", "Special Occasion"]
    },
    {
      id: 23,
      name: "Fleece Hoodie",
      price: 26.99,
      description: "Cozy fleece hoodie with bunny ears for chilly days",
      image: top5,
      rating: 4.7,
      reviews: 167,
      sizes: ["6-12M", "12-18M", "18-24M", "2T", "3T"],
      type: "Hoodie",
      colors: ["Pink", "Gray", "Lavender"],
      features: ["Bunny Ear Hood", "Kangaroo Pocket", "Super Soft"]
    },
    {
      id: 24,
      name: "Tutu Onesie",
      price: 29.99,
      description: "Adorable onesie with attached tulle skirt for ultimate cuteness",
      image: top6,
      rating: 4.9,
      reviews: 221,
      sizes: ["Newborn", "0-3M", "3-6M", "6-12M"],
      type: "Onesie",
      colors: ["Pink", "White", "Gold"],
      features: ["Snap Crotch", "Attached Tutu", "Photo-Ready"]
    },
    {
      id: 25,
      name: "Classic Blue Jeans",
      price: 24.99,
      description: "Durable denim jeans with reinforced knees for active kids",
      image: jeans1,
      rating: 4.7,
      reviews: 128,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Regular Fit"
    },
    {
      id: 26,
      name: "Slim Fit Jeans",
      price: 27.99,
      description: "Comfortable stretch denim with adjustable waistband",
      image: jeans2,
      rating: 4.5,
      reviews: 96,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Slim Fit"
    },
    {
      id: 27,
      name: "Cargo Jeans",
      price: 29.99,
      description: "Stylish jeans with functional cargo pockets",
      image: jeans3,
      rating: 4.8,
      reviews: 145,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Relaxed Fit"
    },
    {
      id: 28,
      name: "Ripped Jeans",
      price: 26.99,
      description: "Cool distressed jeans with knee rips",
      image: jeans4,
      rating: 4.6,
      reviews: 87,
      sizes: ["9-10", "11-12", "13-14"],
      type: "Slim Fit"
    },
    {
      id: 29,
      name: "Athletic Jeans",
      price: 31.99,
      description: "Flexible denim with extra stretch for active movement",
      image: jeans5,
      rating: 4.9,
      reviews: 112,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Athletic Fit"
    },
    {
      id: 30,
      name: "Black Skinny Jeans",
      price: 25.99,
      description: "Comfortable black jeans with stretch fabric",
      image: jeans6,
      rating: 4.4,
      reviews: 76,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Skinny Fit"
    },
    {
      id: 31,
      name: "Active Sports Shorts",
      price: 19.99,
      description: "Breathable mesh shorts with elastic waistband for running and play",
      image: shorts1,
      rating: 4.7,
      reviews: 142,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Athletic"
    },
    {
      id: 32,
      name: "Denim Cargo Shorts",
      price: 22.99,
      description: "Durable denim shorts with multiple pockets for storage",
      image: shorts2,
      rating: 4.5,
      reviews: 89,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Casual"
    },
    {
      id: 33,
      name: "Quick-Dry Swim Shorts",
      price: 24.99,
      description: "Water-resistant shorts with UPF 50+ sun protection",
      image: shorts3,
      rating: 4.8,
      reviews: 167,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Swim"
    },
    {
      id: 34,
      name: "Cotton Chino Shorts",
      price: 21.99,
      description: "Classic fit shorts perfect for school and outings",
      image: shorts4,
      rating: 4.6,
      reviews: 76,
      sizes: ["9-10", "11-12", "13-14"],
      type: "Casual"
    },
    {
      id: 35,
      name: "Basketball Shorts",
      price: 26.99,
      description: "Longer length shorts with side stripes and moisture-wicking fabric",
      image: shorts5,
      rating: 4.9,
      reviews: 134,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Athletic"
    },
    {
      id: 36,
      name: "Adventure Hiking Shorts",
      price: 28.99,
      description: "Lightweight quick-dry shorts with zip pockets",
      image: shorts6,
      rating: 4.4,
      reviews: 92,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Outdoor"
    },
    {
      id: 37,
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
      id: 38,
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
      id: 39,
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
      id: 40,
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
      id: 41,
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
      id: 42,
      name: "Long Sleeve Jersey",
      price: 18.99,
      description: "Soft long sleeve shirt for cooler days",
      image: tshirt6,
      rating: 4.4,
      reviews: 87,
      sizes: ["7-8", "9-10", "11-12"],
      type: "Long Sleeve",
      colors: ["Black", "Navy", "Maroon"]
    },
    {
      id: 43,
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
      id: 45,
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
      id: 46,
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
      id: 47,
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
      id: 48,
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
      id: 49,
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
  id: 50,
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
  id: 51,
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
  id: 52,
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
},
    {
      id: 53,
      name: "Skinny Jeans with Rhinestones",
      price: 29.99,
      description: "Stretchy skinny jeans with glittery rhinestone details",
      image: Gjeans1,
      rating: 4.8,
      reviews: 156,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Skinny Fit",
      colors: ["Light Blue", "Black"],
      features: ["Stretch Denim", "Rhinestone Accents", "Comfort Waistband"]
    },
    {
      id: 54,
      name: "Flared Jeans with Embroidery",
      price: 34.99,
      description: "Trendy flared jeans with floral embroidery details",
      image: Gjeans2,
      rating: 4.7,
      reviews: 132,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Flared Fit",
      colors: ["Medium Wash", "White Wash"],
      features: ["Cotton Blend", "Embroidered Details", "Adjustable Waist"]
    },
    {
      id: 55,
      name: "Jeggings with Sparkle",
      price: 26.99,
      description: "Super soft jeggings with subtle sparkle thread",
      image: Gjeans3,
      rating: 4.9,
      reviews: 201,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Jegging Fit",
      colors: ["Dark Blue", "Gray", "Black"],
      features: ["Ultra Stretchy", "No Scratch Tags", "Pull-On Design"]
    },
    {
      id: 56,
      name: "High-Waisted Mom Jeans",
      price: 31.99,
      description: "Vintage-inspired high-waisted jeans with raw hem",
      image: Gjeans4,
      rating: 4.6,
      reviews: 98,
      sizes: ["9-10", "11-12", "13-14"],
      type: "Relaxed Fit",
      colors: ["Light Wash", "Medium Wash"],
      features: ["90s Style", "Comfort Waist", "Distressed Details"]
    },
    {
      id: 57,
      name: "Colored Skinny Jeans",
      price: 27.99,
      description: "Vibrant colored jeans in super stretchy fabric",
      image: Gjeans5,
      rating: 4.5,
      reviews: 112,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Skinny Fit",
      colors: ["Pink", "Purple", "Red", "Mint"],
      features: ["Fun Colors", "Play-Friendly", "Easy Care"]
    },
    {
      id: 58,
      name: "Denim Overalls",
      price: 39.99,
      description: "Adjustable denim overalls with embroidered patches",
      image: Gjeans6,
      rating: 4.8,
      reviews: 178,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Overalls",
      colors: ["Classic Blue", "Black"],
      features: ["Adjustable Straps", "Functional Pockets", "Fun Patches"]
    },
    {
  id: 59,
  name: "Chic Yellow Tee & Button-Up Jeggings",
  price: 29.99,
  description: "Trendy yellow graphic tee paired with high-waisted button-up jeggings. A perfect combo of comfort and style for casual days.",
  image: Gjeans7,
  rating: 4.6,
  reviews: 124,
  sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
  type: "Tee & Jeggings Set",
  colors: ["Yellow & Black"],
  features: [
    "Soft Cotton Tee with Sparkle Print","Stretchy High-Rise Jeggings","Decorative Front Buttons","Easy Pull-On Waistband"]
},
    {
      id: 60,
      name: "Butterfly Graphic Tee",
      price: 16.99,
      description: "Soft cotton t-shirt with colorful butterfly print",
      image: Gtop1,
      rating: 4.8,
      reviews: 142,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "T-Shirt",
      colors: ["Pink", "Lavender", "White"],
      features: ["100% Cotton", "Machine Washable", "Tagless"]
    },
    {
      id: 61,
      name: "Ruffled Sleeve Blouse",
      price: 22.99,
      description: "Pretty blouse with delicate ruffled sleeves",
      image: Gtop2,
      rating: 4.7,
      reviews: 118,
      sizes: ["7-8", "9-10", "11-12"],
      type: "Blouse",
      colors: ["White", "Light Blue", "Mint"],
      features: ["Breathable Fabric", "Button Front", "School Appropriate"]
    },
    {
      id: 62,
      name: "Unicorn Hoodie",
      price: 29.99,
      description: "Cozy hoodie with unicorn graphic and rainbow details",
      image: Gtop3,
      rating: 4.9,
      reviews: 203,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Hoodie",
      colors: ["Pink", "Purple", "Light Blue"],
      features: ["Fleece Lining", "Kangaroo Pocket", "Adjustable Drawstring"]
    },
    {
      id: 63,
      name: "Floral Peplum Top",
      price: 24.99,
      description: "Stylish peplum top with floral pattern",
      image: Gtop4,
      rating: 4.6,
      reviews: 97,
      sizes: ["5-6", "7-8", "9-10", "11-12"],
      type: "Peplum Top",
      colors: ["Yellow", "Pink", "White"],
      features: ["Flowy Fit", "Elastic Waist", "Party Wear"]
    },
    {
      id: 64,
      name: "Striped Long Sleeve",
      price: 19.99,
      description: "Comfy striped top with ribbed cuffs",
      image: Gtop5,
      rating: 4.5,
      reviews: 87,
      sizes: ["5-6", "7-8", "9-10", "11-12", "13-14"],
      type: "Long Sleeve",
      colors: ["Navy/White", "Pink/White", "Red/White"],
      features: ["Cotton Blend", "Seasonal Colors", "Everyday Wear"]
    },
    {
      id: 65,
      name: "Glitter Heart Sweatshirt",
      price: 26.99,
      description: "Warm sweatshirt with glitter heart appliqué",
      image: Gtop6,
      rating: 4.7,
      reviews: 156,
      sizes: ["7-8", "9-10", "11-12", "13-14"],
      type: "Sweatshirt",
      colors: ["Rose Pink", "Lavender", "Mint"],
      features: ["Soft Brushed Interior", "Glitter Details", "Cold Wash Only"]
    } 
     ].map(product => ({
    ...product,
    colors: product.colors || [], // Ensure colors exists
    features: product.features || [] // Ensure features exists
  }));

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
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
        
        {/* Safely render colors if they exist */}
        {product.colors && product.colors.length > 0 && (
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
        )}

        {/* Safely render sizes if they exist */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="size-options">
            <span>Sizes: </span>
            {product.sizes.map((size) => (
              <span key={size} className="size-option">{size}</span>
            ))}
          </div>
        )}

        {/* Safely render features if they exist */}
        {product.features && product.features.length > 0 && (
          <div className="product-features">
            {product.features.map((feature, index) => (
              <span key={index} className="feature-tag">✓ {feature}</span>
            ))}
          </div>
        )}

        <p className="product-description">{product.description}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button className="wishlist-btn">♡ Wishlist</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="kids-all-products">
      <h1 className="page-title">Kids Collection (0-14 Years)</h1>
      <p className="page-subtitle">Everything for your little ones</p>
      
      <div className="products-grid">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default KidsAllProducts;
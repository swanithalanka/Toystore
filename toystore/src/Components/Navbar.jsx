import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Dropdowncat from './Dropdowncat';
import image1 from '../Assets/Age-2.jpg';
import image2 from '../Assets/Age-3.jpg';
import image3 from '../Assets/Age-4.jpg';
import image4 from '../Assets/Age-5.jpg';
import image5 from '../Assets/Age-6.jpg';
import image6 from '../Assets/Age-7.jpg';
import brand_1 from '../Assets/Nerf-1.webp';
import brand_2 from '../Assets/Nerf-2.webp';
import brand_3 from '../Assets/Nerf-3.webp';
import brand_4 from '../Assets/Nerf-4.webp';
import brand_5 from '../Assets/Nerf-5.webp';
import brand_6 from '../Assets/Nerf-6.webp';
import character_1 from '../Assets/iron-1.webp';
import character_2 from '../Assets/cb-1.jpg';
import character_3 from '../Assets/spider-1.jpg';
import character_4 from '../Assets/micky-1.jpg';
import character_5 from '../Assets/paw-1.jpg';
import character_6 from '../Assets/forzen-1.webp';
import Deal_1 from '../Assets/deal-1.webp';
import Deal_2 from '../Assets/deal-2.webp';
import Deal_3 from '../Assets/deal-3.webp';
import Deal_4 from '../Assets/deal-4.webp';
import Deal_5 from '../Assets/deal-5.webp';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const isDropdownOpen = (dropdown) => activeDropdown === dropdown;

  

  const BrandDropdown = () => {
    const brandImages = [brand_1,brand_2,brand_3,brand_4,brand_5,brand_6];

    return ( 
      <div ref={dropdownRef} className="fixed top-14 left-6 h-96 w-full bg-white p-4 flex"  style={{ zIndex: 1000 }} >
        {brandImages.map((brandImage, index) => (
          <div key={index} className="mr-4">
            <img
              src={brandImage}
              alt={`Brand ${index + 1}`}
              className="image"
              style={{
                border: "1px solid #000",
                borderRadius: "6px",
                width: "100%",
                height: "300px", 
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    );
  };


  const CharacterDropdown = () => {
    const CharacterImages = [character_1,character_2,character_3,character_4,character_5,character_6];

    return (
      <div ref={dropdownRef} className="fixed overflow-hidden top-14 left-6 h-96 w-full bg-white p-4 flex" style={{ zIndex: 1000 }} >
        {CharacterImages.map((CharacterImages, index) => (
          <div key={index} className="mr-4">
            <img
              src={CharacterImages}
              alt={`character ${index + 1}`}
              className="image"
              style={{
                border: "1px solid #000",
              borderRadius: "50%", 
              width: "200px",
              height: "200px",
              objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    );
  };

  const AgeDropdown = () => {
    const images = [image1, image2, image3, image4, image5, image6];
  
    return (
      <div  ref={dropdownRef} className="fixed top-14 left-6 h-96 w-full bg-white p-4 flex" style={{ zIndex: 1000 }} >
      {images.map((image, index) => (
        <div key={index} className="mr-4">
          <img
            src={image}
            alt={`Age ${index + 1}`}
            className="image"
            style={{
              border: "1px solid #000",
              borderRadius: "6px",
              width: "200px", // Adjust the width as needed
              height: "200px", // Adjust the height as needed
              objectFit: "cover",
             
            }}
          />
        </div>
      ))}
    </div>
    );
  };

  const DealDropdown = () => {
    const images = [Deal_1, Deal_2, Deal_3,Deal_4,Deal_5];
  
    return (
      <div  ref={dropdownRef} className="fixed top-14 left-6 h-96 w-full bg-white p-4 flex" style={{ zIndex: 1000 }} >
      {images.map((image, index) => (
        <div key={index} className="mr-4">
          <img
            src={image}
            alt={`Age ${index + 1}`}
            className="image"
            style={{
              border: "1px solid #000",
              borderRadius: "6px",
              width: "200px", // Adjust the width as needed
              height: "200px", // Adjust the height as needed
              objectFit: "cover",
             
            }}
          />
        </div>
      ))}
    </div>
    );
  };

  return (
    <nav className="bg-blue-200 p-6 flex items-center justify-between">
      <div className="flex space-x-8">
        <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <div className="relative inline-block">
          <a
            href="#"
            className={`text-black flex items-center ${isDropdownOpen('deals') && 'active'}`}
            onClick={() => toggleDropdown('deals')}
          >
            Deals & Promotions {isDropdownOpen('deals') ? '▲' : '▼'}
          </a>
          {isDropdownOpen('deals') && <DealDropdown/>}
        </div>
        
        <div className="relative inline-block">
          <a
            href="#"
            className={`text-black flex items-center ${isDropdownOpen('category') && 'active'}`}
            onClick={() => toggleDropdown('category')}
          >
            Category {isDropdownOpen('category') ? '▲' : '▼'}
          </a>
          {isDropdownOpen('category') && <Dropdowncat/>}
        </div>
        <div className="relative inline-block">
          <a
            href="#"
            className={`text-black flex items-center ${isDropdownOpen('age') && 'active'}`}
            onClick={() => toggleDropdown('age')}
          >
            Age {isDropdownOpen('age') ? '▲' : '▼'}
          </a>
          {isDropdownOpen('age') && <AgeDropdown />}
        </div>
        <div className="relative inline-block">
        <a
            href="#"
            className={`text-black flex   items-center ${isDropdownOpen('Brand') && 'active'}`}
            onClick={() => toggleDropdown('Brand')}
          >
            Brand {isDropdownOpen('Brand') ? '▲' : '▼'}
          </a>
          {isDropdownOpen('Brand') && <BrandDropdown/>}
       
            
        </div>
        <div className="relative inline-block">
          <a
            href="#"
            className={`text-black flex items-center ${isDropdownOpen('Character') && 'active'}`}
            onClick={() => toggleDropdown('Character')}
          >
           Character {isDropdownOpen('Character') ? '▲' : '▼'}
          </a>
          {isDropdownOpen('Character') && <CharacterDropdown/>}
        </div>
      </div>
      <div className="relative flex items-center space-x-4">
      <div className="relative flex items-center"> 
        <input type="text" placeholder="Search..." className="p-2 border rounded-3xl " />
        <a href="#" className="absolute right-2 text-black flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </a>
    </div>
    <Link to="/Order" className="text-black flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
          <span className="ml-2">Track Order</span>
        </Link>
          <a href="#" className="text-black flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>Account</a>
        <a href="#" className="text-black flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>Wishlist</a>
        <a href="#" className="text-black flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>My Bag</a>
      </div>
    </nav>
   
  );
};

export default Navbar;
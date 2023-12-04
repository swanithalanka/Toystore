import React, {useState, useRef }from 'react'

function Dropdowncat() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);


    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
      };
    
      const isDropdownOpen = (dropdown) => activeDropdown === dropdown;

      
  return (
    <div ref={dropdownRef} className="fixed top-14 left-6 h-96 w-full bg-white p-4 flex flex-row space-x-8" style={{ zIndex: 1000 }} >
        
        <div className="mb-4">
        <a
          href="#"
          className="text-black flex items-center"
          onClick={() => toggleDropdown('nested1')}
        >
          Toys & Games {isDropdownOpen('nested1') ? '▲' : '▼'}
        </a>
        <p> Action Games & Toys</p>
        <p>Activity Kits & Toys</p>
        <p>Construction & Building Toys</p>
          {isDropdownOpen('nested1') && (
            <div className="ml-4">
              <a href="#" className="block text-black">
                Toys
              </a>
              <a href="#" className="block text-black">
               Activity 
              </a>
              <a href="#" className="block text-black">
               Construction 
              </a>
              <a href="#" className="block text-black">
                Nested Dropdown Item 2
              </a>

            </div>
            
          )}
        </div>
        <div className="mb-4">
          <a href="#" className="text-black flex items-center"
          onClick={() => toggleDropdown('nested2')}>
           sports & Outdoor {isDropdownOpen('nested2') ? '▲' : '▼'}
          </a>
          <p> Outdoor Sports</p>
        <p>Activity Kits </p>
        <p> Building Toys</p>
          {isDropdownOpen('nested2') && (
            <div className="ml-4">
              <a href="#" className="block text-black">
                Outdoor Sports
              </a>
              <a href="#" className="block text-black">
               Indoor Sports
              </a>
              <a href="#" className="block text-black">
               Outdoor Leisure
              </a>
              
            </div>
          )}
        </div>
        <div className="mb-4">
          <a href="#" className="text-black flex items-center"
           onClick={() => toggleDropdown('nested3')}>
            Ride-One & Cycles{isDropdownOpen('nested3') ? '▲' : '▼'}
          </a>
          <p>Ride-Ons</p>
        <p>Scooters</p>
        <p>Cycles 7</p>
          {isDropdownOpen('nested3') && (
            <div className="ml-4">
              <a href="#" className="block text-black">
                Ride-Ons
              </a>
              <a href="#" className="block text-black">
               Scooters
              </a>
              <a href="#" className="block text-black">
               Cycles 7 Tricycles
              </a>
              
            </div>
          )}
        </div>
        <div className="mb-4">
          <a href="#" className="text-black flex items-center"
           onClick={() => toggleDropdown('nested4')}>
           Baby Gear & Utility{isDropdownOpen('nested4') ? '▲' : '▼'}
          </a>
          <p>Baby Toys</p>
        <p>Baby Care</p>
        <p> Building Toys</p>
          {isDropdownOpen('nested4') && (
            <div className="ml-4">
              <a href="#" className="block text-black">
               Baby Gear
              </a>
              <a href="#" className="block text-black">
               Baby Utility
              </a>
              
              
            </div>
          )}
        </div>
        <div className="mb-4">
          <a href="#" className="text-black flex items-center"
           onClick={() => toggleDropdown('nested5')}>
          School & Travel{isDropdownOpen('nested5') ? '▲' : '▼'}
          </a>
          <p> Travel</p>
        <p>school Supplies</p>
        <p>Stationary</p>
          {isDropdownOpen('nested5') && (
            <div className="ml-4">
              <a href="#" className="block text-black">
               Travel
              </a>
              <a href="#" className="block text-black">
               school Supplies
              </a>
              <a href="#" className="block text-black">
               Stationary
              </a>
              
              
            </div>
          )}
        </div>
        <div className="mb-4">
          <a href="#" className="text-black flex items-center"
           onClick={() => toggleDropdown('nested6')}>
           Fashion & Accessories{isDropdownOpen('nested6') ? '▲' : '▼'}
          </a>
          <p> Baby Clothing</p>
        <p>Girl Clothing</p>
        <p>Infant Clothing</p>
          {isDropdownOpen('nested6') && (
            <div className="ml-4">
              <a href="#" className="block text-black">
               Baby Clothing
              </a>
              <a href="#" className="block text-black">
               Girl Clothing
              </a>
              <a href="#" className="block text-black">
               Infant Clothing
              </a>
              
            </div>
          )}
        </div>
        
      </div>
  )
}

export default Dropdowncat
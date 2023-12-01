import React, { useState } from 'react'

import { Link } from 'react-router-dom';
function Trackorder() {
    const [orderId, setOrderId] = useState('');

    const handleOrderIdChange = (e) => {
      setOrderId(e.target.value);
    };
  
    const handleContinueClick = () => {
      // Add logic to handle continue button click, e.g., navigate to the next page or perform an action
      console.log('Order ID:', orderId);
    };
  
    return (
       

        <div className="flex items-center justify-center h-screen">
        <div className="text-center  mb-60">
          <h1 className="text-2xl font-bold mb-4">Enter the Order Number</h1>
          <div className="flex items-center border-b border-gray-400 mb-4">
            <input
              type="text"
              value={orderId}
              onChange={handleOrderIdChange}
              className="flex-grow p-2 focus:outline-none text-center"
              placeholder="Enter Order ID"
            />
          </div>
          <button onClick={handleContinueClick} className="bg-white text-black p-4 px-4 rounded-3xl border border-blue-500 border-r-2 border-b-4">
            Continue
          </button>
        </div>
      </div>
    );
  }

export default Trackorder
// WishlistPage.js
import React from 'react';

const Wishlist = ({ wishlistItems }) => {
  return (
    <div className="bg-blue-200 mt-8 mb-16 py-8">
      <h2 className="text-3xl text-center font-bold mb-4">Wishlist</h2>
      <div className="flex flex-wrap justify-center">
        {wishlistItems.map((item) => (
          <div key={item.id} className="p-4">
            {/* Display wishlist item */}
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-2" />
            <p className="text-sm text-gray-700">{item.name}</p>
            <p className="text-sm font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

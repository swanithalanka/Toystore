import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sellers_1 from '../Assets/cream-1.webp';
import Sellers_2 from '../Assets/toy-1.webp';
import Sellers_3 from '../Assets/books-1.jpg';
import Sellers_4 from '../Assets/n-5.webp';
import Sellers_5 from '../Assets/n-6.webp';
import Sellers_6 from '../Assets/baby-1.jpg';
import Sellers_7 from '../Assets/books-1.jpg';

const cards = [
  {
    id: 1,
    image: Sellers_1,
    name: 'NERF N-Strike Elite Disruptor',
    price: 'RS. 1999',
  },
  {
    id: 2,
    image: Sellers_2,
    name: 'Nerf Alpha Strike Wolf LR-1',
    price: 'RS. 2499',
  },
  {
    id: 3,
    image: Sellers_3,
    name: 'Nerf Alpha Strike Fang QS-4',
    price: 'RS. 2499',
  },
  {
    id: 4,
    image: Sellers_4,
    name: 'Nerf Elite 2.0 Shockwave RD-15 Blaster 30 Darts',
    price: 'RS. 2499',
  },
  {
    id: 5,
    image: Sellers_5,
    name: 'Nerf Elite 2.0 Shockwave RD-15 Blaster 30 Darts',
    price: 'RS. 999',
  },
  {
    id: 6,
    image: Sellers_6,
    name: 'Nerf Elite SurgeFire Blaster 15-Dart Rotating Drum',
    price: 'RS. 1499',
  },
  {
    id: 7,
    image: Sellers_7,
    name: 'Nerf Elite 2.0 Eaglepoint Rd-8 Blaster With 8 Dart Drum',
    price: 'RS. 1799',
  },
];

const TransparentCard = ({ card }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white border-r-4 border-b-4 border-black p-6 rounded-lg h-96 relative">
      <button
        className={`absolute top-2 right-2 focus:outline-none ${
          isFavorite ? 'text-red-500' : 'text-gray-500'
        }`}
        onClick={toggleFavorite}
      >
        {isFavorite ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.45 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 2.95-3.4 5.75-8.55 11.54L12 21.35z"
            />
          </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
        )}
      </button>
      <img src={card.image} alt={card.name} className="w-full h-2/3 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold">{card.name}</h3>
      <p className="text-sm text-gray-700 mt-2">{card.price}</p>
    </div>
  );
};

const Sellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-200 mt-8 mb-16 py-8">
      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-2">
            <TransparentCard card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sellers;
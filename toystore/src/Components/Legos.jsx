import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gun_1 from '../Assets/N-1.jpg';
import gun_2 from '../Assets/n-2.jpg';
import gun_3 from '../Assets/n-3.jpg';
import gun_4 from '../Assets/n-4.webp';
import gun_5 from '../Assets/n-5.webp';
import gun_6 from '../Assets/n-6.webp';
import gun_7 from '../Assets/n-7.jpg';

const cards = [
  {
    id: 1,
    image: gun_1,
    name: 'NERF N-Strike Elite Disruptor',
    price: 'RS. 1999',
  },
  {
    id: 2,
    image: gun_2,
    name: 'Nerf Alpha Strike Wolf LR-1',
    price: 'RS. 2499',
  },
  {
    id: 3,
    image: gun_3,
    name: 'Nerf Alpha Strike Fang QS-4',
    price: 'RS. 2499',
  },
  {
    id: 4,
    image: gun_4,
    name: 'Nerf Elite 2.0 Shockwave RD-15 Blaster 30 Darts',
    price: 'RS. 2499',
  },
  {
    id: 5,
    image: gun_5,
    name: 'Nerf Elite 2.0 Shockwave RD-15 Blaster 30 Darts',
    price: 'RS. 999',
  },
  {
    id: 6,
    image:gun_6,
    name: 'Nerf Elite SurgeFire Blaster 15-Dart Rotating Drum',
    price: 'RS. 1499',
  },
  {
    id: 7,
    image:gun_7,
    name: 'Nerf Elite 2.0 Eaglepoint Rd-8 Blaster With 8 Dart Drum',
    price: 'RS. 1799',
  },
];

const TransparentCard = ({ card }) => (
  <div className="bg-white bg-opacity-75 p-4 rounded-lg">
    <img src={card.image} alt={card.name} className="w-full h-32 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{card.name}</h3>
    <p className="text-sm text-gray-700">{card.price}</p>
  </div>
);

const Legos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="container mx-auto mt-8">
      <h5 className="text-xl text-center mb-4">Top NERF Picks</h5>
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

export default Legos;

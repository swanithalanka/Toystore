import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import character_1 from '../Assets/iron-1.webp';
import character_2 from '../Assets/cb-1.jpg';
import character_3 from '../Assets/spider-1.jpg';
import character_4 from '../Assets/micky-1.jpg';
import character_5 from '../Assets/paw-1.jpg';
import character_6 from '../Assets/forzen-1.webp'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} block bg-red-500`}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} block bg-green-500`}
      style={style}
      onClick={onClick}
    />
  );
}

function Characters() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [character_1,character_2,character_3,character_4,character_5,character_6];

  return (
    <div className="brand-container mt-4 mb-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-4">Shop by characters</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='cards p-4' key={index}>
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="image"
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Characters;

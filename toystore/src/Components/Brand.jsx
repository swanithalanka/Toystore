import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brand_1 from '../Assets/Nerf-1.webp';
import brand_2 from '../Assets/Nerf-2.webp';
import brand_3 from '../Assets/Nerf-3.webp';
import brand_4 from '../Assets/Nerf-4.webp';
import brand_5 from '../Assets/Nerf-5.webp';
import brand_6 from '../Assets/Nerf-6.webp';

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

function Brand() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6];

  return (
    <div className="brand-container mt-4 mb-4">
      <h2 className="text-center text-2xl font-bold mb-4">Shop by Brands</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='cards p-4' key={index}>
            <img
              src={image}
              alt={`Brand ${index + 1}`}
              className="image"
              style={{
                border: "1px solid #000",
                borderRadius: "8px",
                width: "100%",
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brand;
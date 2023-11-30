import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/Age-2.jpg';
import image2 from '../Assets/Age-3.jpg';
import image3 from '../Assets/Age-4.jpg';
import image4 from '../Assets/Age-5.jpg';
import image5 from '../Assets/Age-6.jpg';
import image6 from '../Assets/Age-7.jpg';

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

function Age() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="brand-container mt-4 mb-4">
      <h2 className="text-center text-2xl font-bold mb-4">Shop by Age</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="cards  p-4 " key={index}>
            <img
              src={image}
              alt={`Age ${index + 1}`}
              className="image"
              style={{
                border: "1px solid #000",
                borderRadius: "8px",
                width: "100%",
                height: "300px", 
                objectFit: "cover",
                
              }}
            />
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Age;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import catergory_1 from '../Assets/toy-1.webp';
import catergory_2 from '../Assets/books-1.jpg';
import catergory_3 from '../Assets/bags-1.webp';
import catergory_4 from '../Assets/baby-1.jpg';
import catergory_5 from '../Assets/cycle-1.jpg';
import catergory_6 from '../Assets/arrival-6.webp';

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

function Category() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [catergory_1, catergory_2, catergory_3, catergory_4, catergory_5, catergory_6];

  return (
    <div className="brand-container mt-4 mb-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-4 ">Shop by Category</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="cards p-4" key={index}>
            <img
              src={image}
              alt={`Category ${index + 1}`}
              className="image"
              style={{
                border: "1px solid #000",
                borderRadius: "8px",
                width: "100%",
                height: "200px", // Set your desired height
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;

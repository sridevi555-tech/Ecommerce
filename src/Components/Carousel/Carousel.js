import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const carouselImages = [
  // Replace these with your actual image paths or URLs
  '/images/carousel1.jpg',
  '/images/carousel2.jpg',
  '/images/carousel3.jpg',
  '/images/carousel4.jpg'
];

const Carousel = () => {
  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


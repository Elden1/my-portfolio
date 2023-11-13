import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './assets/style.scss';

const ProjectSlider = ({ images }) => {
  if (!images || !Array.isArray(images) || images.length === 0) {
    return null; 
  }
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
          <img src={`${image}`} alt="Représentation du projet" key={image} loading="lazy"/>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
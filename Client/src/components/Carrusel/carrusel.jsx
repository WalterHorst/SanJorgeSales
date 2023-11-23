import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = ({ images, autoPlayInterval = 700 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;

    const nextSlide = () => {
      const newIndex = (currentIndex + 1) % (images.length + 1);
      setCurrentIndex(newIndex);
    };

    interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, images, autoPlayInterval]);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length + 1) % (images.length + 1);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % (images.length + 1);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / (images.length + 1))}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

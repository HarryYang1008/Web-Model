import React, { useEffect, useState } from 'react';
import "./style.css"; 
import news1 from "./news1.jpg";
import news2 from "./news2.jpg";
import news3 from "./news3.jpg";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [news1,news2,news3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // 清除定时器，防止内存泄漏
  }, [images.length]);

  return (
    <div className="card-news" id="NEWS">
      <div className="image-slider">
        <div
          className="slider-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`News ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
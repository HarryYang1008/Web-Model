import React, { useState } from "react";
import "./PopularProducts.css";
import dash2 from './dash2.jpg';

const PopularProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: "The Chairman™ Pro Package",
      description: "Face Shaving Kit",
      price: "$169.99",
      discountPrice: "$159.99 + Peak Hygiene Plan",
      image: dash2,
      label: "New",
    },
    {
      id: 2,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: dash2,
      label: "New",
    },
    {
      id: 3,
      title: "The Beard Hedger® Pro Kit",
      description: "Luxury Beard Grooming Kit",
      price: "$149.99",
      discountPrice: "$139.99 + Peak Hygiene Plan",
      image: dash2,
      label: "New",
    },
    {
      id: 4,
      title: "The Performance Package 5.0 Ultra",
      description: "All-In-One Grooming Kit",
      price: "$149.99",
      discountPrice: "$139.99 + Peak Hygiene Plan",
      image: dash2,
      label: "New",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="popular-products">
      <h2>Popular Items with groomed.®.</h2>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="products-container">
          <div
            className="products"
            style={{
              transform: `translateX(-${currentIndex * 200}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="product">
                <span className={`label ${product.label.toLowerCase()}`}>
                  {product.label}
                </span>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price">
                  <span className="original-price">{product.price}</span>{" "}
                  <span className="discount-price">{product.discountPrice}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;

import React from "react";
import "./GroinKitsPage.css";
import product1 from "./dash2.jpg"; // 替换为实际图片路径
import product2 from "./dash2.jpg";
import product3 from "./dash2.jpg";
import product4 from "./dash2.jpg";
import bannerLeft from "./dash2.jpg"; // 左侧图片
import bannerRight from "./dash2.jpg"; // 右侧图片

const GroinKitsPage = () => {
  const products = [
    {
      id: 1,
      title: "The Platinum Package 5.0 Ultra",
      description: "Luxury Full-Body Grooming Kit",
      price: "$169.99",
      discountPrice: "$159.99 + Peak Hygiene Plan",
      label: "Best Seller",
      image: product1,
    },
    {
      id: 2,
      title: "The Performance Package 5.0 Ultra",
      description: "All-In-One Grooming Kit",
      price: "$149.99",
      discountPrice: "$139.99 + Peak Hygiene Plan",
      label: "Best Seller",
      image: product2,
    },
    {
      id: 3,
      title: "The Perfect Package 5.0 Ultra",
      description: "Groin Grooming Kit",
      price: "$129.99",
      discountPrice: "$119.99 + Peak Hygiene Plan",
      image: product3,
    },
    {
      id: 4,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: product4,
    },
    {
      id: 5,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: product4,
    },
    {
      id: 6,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: product4,
    },
    {
      id: 7,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: product4,
    },
    {
      id: 8,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: product4,
    },
    {
      id: 9,
      title: "Ultra Smooth Package",
      description: "Shaving Care for Down There",
      price: "$39.99",
      discountPrice: "$34.99 + Peak Hygiene Plan",
      image: product4,
    },

  ];

  return (
    <div className="groin-kits-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-left">
          <h1>Do it for the boys.</h1>
          <h2>Groin</h2>
        </div>
        <div className="banner-right">
          <img src={bannerRight} alt="Banner Right" />
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2>Groin Kits</h2>
        <p>Get down to your business.</p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <span className={`label ${product.label ? "best-seller" : ""}`}>
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
      </section>
    </div>
  );
};

export default GroinKitsPage;

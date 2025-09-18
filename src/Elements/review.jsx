import React from "react";
import "./review.css";

const reviews = [
  {
    name: "Bradley N.",
    role: "Verified Collector",
    title: "Perfect platform for NFTs!",
    content:
      "I joined this marketplace a few months ago and I’m impressed with how seamless it is to buy and sell. Transactions are smooth, the fees are transparent, and the UI feels modern. I’ve discovered some amazing new artists here and managed to flip a few pieces at a great profit. Highly recommend for both beginners and experienced collectors!",
  },
  {
    name: "Dane C.",
    role: "Verified Creator",
    title: "The best place to showcase digital art",
    content:
      "As an NFT creator, I love how easy it is to mint my work here. The tools are straightforward, royalties are built in, and the exposure has been fantastic. I even connected with collectors directly through the community section. The analytics help me understand my audience, and I feel like this is the future of digital ownership.",
  },
  {
    name: "Julian B.",
    role: "Verified Investor",
    title: "This marketplace is the future",
    content:
      "I’ve tried trading on a few other NFT platforms, but nothing compares to this one. Liquidity is strong, the floor prices are accurate, and I can trust the verified collections. On top of that, I feel secure knowing all assets are backed by reliable smart contracts. It’s not just a place to trade—it’s a full ecosystem for collectors, creators, and investors.",
  },
];


const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className="reviews-title">sharp results</h1>
      <hr className="reviews-divider" />
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-author">
              <p className="name">{review.name}</p>
              <p className="role">{review.role}</p>
            </div>
            <div className="review-title">
              <h2>{review.title}</h2>
            </div>
            <div className="review-content">
              <p>{review.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

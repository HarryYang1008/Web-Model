import React from "react";
import "./review.css";

const reviews = [
  {
    name: "Bradley N.",
    role: "Verified Buyer",
    title: "Good for your balls!",
        content:
        
      "I bought the manscape package for my fiancé for his birthday and he's so in love lol! He has not had any ingrown hairs or razor bumps and he really appreciates this gift and how delicate it is. He told me he's never had such a close shave down there because balls are sensitive. I'm so happy for him with this purchase!",
  },
  {
    name: "Dane C.",
    role: "Verified Buyer",
    title: "Everything was awesome 10/10",
    content:
      "Love it. The weed whacker is by far the best ear and nose trimmer I used and the lawn mower is such a smooth trim and so easy to use. Also, at first, I thought ball deodorant and toner was a bit excessive but now that I used it I would highly recommend. The boxer briefs are soft and just as good or better than other primo brands.",
  },
  {
    name: "Julian B.",
    role: "Verified Buyer",
    title: "MANSCAPED is the future",
    content:
      "I've tried other products in the past but nothing beats manscaped. It's actually products that help you entirely. Not just physically but in return you get peace of mind knowing everything is natural, safe, and best of all easy to use. I'm a manscaped customer for life. You should give it a try and enjoy all the benefits it has to offer.",
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

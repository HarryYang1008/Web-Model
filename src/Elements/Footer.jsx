import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      

      {/* 中间链接部分 */}
      <div className="footer-links">
        <div className="link-column">
          <p>About Us</p>
          <p>FAQ</p>
          <p>Blog</p>
          <p>Manage Orders</p>
          
        </div>
        
        <div className="link-column">
          
          <p>Contact Us</p>
          <p>Accessibility Statement</p>
          <p>Privacy Preferences</p>
        </div>
        <div className="subscribe">
          <h4>Get Early Access to New Products Below</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email" />
            <button>→</button>
          </div>
          <p>
            By entering your email you agree to receive emails from our company
            about its products, offers and promotions. You can unsubscribe at
            any time.
          </p>
        </div>
      </div>

      {/* 支付方式和版权部分 */}
      <div className="footer-bottom">
        
        <div className="footer-logo">
          <h2>NFT MARKET.</h2>
        </div>
        <div className="copyright">
          <p>© 2025 groomed. All Rights Reserved</p>
          <p>
            <a href="#">Warranty & Return</a> | <a href="#">Terms of Use</a> |{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

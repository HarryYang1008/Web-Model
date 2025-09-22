import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import nftImage from "./NFT_status.png";
import Footer from "./Elements/Footer.jsx"
import Reviews from "./Elements/review";
import DarkVeil from "./Elements/SubElements/DarkVeil.jsx";  // ✅ 引入背景组件

const NFTLandingPage = () => {
  return (
    <div className="landing-container">

      {/* 背景组件 */}
      <DarkVeil />

      
      {/* Header */}
      {/* 顶部导航 */}
      <header className="header">
            <nav className="nav">
            <Link to="/">Main</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/creator">Creator</Link>
            <Link to="/community">Community</Link>
            </nav>
            <button className="wallet-btn">Connect to wallet</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Left Side */}
        <div className="hero-text">
          <h1>
            Create Your Own <br /> NFT Dream <br /> Gallery
          </h1>
          <p>
            The largest NFT marketplace. Authentic and truly unique digital
            creation. Signed and issued by the creator, made possible by
            blockchain technology.
          </p>

          <div className="cta">
            <button className="discover-btn">
              Discover NFT <span className="arrow">↗</span>
            </button>
          </div>

          {/* Stats */}
          <div className="stats">
            <div>
              <h3>25.5 K</h3>
              <p>Artwork</p>
            </div>
            <div>
              <h3>15.5+ M</h3>
              <p>Artist</p>
            </div>
            <div>
              <h3>10.5+ K</h3>
              <p>Auction</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image">
          <div className="bg-card card1"></div>
          <div className="bg-card card2"></div>
          <img src={nftImage} alt="NFT Statue" className="main-img" />
        </div>
      </section>

      <Reviews />
      <Footer/>
    </div>
  );
};

export default NFTLandingPage;

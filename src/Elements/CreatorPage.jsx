import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import "../App.css";
import "./SubElements/DarkVeil.css"
import "./SubElements/ProfileCard.css"

import profile1 from "./profile1.png";

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import DarkVeil from "./SubElements/DarkVeil.jsx";
import TextType from './SubElements/TextType.jsx';

import ProfileGrid from './SubElements/ProfileGrid.jsx'


const CreatorPage = () => {
  return (
    <div className="landing-container">


      <DarkVeil />

      
    

      {/* Header */}
      {/* 顶部导航 */}
     <Header/>

      <section className="hero-section">
        {/* Left Side */}
        <div className="hero-text">
          <h1>
          <TextType 
            text={["Greatest Creator For This Month!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          </h1>
          <h2>
            Amy Wang
          </h2>
          <p>
            Crowned as Creator of the Month, she redefines digital
            artistry with authenticity and vision. Each NFT is a truly unique
            masterpiece—personally signed, published, and immortalized through
            blockchain innovation.
          </p>

          <div className="cta">
            <button className="discover-btn">
              Discover Profile<span className="arrow">↗</span>
            </button>
          </div>

         
        </div>

        {/* Right Side - Image */}
        <div className="hero-image">
          <div className="bg-card card1"></div>
          <div className="bg-card card2"></div>
          <img src={profile1} alt="NFT Statue" className="main-img" />
        </div>
      </section>


      
      
      
  
      <div className="profile-grid-container">
        <ProfileGrid/>
      </div>
      
        
      
      <Footer/>
    </div>
  );
};

export default CreatorPage;

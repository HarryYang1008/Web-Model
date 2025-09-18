import React,{Component} from "react";
import "./style.css";

import Reviews from "./Elements/review";
import PopularProducts from './Elements/popularproduct.jsx'
import Footer from './Elements/Footer.jsx'
import GroinKitsPage from './Elements/GroinKitsPage.jsx'

class MapComponent extends Component {

  ///////// The popular product part with session control ///////////////////////////////
  
  
  
 ////////////////////// PAGE Show //////////////
 showmainpage = () => {
  const landing_page= document.getElementById('main-container');
  landing_page.style.display = 'block';
  const sign_in_page = document.getElementById('GroinKitsPage-container');
  sign_in_page.style.display = 'none';
}

  showshoppingpage = () => {
    const landing_page= document.getElementById('main-container');
    landing_page.style.display = 'none';
    const sign_in_page = document.getElementById('GroinKitsPage-container');
    sign_in_page.style.display = 'block';
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////



  render() {
    return (
      <div>
        {/* 固定顶部横幅 */}
        <header className="top-banner">
          <button className="logo" href="#" onClick={this.showmainpage}>groomed.</button>
          <nav>
            <ul className="menu">
              <li>
                <a href="#">Deals & Kits</a>
              </li>
              <li>
                <a href="#">Tools, Trimmers & Blades</a>
              </li>
              <li>
                <a href="#">Beard & Face</a>
              </li>
              <li>
                <a href="#">Head & Body</a>
              </li>
              <li>
                <a href="#" onClick={this.showshoppingpage}>Shop All</a>
              </li>
            </ul>
          </nav>
          <div className="right-options">
            <a href="#">About us</a>
            <a href="#">Our CTA</a>
            <select name="language" id="language-select">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            <a href="#" className="cart-icon">
              🛒
            </a>
            <a href="#" className="profile-icon">
              👤
            </a>
            
          </div>
        </header>

        <div id ="main-container">
          <main>
            {/* background picture of main page part */}
            <section className="hero">
              <div className="overlay">
                <div className="hero-text">
                  <h1>groomed for men</h1>
                  <p>
                    Stay with <span className="brand">groomed.®</span>.
                  </p>
                  <button className="shop-now">Shop Now</button>
                </div>
              </div>
            </section>
          </main>
          
          <PopularProducts />
          <Reviews />
          
        </div>

        <div id = "GroinKitsPage-container" >
          <GroinKitsPage />
        </div>

        <Footer/>
      </div>
    );
  }
}

export default MapComponent;

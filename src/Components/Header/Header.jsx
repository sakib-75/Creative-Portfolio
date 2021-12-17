import React from 'react';
import '../Header/Header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaBars } from "react-icons/fa";
import Logo from '../Images/logo.png';
import banner1 from '../Images/banner_1.png';
import banner2 from '../Images/banner_02.png';
import banner3 from '../Images/banner_03.png';
import { Link_button } from '../Sub Components/btn_components';

export default function Header() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-menu">
          <img src={Logo} alt="" />
          <nav className="main-nav">
            <ul className="nav-list">
              <li><a href="#about-us" className="nav-link">About us</a></li>
              <li><a href="#services" className="nav-link">Service</a></li>
              <li><a href="#portfolio" className="nav-link">Porlfolio</a></li>
              <li><a href="#pricing" className="nav-link">Pricing</a></li>
              <li><a href="#blog" className="nav-link">Blog</a></li>
              <li><a href="#contact-us" className="nav-link">Contact us</a></li>
            </ul>
          </nav>
          <div className="menu-btn">
            <Link_button button_title="Hire Us" link="#"/>
            <button className="menu-bar"> <FaBars/> </button>
          </div>
        </div>
        
        <Slider {...settings} className="hero-slider">
          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <Link_button button_title="Hire Me" link="#"/>
            </div>
            <img src={banner1} className="slider-img" alt="" />
          </div>

          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <Link_button button_title="Hire Me" link="#"/>
            </div>
            <img src={banner2} className="slider-img" alt="" />
          </div>

          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <Link_button button_title="Hire Me" link="#"/>
            </div>
            <img src={banner3} className="slider-img" alt="" />
          </div>
        </Slider>

      </div>
    </header>         

  );
}





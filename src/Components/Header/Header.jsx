import React from 'react'
import '../Header/Header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaBars } from "react-icons/fa";
import Logo from '../Images/logo.png';
import Button from '../Sub Components/Button';
import banner1 from '../Images/banner_1.png';
import banner2 from '../Images/banner_02.png';
import banner3 from '../Images/banner_03.png';

export default function Header() {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay:false,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1
  };

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-menu">
          <img src={Logo} alt="" />
          <nav className="main-nav">
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">About us</a></li>
              <li><a href="#" className="nav-link">Service</a></li>
              <li><a href="#" className="nav-link">Porlfolio</a></li>
              <li><a href="#" className="nav-link">Blog</a></li>
              <li><a href="#" className="nav-link">Contact us</a></li>
            </ul>
          </nav>
          <div className="menu-btn">
            <Button button_title="Hire Us"/>
            <button className="menu-bar"> <FaBars/> </button>
          </div>
        </div>
        
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <Button button_title="Hire Me"/>
            </div>
            <img src={banner1} className="slider-img" alt="" />
          </div>

          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <Button button_title="Hire Me"/>
            </div>
            <img src={banner2} className="slider-img" alt="" />
          </div>

          <div className="slider-item">
            <div className="slider-text">
              <h1 className="slider-title">We Are Creative <br/> <span>Deneb Agency</span></h1>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>Nulla id euismod massa. Donec accumsan semper lacus, vestibulum gravida ante sed eu lacus et diam lacinia.</p>
              <Button button_title="Hire Me"/>
            </div>
            <img src={banner3} className="slider-img" alt="" />
          </div>
        </Slider>

      </div>
    </header>         

  );
}





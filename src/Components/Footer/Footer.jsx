import React from 'react'
import '../Footer/Footer.css'
import {Link_button} from '../Sub Components/btn_components'
import Logo from '../Images/logo.png'
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export function Footer() {
    return (
        <div>
            <footer className='footer'>
                <Footer_cta />
                <div className="container footer-body">
                    <div className="footer-sec">
                        <img src={Logo} alt="" />
                        <p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, 
                            euismod nec tortor praesent consequat urna.
                        </p>
                        <div className="footer-social">
                            <a href="#"> <FaFacebookF /> </a>
                            <a href="#"> <FaInstagram /> </a>
                            <a href="#"> <FaTwitter /> </a>
                        </div>
                    </div>

                    <div className="footer-sec">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolios</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-sec contact-icon">
                        <h4>Contact Us</h4>
                        <div className="footer-icon-part">
                            <FaPhone />
                            <a href="tel: +8801914603437">01914603437</a>
                        </div>
                        <div className="footer-icon-part">
                            <FaEnvelope />
                            <a href="mailto: sakibulislam285@gmail.com">sakibulislam285@gmail.com</a>
                        </div>
                        <div className="footer-icon-part">
                            <FaMapMarkerAlt />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </footer>
            
            <div className="copyright">
                <p>Copyright © 2020 <span>Deneb</span>. All rights reserved.</p>
            </div>
        </div>
    );
}


export function Footer_cta() {
    return (
        <div className='footer-cta-section'>
            <div className="footer-cta-body">
                <div className="cta-text">
                    <h3>Have Any Project in Mind ?</h3>
                    <p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
                </div>
                <div className="white-link-btn">
                    <Link_button button_title='hire us' link='#' />
                </div>
            </div>
        </div>
    );
}


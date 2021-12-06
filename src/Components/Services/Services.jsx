import React from 'react'
import '../Services/Services.css'
import service1_img from '../Images/service1.png';
import service2_img from '../Images/service2.png';
import service3_img from '../Images/service3.png';
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Services() {
    return (
        <section className="container services-section">
            <h2 className="section-title center">Our Service</h2>
            <p className="paragraph center">When unknow printer took a gallery of type and scramblted it to makea type specimen book</p>

            <div className="services-block">
                <div className="service-item">
                    <img src={service1_img} alt="" />
                    <p className="service-title">Web Solution</p>
                    <p className="paragraph">Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.</p>
                    <div className="readmore-icon">
                        <AiOutlineCaretRight/>
                        <a href="#"> Read More</a>
                    </div>
                </div>
                <div className="service-item">
                    <img src={service2_img} alt="" />
                    <p className="service-title">Strategy and Research</p>
                    <p className="paragraph">Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.</p>
                    <div className="readmore-icon">
                        <AiOutlineCaretRight/>
                        <a href="#"> Read More</a>
                    </div>
                </div>
                <div className="service-item">
                    <img src={service3_img} alt="" />
                    <p className="service-title">Web Development</p>
                    <p className="paragraph">Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu augue egestas laciniaam eu ornare ipsum, quis tristique ligula.</p>
                    <div className="readmore-icon">
                        <AiOutlineCaretRight/>
                        <a href="#"> Read More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

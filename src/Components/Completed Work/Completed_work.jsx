import React from 'react'
import '../Completed Work/Completed-work.css'
import achivment1 from '../Images/achivment1.png'
import achivment2 from '../Images/achivment2.png'
import achivment3 from '../Images/achivment3.png'
import achivment4 from '../Images/achivment4.png'

export default function Completed_work() {
    return (
        <section className="completed-work-sec">
            <div className="container completed-work-body">
                <div className="completed-work-text">
                    <h2 className="section-title">Over 500+ Completed work & Still Counting</h2>
                    <p className="paragraph">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Phasellus at orci non risus luctus commodo. Ut nibh tellus, faucibus nec gravida.
                    </p>
                    <p className="paragraph">Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel non ex. Quisque a finibus justo.</p>

                </div>
                <div className="achivment-wrapper">
                    <div className="achivment achivment1">
                        <img src={achivment1} alt="" />
                        <h3>300+</h3>
                        <p>Projects Done</p>
                    </div>
                    <div className="achivment achivment2">
                        <img src={achivment2} alt="" />
                        <h3>250+</h3>
                        <p>Projects Done</p>
                    </div>
                    <div className="achivment achivment3">
                        <img src={achivment3} alt="" />
                        <h3>200+</h3>
                        <p>Active Projects</p>
                    </div>
                    <div className="achivment achivment4">
                        <img src={achivment4} alt="" />
                        <h3>5+</h3>
                        <p>Years Exerience</p>
                    </div>

                </div>

            </div>
        </section>
    );
}

import React from 'react'
import '../Hire Us/Hire-us.css'
import Hireusimg from '../Images/Hire-us-img.png'
import { Link_button } from '../Sub Components/btn_components'

export default function Hire_us() {
    return (
        <section className="Hire-us-section" id="about-us">
            <div className="container Hire-us-body">
                <img src={Hireusimg} alt="" />
                <div className="Hire-us-text">
                    <h2 className="section-title">Why You Hire Us?</h2>
                    <p className="paragraph">Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. 
                        Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
                    </p>
                    <p className="paragraph">Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet hendrerit vitae non ipsum. 
                        Nam faucibus elementum arcu, eget eleifend tortor.
                    </p>

                    <Link_button button_title="Read More" link="#"/>
                </div>

            </div>
        </section>
    );
}

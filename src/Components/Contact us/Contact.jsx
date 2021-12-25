import React from 'react';
import '../Contact us/Contact.css';

export default function Contact() {
    return (
        <section className='contact' id='contact-us'>
            <div className='container contact-us'>
                <h2 className="section-title">Send us a message</h2>
                <p className="paragraph">When unknow printer took a gallery of type and scramblted it to make a type specimen book.</p>
                <div className="contact-body">
                    <div className="contact-sec">
                        <form action="">
                            <input type='text' className='contact-input' placeholder='Name'/>
                            <input type='email' className='contact-input' placeholder='Email'/>
                            <input type='number' className='contact-input' placeholder='Phone'/>
                            <select className='contact-input' title='Select Option'>
                                <option value="">Choose Service</option>
                                <option value="">Web Design</option>
                                <option value="">Graphics Design</option>
                                <option value="">App Development</option>
                                <option value="">Web Development</option>
                                <option value="">SEO and Marketing</option>
                            </select>
                            <textarea className='contact-message' placeholder='Message'></textarea>
                            <input type="submit" className='contact-submit' value="Submit Now" />
                        </form>
                    </div>
                    <div className="map">
                        <iframe src="https://fliplink.io/IJ4Et" frameBorder="0"  allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

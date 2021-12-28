import React from 'react';
import '../Contact us/Contact.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
    return (
        <section className='contact' id='contact-us'>
            <div className='container contact-us'>
                <h2 className="section-title">Send us a message</h2>
                <p className="paragraph">When unknow printer took a gallery of type and scramblted it to make a type specimen book.</p>
                <div className="contact-body">
                    <div className="contact-sec">
                        <form action="">
                            <div className="form-control">
                                <input type='text' id='name' className='contact-input' onChange={nameChange} placeholder='Name'/>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <div className="form-control">
                                <input type='email' id='email' className='contact-input' onChange={emailChange} placeholder='Email'/>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <div className="form-control">
                                <input type='number' id='phone' className='contact-input' onChange={phoneChange} placeholder='Phone'/>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <div className="form-control">
                                <select className='contact-input' title='Select Option' required>
                                    <option value="">Choose Service</option>
                                    <option value="1">Web Design</option>
                                    <option value="2">Graphics Design</option>
                                    <option value="3">App Development</option>
                                    <option value="4">Web Development</option>
                                    <option value="5">SEO and Marketing</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <textarea id='message' className='contact-message' onChange={messageChange} placeholder='Message'></textarea>
                                <FaCheckCircle />
                                <FaExclamationCircle />
                            </div>
                            <input type="submit" className='contact-submit' value="Submit Now" />
                        </form>
                    </div>
                    <div className="map">
                        <iframe src="https://fliplink.io/IJ4Et" title='Map' frameBorder="0"  allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}



function nameChange(){
    const Name = document.getElementById('name');
    if(Name.value.trim() !== ''){
        setSuccess(Name, 'inp');
    }
    else{
        setError(Name, 'inp');
    }
}

function emailChange(){
    const Email = document.getElementById('email');
    if(validateEmail(Email) === true){
        setSuccess(Email, 'inp');
    }
    else{
        setError(Email, 'inp');
    }
}

function phoneChange(){
    const Phone = document.getElementById('phone');
    if(Phone.value.trim() !== ''){
        setSuccess(Phone, 'inp');
    }
    else{
        setError(Phone, 'inp');
    }
}

function messageChange() {
    const Message = document.getElementById('message');
    if(Message.value.trim() !== ''){
        setSuccess(Message, 'textarea');
    }
    else {
        setError(Message, 'textarea');
    }

}


function setSuccess(input, inp_type){
    const form_control = input.parentElement;
    if(inp_type === 'textarea'){
        form_control.className = 'form-control msg success';
    }
    else{
        form_control.className = 'form-control success';
    }
}

function setError(input, inp_type){
    const form_control = input.parentElement;
    if(inp_type === 'textarea'){
        form_control.className = 'form-control msg error';
    }
    else{
        form_control.className = 'form-control error';
    }
}


function validateEmail(input) {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.match(validRegex)) {
      return true;
    } 
    else {
      return false;
    }

}
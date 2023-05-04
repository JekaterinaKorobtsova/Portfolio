import React from "react";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import contact from '../image/contact.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact">
        <div className="main-contact">
          <div className="location">
            <MdLocationPin className="contact-icon"/>
            <p> Tallinn, Estonia</p>
          </div>
          <div className="email">
            <MdOutlineEmail className="contact-icon"/>
            <p>jekaterina.korobtsova@gmail.com</p>
          </div>
          <img src={contact} alt='vintage typewriter' />
        </div>
        <div className="contact-form">
          <h3>Lets get in touch. Send me a message:</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../css/contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k28vqrf", //  EmailJS service
        "template_qdavl22", //  EmailJS template ID
        form.current, // The form reference
        "me-JF3BDlhoiv4TyL" //  EmailJS public key (user ID)
      )
      .then(
        () => {
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-text">
          <motion.h1 className="contact-heading">
            Get in <span className="skyblue">Touch</span>
          </motion.h1>
          <motion.p className="contact-subtext">
            Appreciate your interest in connecting! I’m always open to new
            ideas, feedback, or potential partnerships. Drop your message in the
            form and I’ll be in touch soon.
          </motion.p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="mail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Type your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

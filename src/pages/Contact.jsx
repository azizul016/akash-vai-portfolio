import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Section from "../components/Section";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    axios.post("https://formspree.io/f/xjvpwleg", formData, {
      Accept: "application/json",
    });
    setFormData({});

    emailjs
      .sendForm(
        "gmail",
        "template_d64h6op",
        e.target,
        "user_paTmxt1GHxfZ5ocVRURRk"
      )
      .then(
        (result) => {
          // alert("I will shortly connect with you");
          // e.target.value = " ";
          document.getElementById("email").value = "";
          document.getElementById("username").value = "";
          document.getElementById("userMessage").value = "";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //for sending mail in my mail;
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "gmail",
  //       "template_d64h6op",
  //       e.target,
  //       "user_paTmxt1GHxfZ5ocVRURRk"
  //     )
  //     .then(
  //       (result) => {
  //         alert("Mail send successfully");
  //         // e.target.value = " ";
  //         document.getElementById("email").value = "";
  //         document.getElementById("username").value = "";
  //         document.getElementById("userMessage").value = "";
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <Section id="contact" title="Contact">
      <div className="row">
        <div className="col-md-5 order-last order-lg-first">
          <div className="subheading mb-3">I'd love to hear from you</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="name"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userMessage">Message</label>
              <textarea
                className="form-control"
                id="userMessage"
                name="message"
                rows="3"
                placeholder="Enter message"
                value={formData.message || ""}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              // onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 mb-5 mb-lg-0">
          <div className="subheading mb-3">Reach out to me directly</div>
          <div className="contact-direct">
            <div className="row">
              <div className="col-sm-6">
                <div className="item">
                  <span>
                    <FaEnvelope />
                  </span>
                  <p>Sirajgonj, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="item">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>+8801681876442</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465085.7338051916!2d89.25575532553795!3d24.39930677888745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdcf228688008d%3A0x16f56a2c551fbd48!2sSirajganj%20District!5e0!3m2!1sen!2sbd!4v1604089230494!5m2!1sen!2sbd"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="Contact Me"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>

      <p className="py-3 m-0 mt-5 text-center text-secondary">
        Made by Azizul Haque
      </p>
    </Section>
  );
};

export default Contact;

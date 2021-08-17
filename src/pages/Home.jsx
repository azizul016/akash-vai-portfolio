import React from "react";
import Section from "../components/Section";
import ResumePDF from "../assets/Azizul Haque Resume .pdf";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/azizul--haque/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/azizul016",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/azizul__haque",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.facebook.com/azizul.haque.789",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <Section id="about">
      <h1 style={{color: "#141D29" }} className="mb-0">
        Azizul Haque
        
      </h1>
      <div className="subheading mb-3">
        Sirajgonj, Dhaka, Bangladesh
        <a style={{color: '#6C757D'}} href="haqueazizul789@gmail.com"> haqueazizul789@gmail.com</a>
      </div>
      <p className="lead mb-4">
      Hi!, I'm Azizul Haque a web developer specialized in JavaScript and I keep learning and improving every day because technology never stops.I specialize more than anything in the MERN stack (mongodb, express, react, node), but I also have knowledge of python and other libraries.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  );
}

// <span className="text-primary"> Haque</span>
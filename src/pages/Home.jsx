import React from "react";
import Section from "../components/Section";
import ResumePDF from "../assets/Azizul Haque Resume .pdf";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className='social-icon'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  );
};

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/imakashh/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/SR-Akash",
      icon: <FaGithub />,
    },
    // {
    //   href: "https://twitter.com/azizul__haque",
    //   icon: <FaTwitter />,
    // },
    {
      href: "https://www.facebook.com/imAkash25/",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <Section id='about'>
      <h1 style={{ color: "#141D29" }} className='mb-0'>
        Saidur Rahman Akash
      </h1>
      <div className='subheading mb-3 '>
        Dhaka, Bangladesh
        <a
          style={{ color: "#6C757D", marginLeft: "10px" }}
          href='akashtah25@gmail.com'
        >
          akashtah25@gmail.com
        </a>
      </div>
      <p className='lead mb-4'>
        My name is Saidur Rahman Akash. I have completed my graduation in
        Computer Science & Engineering(CSE) from (IUBAT) - International
        University of Business Agriculture & Technology. I did three months
        internship at Akij Info Tech. Currently, I am in iBOS Limited (Concern
        of Akij Group) as a Jr. Backend Developer. I have 1 Year+ of experience
        in asp.net, asp.net core, C#, MongoDB, and MSSQL.  I operated in the
        Import Management project as a scrum master and I explicitly worked in
        the ERP system and RTM(Route To Market).
      </p>

      <div className='btn-group mb-5'>
        <button
          className='btn btn-primary btn-custom py-2 px-5'
          type='submit'
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className='social-icons'>
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  );
}

// <span className="text-primary"> Haque</span>

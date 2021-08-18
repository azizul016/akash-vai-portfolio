import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import Avatar from '../assets/avatar.jpg'
import azizul from "../assets/azizul.jpg";

export default function Navigation() {
  const navItems = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "BlogsPost",
      href: "#BlogsPost",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      id='sideNav'
      className='fixed-top'
    >
      <Navbar.Brand href='#home'>
        <span className='d-block d-lg-none'>Azizul Haque</span>
        <span className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={azizul}
            alt='Azizul Haque'
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          {navItems.map((navItem, index) => (
            <Nav.Link href={navItem.href} key={index}>
              {navItem.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

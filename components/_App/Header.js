import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Navbar, NavDropdown, Nav, FormControl, Form } from "react-bootstrap";
import { Icon, Popup, Image } from "semantic-ui-react";


function Header() {
  const router = useRouter();

  return (
    <>
    <Navbar bg="light" expand="md" className="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="navbar-sticky" id="basic-navbar-nav">

        <Nav className="navbarLeft navbarList">

          <Nav.Link className="left-nav-item" href="https://www.ranpharma.com/index.php?route=product/plants&filter_letter=bot_name&ppath=10" target="_blank" rel="noopener noreferrer">
            <Popup size="mini" content="אינדקס צמחים" trigger={<Image src="images/ran_pharma.png" className="menu-icon menu-img" />} />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.youtube.com/c/%D7%94%D7%A8%D7%91%D7%9C%D7%99%D7%A1%D7%98%D7%99%D7%A0%D7%99%D7%91%D7%9E%D7%95%D7%A8%D7%A1%D7%99%D7%90%D7%A0%D7%95" target="_blank" rel="noopener noreferrer">
            <Icon link name="youtube" className="menu-icon youtube" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.facebook.com/yaniv.murciano" target="_blank" rel="noopener noreferrer">
            <Icon link name="facebook official" className="menu-icon facebook" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.instagram.com/yanivmurciano" target="_blank" rel="noopener noreferrer">
            <Icon link name="instagram" className="menu-icon instagram" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://wa.me/972525934697" target="_blank" rel="noopener noreferrer">
            <Icon link name="whatsapp" className="menu-icon whatsapp" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="mailto:Yaniv.Murciano@fagron.co.il">
            <Icon link name="envelope" className="menu-icon email" />
          </Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
    </>

  );
}

export default Header;

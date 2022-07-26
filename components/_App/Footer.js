import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Icon, Popup, Image } from "semantic-ui-react";


export default function Header2() {
  var date = new Date();

  return (
    <div className="footer-div">
      <div className="footer">
        <Nav className="navbarCenter navbarList">

          <Nav.Link className="left-nav-item" href="https://www.youtube.com/c/%D7%94%D7%A8%D7%91%D7%9C%D7%99%D7%A1%D7%98%D7%99%D7%A0%D7%99%D7%91%D7%9E%D7%95%D7%A8%D7%A1%D7%99%D7%90%D7%A0%D7%95" target="_blank" rel="noopener noreferrer">
            <Icon link name="youtube" className="menu-icon youtube" size="large" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.facebook.com/yaniv.murciano" target="_blank" rel="noopener noreferrer">
            <Icon link name="facebook official" className="menu-icon facebook" size="large" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.instagram.com/ran.pharma" target="_blank" rel="noopener noreferrer">
            <Icon link name="instagram" className="menu-icon instagram" size="large" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="mailto:Yaniv.Murciano@fagron.co.il">
            <Icon link name="envelope" className="menu-icon" size="large" />
          </Nav.Link>

        </Nav>

        <p> {`כל הזכויות שמורות הרבליסט © ${date.getFullYear()}`} </p>
      </div>
    </div>
  )
}

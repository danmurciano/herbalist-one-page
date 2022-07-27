import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Icon, Popup, Image } from "semantic-ui-react";


export default function Header2() {
  var date = new Date();

  return (
    <div className="footer-div">
      <div className="footer">
        <h2> צור קשר </h2>
        <p> טלפון: 052-597-4697 </p>

        <Nav className="navbarCenter navbarList">

          <Nav.Link className="left-nav-item" href="https://www.facebook.com/yaniv.murciano" target="_blank" rel="noopener noreferrer">
            <Icon link name="facebook official" className="menu-icon facebook" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.instagram.com/ran.pharma" target="_blank" rel="noopener noreferrer">
            <Icon link name="instagram" className="menu-icon instagram"  />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://wa.me/972525934697" target="_blank" rel="noopener noreferrer">
            <Icon link name="whatsapp" className="menu-icon whatsapp" />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="mailto:Yaniv.Murciano@fagron.co.il">
            <Icon link name="envelope" className="menu-icon email" />
          </Nav.Link>

        </Nav>

        <p> {`כל הזכויות שמורות הרבליסט © ${date.getFullYear()}`} </p>
      </div>
    </div>
  )
}

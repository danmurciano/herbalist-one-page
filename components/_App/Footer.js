import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Icon, Popup } from "semantic-ui-react";
import NewsletterModal from "./NewsletterModal";

export default function Header2() {
  var date = new Date();
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);

  return (
    <div class="footer-div">
      <div class="footer">
        <Nav className="navbarCenter navbarList">
          <Nav.Link className="left-nav-item" href="mailto:yaniv@ranpharma.com">
            <Popup size="mini" content="צור קשר" trigger={<Icon link name="envelope" className="menu-icon" size="large" />} />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="">
            <Icon link name="paper plane" className="menu-icon" size="large" onClick={handleOpenModal} />
          </Nav.Link>

          <Nav.Link className="left-nav-item" href="https://www.facebook.com/yaniv.murciano" target="_blank" rel="noopener noreferrer">
            <Icon link name="facebook official" className="menu-icon" size="large" />
          </Nav.Link>
        </Nav>

        <NewsletterModal modal={modal} setModal={setModal} />

        <p class=""> {`כל הזכויות שמורות הרבליסט © ${date.getFullYear()}`} </p>
      </div>
    </div>
  )
}

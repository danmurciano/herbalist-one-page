import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Navbar, NavDropdown, Nav, FormControl, Form, Button } from "react-bootstrap";
import { Icon, Popup } from "semantic-ui-react";
import NewsletterModal from "./NewsletterModal";


function Header() {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);

  return (
    <>
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="navbar-sticky row" id="basic-navbar-nav">
        <div className="navbarCenter col-2" />

        <Nav className="navbarCenter navbarList col-8">
          <Nav.Link
            className={router.pathname === "/" ? "nav-item navTextActive" : "nav-item navText"}
            href="/">עמוד ראשי
          </Nav.Link>

          <Nav.Link
            className={router.pathname.startsWith("/clinic") ? "nav-item navTextActive" : "nav-item navText"}
            href="/clinic">קליניקה
          </Nav.Link>

          <Nav.Link
            className={router.pathname === "/courses" ? "nav-item navTextActive" : "nav-item navText"}
            href="/courses">קורסים
          </Nav.Link>

          <Nav.Link
            className={router.pathname.startsWith("/videos") ? "nav-item navTextActive" : "nav-item navText"}
            href="/videos">וידאו
          </Nav.Link>

          <Nav.Link
            target="_blank" rel="noopener noreferrer"
            className="nav-item navText"
            href="https://www.ranpharma.com/index.php?route=product/plants&filter_letter=bot_name&ppath=10">אינדקס צמחים
          </Nav.Link>
        </Nav>

        <Nav className="navbarCenter navbarList col-2">
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

      </Navbar.Collapse>
    </Navbar>
    </>

  );
}

export default Header;

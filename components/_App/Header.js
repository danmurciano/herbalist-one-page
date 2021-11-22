import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Navbar, NavDropdown, Nav, FormControl, Form } from "react-bootstrap";
import { Icon, Popup, Button } from "semantic-ui-react";
import NewsletterModal from "./NewsletterModal";
import { handleLogout } from "../../utils/auth";


function Header() {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);

  const user = {
    name: "דן מורסיאנו",
    email: "user.gmail.com"
  }


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

          <Nav.Link className="left-nav-item" href="https://www.facebook.com/yaniv.murciano" target="_blank" rel="noopener noreferrer">
            <Icon link name="facebook official" className="menu-icon" size="large" />
          </Nav.Link>

          <Popup
            className="account-popup"
            hoverable
            flowing
            basic
            position="bottom right"
            content= {
              <>
              <div class="account-popup-header row">
                <div class="col-3 account-popup-header-right"> <Icon name="user circle" size="huge" color="violet"/> </div>
                <div class="col-9 account-popup-header-left">
                  <p class="account-popup-name"> { user.name } </p>
                  <p class="account-popup-email"> { user.email } </p>
                </div>
              </div>
              <div class="account-popup-body">
                <a href="/account"> <p className="clear-button"> החשבון שלי </p> </a>
                <a href="/account/my-courses"> <p className="clear-button"> הקורסים שלי </p> </a>
                <a href="/account/purchases"> <p className="clear-button"> רכישות קודמות </p> </a>
                <p>
                <Button
                  className="clear-button"
                  onClick={handleLogout}
                  content="התנתק"
                />
                </p>
              </div>
              </>
            }
            trigger= {
              <Nav.Link className="left-nav-item" href="/account">
                <Icon link name="user" className="menu-icon" size="large" />
              </Nav.Link>
            }
          />
        </Nav>

        <NewsletterModal modal={modal} setModal={setModal} />

      </Navbar.Collapse>
    </Navbar>
    </>

  );
}

export default Header;

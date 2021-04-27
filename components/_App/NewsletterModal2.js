import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "semantic-ui-react";
import axios from "axios";
import MailchimpSubscribe from "react-mailchimp-subscribe";


export default function NewsletterModal({ modal, setModal }) {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);


  function handleChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  async function handleSubmit(event) {
    console.log(event.target.value);
    <MailchimpSubscribe url={process.env.MAILCHIMP_URL}/>
  };


  return (
    <>
      <Modal dialogClassName="newsletterModal" contentClassName="newsletterModal" show={modal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <div>
            <img class="modal-logo" src="/images/logo_small2.png" alt="" />
          </div>
          <p class="modal-text">הירשם לניוזלטר וקבל חדשות ועדכונים</p>

          <form action="https://cors-anywhere.herokuapp.com/gmail.us4.list-manage.com/subscribe/post?u=b699bbf9cc678fb04e8e65e0e&amp;id=e7ae30d453" method="post">
            <Form.Input name="email" type="email" placeholder="כתובת אימייל" value={email} onChange={handleChange} />
            <Button variant="dark" size="lg" block type="submit">
              שלח
            </Button>
          </form>

        </Modal.Body>
      </Modal>
    </>
  );
}

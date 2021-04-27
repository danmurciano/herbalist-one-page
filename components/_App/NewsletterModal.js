import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import MailchimpSubscribe from "react-mailchimp-subscribe";


export default function NewsletterModal({ modal, setModal }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [validated, setValidated] = useState(false);

  const handleCloseModal = () => setModal(false);

  function handleOpenModal() {
    setEmail("");
    setModal(true);
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setEmail(event.target.value);
  }



  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `https://cors-anywhere.herokuapp.com/${process.env.MAILCHIMP_URL}`;
      const config = {
        headers: {
          "Authorization": `${process.env.MAILCHIMP_KEY}`
        }
      }
      const data = JSON.stringify({
        body: {
          members: [
            {
              email_address: email,
              status: "subscribed",
            }
          ]
        }
      });
      const response = await axios.post(url, data, config);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <Modal dialogClassName="newsletterModal" contentClassName="newsletterModal" show={modal} onShow={handleOpenModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body">
          <div>
            <img class="modal-logo" src="/images/logo_small2.png" alt="" />
          </div>
          <p class="modal-text">הירשם לניוזלטר וקבל חדשות ועדכונים</p>

          <Form noValidate validated={validated} loading={loading} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control size="lg" type="email" placeholder="כתובת אימייל" value={email} onChange={handleChange} />
            </Form.Group>

            <Button variant="dark" size="lg" block type="submit" disabled={loading}>
              שלח
            </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

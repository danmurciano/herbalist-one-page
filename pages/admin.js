import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import CourseList from "../components/Admin/CourseList";
import CreateProduct from "../components/Admin/CreateProduct";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
// import catchErrors from "../../utils/catchErrors";
// import { redirectUser } from "../../utils/auth";
import { parseCookies } from "nookies";
import cookie from "js-cookie";

export default function Admin({ courses }) {
  const [createModal, setCreateModal] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  

  return (
    <div class="pageHome">
      <div class="banner-video">
        <div class="title-video-div">
          <p class="title-video"> קורסים </p>
        </div>
      </div>

      <div class="courses-list">
        <CourseList products={courses} />
      </div>

      <div class="new-product-button">
        <Button
          size="large"
          color="instagram"
          icon="plus"
          labelPosition="right"
          content="New Product"
          onClick={() => setCreateModal(true)}
        />
      </div>

      <Modal show={createModal === true} onHide={() => setCreateModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title as="h4" className="edit-product-title"> צור קורס חדש </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProduct />
        </Modal.Body>
      </Modal>

    </div>
  )
}

Admin.getInitialProps = async ctx => {
  // const { tokenAdmin } = parseCookies(ctx);
  // if (!tokenAdmin) {
  //   redirectUser(ctx, "/login");
  // }
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 15;
  const url = `${baseUrl}/api/courses_admin`;
  // const payload = { headers: { Authorization: tokenAdmin } };
  const response = await axios.get(url);
  return response.data;
};

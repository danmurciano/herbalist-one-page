import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Modal } from 'react-bootstrap';
import EditProduct from "./EditProduct";
import AddVideo from "./AddVideo";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import cookie from "js-cookie";


export default function CourseList({ products }) {
  const [editModal, setEditModal] = React.useState(false);
  const [videoModal, setVideoModal] = React.useState(false);
  const [hover, setHover] = React.useState("none");
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();



  function mapProductsToItems(products) {
    return products.map(product => (
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 productCard"
        onMouseEnter={() => setHover(product._id)}
        onMouseLeave={() => setHover("none")}
      >
        <a class="productLink" href={`/products/product?_id=${product._id}`}>
          <img src={product.imageURL} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-name styled-font-md">{product.name}</h5>
            <p class="card-desc styled-font-tn">{product.shortDesc}</p>
            <p class="card-price styled-font-md">
              {`${(product.price).toFixed(2)}` + " " + String.fromCharCode(8362) }
            </p>
          </div>
        </a>

        <Button color="instagram"
          className={hover !== product._id ? "add-to-cart-hidden" : "add-to-cart"}
          onClick={() => setEditModal(product._id)}
        >
          עריכה
          <Icon name="pencil"/>
        </Button>

        <Button color="google plus"
          className={hover !== product._id ? "add-to-cart-hidden" : "add-to-cart"}
          onClick={() => setVideoModal(product._id)}
        >
          הוסף וידאו
          <Icon name="video"/>
        </Button>

        <Modal size="lg" show={editModal === product._id} onHide={() => setEditModal(false)} >
          <Modal.Header closeButton>
            <Modal.Title as="h4" className="edit-product-title"> ערוך קורס </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProduct
              existingProduct={product}
              setEditModal={setEditModal}
            />
          </Modal.Body>
        </Modal>

        <Modal size="lg" show={videoModal === product._id} onHide={() => setVideoModal(false)} >
          <Modal.Header closeButton>
            <Modal.Title as="h4" className="edit-product-title"> הוסף וידאו </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddVideo
              course={product}
              setVideoModal={setVideoModal}
            />
          </Modal.Body>
        </Modal>
      </div>
    ));
  }


  return (
    <div class="row">
      {mapProductsToItems(products)}
    </div>
  );
}

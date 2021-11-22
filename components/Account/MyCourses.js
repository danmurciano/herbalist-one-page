import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import cookie from "js-cookie";


export default function MyCourses({ products }) {

  products = products.filter(product => product.status === "active");

  function mapProductsToItems(products) {
    return products.map(product => (
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 productCard">
        <a class="productLink" href={`/lectures/lecture?_id=${product._id}`}>
          <img src={product.imageURL} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-name styled-font-md">{product.name}</h5>
            <p class="card-desc styled-font-tn">{product.shortDesc}</p>
            <p class="card-price styled-font-md">
              {`${(product.price).toFixed(2)}` + " " + String.fromCharCode(8362) }
            </p>
          </div>
        </a>
      </div>
    ));
  }


  return (
    <div class="row">
      {mapProductsToItems(products)}
    </div>
  );
}

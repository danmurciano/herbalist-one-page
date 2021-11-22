import React from "react";
import { Form, Input, TextArea, Button, Image, Message, Header, Icon } from "semantic-ui-react";
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function EditProduct({ existingProduct, setEditModal }) {
  const [product, setProduct] = React.useState(existingProduct);
  const [imagePreview, setImagePreview] = React.useState(product.imageURL);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [error, setError] = React.useState("");
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false)};
  const handleOpen = () => {setOpen(true)};


  React.useEffect(() => {
    const isProduct = product.name !== "";
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);


  React.useEffect(() => {
    let timeout;

    if (success) {
      setTimeout(function() {
        setTimeout(function() { () => setSuccess(false)}, 100)
        location.reload()
      }, 500)
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success])


  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === "image") {
      setProduct(prevState => ({ ...prevState, image: files[0] }));
      setImagePreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }));
    }
  }


  async function handleImageUpload() {
    const data = new FormData();
    data.append("file", product.image);
    data.append("upload_preset", "herbalist");
    data.append("cloud_name", process.env.CLOUDINARY_CLOUD);
    data.append("folder", process.env.CLOUDINARY_FOLDER);
    const response = await axios.post(process.env.CLOUDINARY_URL, data);
    return response.data.url;
  }


  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      if (product.image) {
        product.imageURL = await handleImageUpload()
      };
      const url = `${baseUrl}/api/product`;
      product.price = parseFloat(product.price);
      const { _id, name, price, shortDesc, d1, d2, d3, d4, d5, status, imageURL } = product;
      const description = [d1, d2, d3, d4, d5]
      // const tokenAdmin = cookie.get("tokenAdmin");
      const payload = {
        params: { _id, name, price, shortDesc, description, status, imageURL },
        // headers: { Authorization: tokenAdmin }
      }
      const response = await axios.put(url, payload);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setSuccess(true);
      setLoading(false);
    }
  }



  return (
    <>
      <Form
        loading={loading}
        error={Boolean(error)}
        success={success}
        onSubmit={handleSubmit}
      >
        <Message error header="Oops!" content={error} />
        <Message
          success
          icon="check"
          header="Success!"
          content="Your product has been updated"
        />
        <Form.Group>
          <Form.Field
            control={Input}
            width="9"
            name="name"
            label="שם הקורס"
            placeholder="שם הקורס"
            value={product.name}
            onChange={handleChange}
            disabled={success}
          />
          <Form.Field
            control={Input}
            width="3"
            name="price"
            label="מחיר"
            placeholder="מחיר"
            min="0.00"
            step="0.01"
            type="number"
            value={product.price}
            onChange={handleChange}
            disabled={success}
          />

        <Form.Field
          control={Input}
          width="3"
          name="status"
          label="סטטוס"
          disabled={success}
        >
          <FormControl >
            <Select
              native
              labelId="status-label"
              id="status"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              name="status"
              value={product.status}
              onChange={handleChange}
              menuProps
            >
              <option value="active">פעיל</option>
              <option value="hidden">לא פעיל</option>
            </Select>
          </FormControl>
        </Form.Field>
        <Form.Field
          control={Input}
          width="5"
          name="image"
          type="file"
          label="תמונה"
          accept="image/*"
          content="Select Image"
          onChange={handleChange}
          disabled={success}
        />
        <Image src={imagePreview} centered size="tiny" />
      </Form.Group>



        <Form.Field
          control={TextArea}
          rows="4"
          name="shortDesc"
          label="תאור מקוצר"
          placeholder="תאור מקוצר"
          onChange={handleChange}
          value={product.shortDesc}
          disabled={success}
        />
        <Form.Field
          control={TextArea}
          rows="4"
          name="description1"
          label="תאור קורס"
          placeholder="תאור קורס"
          onChange={handleChange}
          value={product.d1}
          disabled={success}
        />
        <Form.Field
          control={TextArea}
          rows="4"
          name="description2"
          label=""
          placeholder=""
          onChange={handleChange}
          value={product.d2}
          disabled={success}
        />
        <Form.Field
          control={TextArea}
          rows="4"
          name="description3"
          label=""
          placeholder=""
          onChange={handleChange}
          value={product.d3}
          disabled={success}
        />
        <Form.Field
          control={TextArea}
          rows="4"
          name="description4"
          label=""
          placeholder=""
          onChange={handleChange}
          value={product.d4}
          disabled={success}
        />
        <Form.Field
          control={TextArea}
          rows="4"
          name="description5"
          label=""
          placeholder=""
          onChange={handleChange}
          value={product.d5}
          disabled={success}
        />


        <Form.Field
          control={Button}
          disabled={disabled || loading || success}
          fluid
          size="big"
          color="instagram"
          icon="pencil alternate"
          content="שלח"
          type="submit"
        />

      </Form>
    </>
  );
}

import React from "react";
import { Form, Input, TextArea, Button, Image, Message, Header, Icon } from "semantic-ui-react";
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import axios from "axios";
import cookie from "js-cookie";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import VideoIndex from "../../components/Lectures/VideoIndex"


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


const INITIAL_VIDEO = {
  name: "",
  runtime: "",
  video: ""
};


export default function AddVideo({ course }) {
  const [video, setVideo] = React.useState(INITIAL_VIDEO);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState("");
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false)};
  const handleOpen = () => {setOpen(true)};


  React.useEffect(() => {
    const isVideo = Object.values(video).every(el => Boolean(el));
    isVideo ? setDisabled(false) : setDisabled(true);
  }, [video]);


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
    if (name === "video") {
      setVideo(prevState => ({ ...prevState, video: files[0] }));
    } else {
      setVideo(prevState => ({ ...prevState, [name]: value }));
    }
  }


  async function handleVideoUpload() {
    const vimeoUrl = "https://api.vimeo.com/me/videos"
    const vimeoPayload = {
      headers: {
        Authorization: `bearer ${process.env.VIMEO_TOKEN}`,
        ContentType: "application/json",
        Accept: "application/vnd.vimeo.*+json;version=3.4"
      }
    }
    const response = await axios.post(vimeoUrl, vimeoPayload);
    return response.data.uri;
  }


  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      video.url = await handleVideoUpload();
      const url = `${baseUrl}/api/product`;
      const { name, runtime, Url } = video;
      // const tokenAdmin = cookie.get("tokenAdmin");
      const payload = {
        params: { name, runtime, Url },
        // headers: { Authorization: tokenAdmin }
      }
      const response = await axios.post(url, payload);
      // setProduct(INITIAL_PRODUCT);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setSuccess(true);
      setLoading(false);
    }
  }


  return (
    <>
      <VideoIndex videos={course.videos} />
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
          content="Your video has been added"
        />
        <Form.Group>
          <Form.Field
            control={Input}
            width="8"
            name="name"
            label="שם הוידאו"
            placeholder="שם הוידאו"
            value={video.name}
            onChange={handleChange}
            disabled={success}
          />
          <Form.Field
            control={Input}
            width="3"
            name="runtime"
            label="אורך"
            placeholder="אורך"
            min="1"
            step="1"
            type="number"
            value={video.runtime}
            onChange={handleChange}
            disabled={success}
          />

        <Form.Field
          control={Input}
          width="5"
          name="video"
          type="file"
          label="וידאו"
          accept="video/*"
          content="Select Video"
          onChange={handleChange}
          disabled={success}
        />
      </Form.Group>


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

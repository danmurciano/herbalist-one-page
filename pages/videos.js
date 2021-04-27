import React from "react";
import VideoIndex from "../components/Video/VideoIndex";
import VideoSection from "../components/Index/VideoSection";

export default function Video() {
  const selectedVideo = null;
  const [ video, setVideo ] = React.useState("");

  return (
    <div class="pageHome">
      <div class="banner-video">
        <div class="title-video-div">
          <p class="title-video"> וידאו </p>
        </div>
      </div>

      <div class="video-section">
        <div class="row">
          <VideoSection numberOfVideos={18} />
        </div>


      </div>


    </div>

  )
}

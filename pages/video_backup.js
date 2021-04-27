import React from "react";
import VideoIndex from "../components/Video/VideoIndex";
import VideoSection from "../components/Index/VideoSection";
import axios from "axios";
import baseUrl from "../utils/baseUrl";


export default function Video({ selectedVideo }) {

  return (
    <div class="page-video">

      <div class="banner-video">
        <div class="title-video-div">
          <p class="title-video-ind">{selectedVideo.title}</p>
        </div>
      </div>

      <div class="video-ind-main row">
        <div class="right-block col-xl-2"></div>
        <div class="video-top col-xl-7 col-lg-12">
          <div class="video-container">
            <iframe
              width="100%" height="100%"
              src={selectedVideo.url}
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen">
            </iframe>
          </div>
        </div>

        <div class="video-index col-xl-3 col-lg-6">
          <VideoIndex
            numberOfVideos={18}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>

    </div>
  );
}


Video.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/video`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);

  return { selectedVideo: response.data };
};

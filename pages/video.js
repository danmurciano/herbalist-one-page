import React, { useState, useEffect } from 'react';
import VideoIndex from "../components/Video/VideoIndex";
import VideoPlayer from "../components/Video/VideoPlayer";
import VideoSection from "../components/Index/VideoSection";
import axios from "axios";
import baseUrl from "../utils/baseUrl";


export default function Video({ selectedVideo }) {
  const smallScreen = isSmallScreen();
  console.log(smallScreen);

  return (
    <div class="page-video">
      <div class="banner-video">
        <div class="title-video-ind-div">
          <p class="title-video-ind">{selectedVideo.title}</p>
        </div>
      </div>

      {smallScreen ? (
        <div class="video-ind-main-small">
          <div class="video-top">
            <div class="video-container-top">
              <VideoPlayer selectedVideo={selectedVideo} />
            </div>
          </div>

          <div class="video-section">
            <VideoSection numberOfVideos={18} selectedVideo={selectedVideo} />
          </div>
        </div>

      ) : (

        <div class="video-ind-main row">
          <div class="video-index">
            <VideoIndex numberOfVideos={18} selectedVideo={selectedVideo} />
          </div>

          <div class="video-left">
            <div class="video-container-left">
              <VideoPlayer selectedVideo={selectedVideo} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

Video.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/video`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);

  return { selectedVideo: response.data };
};

function isSmallScreen() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize.width < 1280) {
    return true;
  } else {
    return false;
  }
}

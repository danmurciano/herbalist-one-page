import React, { useState, useEffect } from 'react';
import VideoIndex from "../../components/Courses/VideoIndex";
import VideoPlayer from "../../components/Courses/VideoPlayer";
import VideoSection from "../../components/Index/VideoSection";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";


export default function Course({ selectedVideo }) {
  const smallScreen = isSmallScreen();

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

  return (
    <div class="page-course pageHome">

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

        <div class="course-ind-main row">
          <div class="video-index col-3">
            <VideoIndex numberOfVideos={18} selectedVideo={selectedVideo} />
          </div>

          <div class="course-left col-9">
            <div class="course-container-left">
              <VideoPlayer selectedVideo={selectedVideo} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

Course.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/course`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { selectedVideo: response.data };
};

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import videos from "../../public/videoList.json";

export default function VideoSection({ numberOfVideos, selectedVideo }) {

  let videosSelection = videos.slice(0, numberOfVideos);

  if (selectedVideo) {
    videosSelection = videosSelection.filter(video => video._id !== selectedVideo._id);
  }

  function mapVideosToIndex(videos) {
    return videos.map(video => (

      <div class="col-md-4 col-sm-6 video-card">

        <div class="">
          <a href={`/videos/video?_id=${video._id}`}>
            <img
              id={videos.indexOf(video)}
              src={`/images/${video.image}.jpg`}
              alt="..."
              class="video-section-thumbnail"
            />
          </a>
        </div>

        <div class="video-section-title">
          <a class="video-section-title" href={`/videos/video?_id=${video._id}`}>
            <p
              id={videos.indexOf(video)}
            >
              {video.title}
            </p>
          </a>
        </div>

      </div>
    ));
  }

  return (
    <div class="video-section-row row">
      {mapVideosToIndex(videosSelection)}
    </div>
  );
}

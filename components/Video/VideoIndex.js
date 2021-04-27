import React, { useEffect, useState } from "react";
import videos from "../../public/videoList.json";

export default function VideoIndex({ selectedVideo }) {

  let currentIndex = videos;

  if (selectedVideo) {
    currentIndex = videos.filter(video => video._id !== selectedVideo._id);
  }

  function mapVideosToIndex(videos) {
    return videos.map(video => (

      <div class="index-row row">

        <div class="titles-col col-6">
          <a href={`/video?_id=${video._id}`}>
            <p
              id={videos.indexOf(video)}
              class="index-video-title"
            >
              {video.title}
            </p>
          </a>
        </div>

        <div class="thumbnails-col col-6">
          <a href={`/video?_id=${video._id}`}>
            <img
              id={videos.indexOf(video)}
              src={`/images/${video.image}.jpg`}
              alt="..."
              class="indexThumbnail"
            />
          </a>
        </div>

      </div>
    ));
  }

  return (
    <div class="photoIndexRow">
      {mapVideosToIndex(currentIndex)}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Icon } from 'semantic-ui-react';
import videos from "../../public/course1.json";

export default function VideoIndex({ selectedVideo, setSelectedVideo }) {

  function mapVideosToIndex(videos) {
    return videos.map(video => (
      <div onclick={setSelectedVideo(video._id)}>
        <tr class="index-row row">
          <div class="Col">
            <div class="row">
              <p id={videos.indexOf(video)} class="index-video-title">
                {video.title}
              </p>
            </div>
            <div class="index-video-length row">
              <p> {`${video.length} דקות`} <Icon name="play circle" /> </p>
            </div>
          </div>
        </tr>
      </div>
    ));
  }

  return (
    <Table hover >
      <tbody class="table">
        {mapVideosToIndex(videos)}
      </tbody>
    </Table>
  );
}

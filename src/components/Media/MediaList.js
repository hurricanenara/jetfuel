import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Media from "./Media/Media";
import "./MediaList.css";

const MediaList = ({ media }) => {
  return (
    <div className="media-list-container">
      {media.map((singleMedia, i) => {
        return (
          <div key={i} className="media-card">
            <Media mediaData={singleMedia} className="media" />
          </div>
        );
      })}
    </div>
  );
};

export default MediaList;

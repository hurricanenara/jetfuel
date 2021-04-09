import React from "react";
import Photo from "./Photo";
import Video from "./Video";

const Media = ({ mediaData }) => {
  return mediaData.media_type === "video" ? (
    <Video video={mediaData} />
  ) : (
    <Photo photo={mediaData} />
  );
};

export default Media;

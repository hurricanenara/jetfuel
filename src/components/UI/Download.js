import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Copy-Down.css";

const Download = ({ data }) => {
  const download = () => {
    window.open(data, "_blank");
    // window.location.href = data;
  };
  return (
    <FontAwesomeIcon
      onClick={download}
      className="interactive-icon"
      icon={faDownload}
    />
  );
};

export default Download;

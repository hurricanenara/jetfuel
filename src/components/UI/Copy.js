import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Copy-Down.css";

const Copy = ({ data }) => {
  return (
    <CopyToClipboard text={data}>
      <FontAwesomeIcon
        className="interactive-icon"
        icon={faLink}
        onClick={() => document.execCommand("copy")}
      />
    </CopyToClipboard>
  );
};

export default Copy;

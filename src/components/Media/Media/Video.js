import React from "react";
import Copy from "../../UI/Copy";
import Download from "../../UI/Download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Video.css";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {},
      rotateNeeded: false,
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    this.rotateImg = this.rotateImg.bind(this);
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: { height: img.offsetHeight, width: img.offsetWidth },
    });
    if (img.offsetWidth > img.offsetHeight) {
      this.setState({ rotateNeeded: true });
    }
  }

  rotateImg() {
    if (this.state.rotateNeeded) {
      return { transform: "rotate(90deg)" };
    }
  }
  render() {
    const { video } = this.props;
    return (
      <React.Fragment>
        {/* Landscape image rotation works but does not match size of other images */}
        <div className="video-container" style={this.rotateImg()}>
          <img
            onLoad={this.onImgLoad}
            src={video.cover_photo_url}
            alt="dark overlay of cover of video"
          />
        </div>
        <FontAwesomeIcon className="play-icon" icon={faPlay} />
        <div className="copy-down">
          <Copy data={video.tracking_link} />
          <Download data={video.download_url} />
        </div>
      </React.Fragment>
    );
  }
}
export default Video;

import React from "react";
import MediaList from "../Media/MediaList";
import "./Campaign.css";

const Campaign = ({ campaign }) => {
  return (
    <div className="root-container">
      <div className="campaign-container">
        <div className="campaign-section">
          <div className="campaign-icon-div">
            <img
              src={campaign.campaign_icon_url}
              alt={"logo for the campaign"}
            />
            <div className={"campaign-info"}>
              <span>{campaign.campaign_name}</span>
              <span>
                <strong>{campaign.pay_per_install}</strong> per install
              </span>
            </div>
          </div>
        </div>
        <MediaList media={campaign.medias} />
      </div>
    </div>
  );
};

export default Campaign;

import React from "react";
import Campaign from "../Campaign/Campaign";
// import Spinner from "../UI/Spinner";
import "./CampaignList.css";

class CampaignList extends React.Component {
  state = {
    campaigns: null,
    loading: true,
  };
  componentDidMount() {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ campaigns: res.campaigns, loading: false })
      );
  }
  render() {
    const { campaigns, loading } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="campaign-list-container">
          {campaigns.map((campaign) => {
            return <Campaign key={campaign.id} campaign={campaign} />;
          })}
        </div>
      );
    }
  }
}

export default CampaignList;

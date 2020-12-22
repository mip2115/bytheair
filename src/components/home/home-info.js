import React from "react";
import homeLogo from "../../assets/home-logo.svg";
import cartLogo from "../../assets/cart-logo.svg";
import droneLogo from "../../assets/drone-logo.svg";

const InfoCard = (props) => {
  const { label, text, icon } = props;
  return (
    <div className="info-card">
      <div className="info-card-icon-ctr">
        <img src={icon} />
      </div>

      <div className="info-card-label">{label}</div>
      <div className="info-card-text">{text}</div>
    </div>
  );
};

const HomeInfo = (props) => {
  return (
    <div className="home-info" id="home-info">
      <h3 id="how-it-works" className="home-info-header">How it works</h3>
      <div className="home-info-cards">
        <InfoCard
          icon={homeLogo}
          label="Enter an address"
          text="Enter your address to find nearby dispensaries."
        />
        <InfoCard
          icon={cartLogo}
          label="Choose products"
          text="Choose your favorite cannabis products for immediate delivery."
        />
        <InfoCard
          icon={droneLogo}
          label="Receive delivery"
          text="You'll be notified as soon as a drone arrives with your order.  Enjoy!"
        />
      </div>
      <h3 id="request-demo" className="home-info-header">Request a demo</h3>
      <p>
        To request a free demo of our system for your dispensary, please email us
        at <a className="home-info-email-address">sales@bytheair.com</a>.
      </p>
      <div className="home-info-demo" onClick={() => {window.location.href='mailto:sales@bytheair.com'}}>
        <a href="mailto:sales@bytheair.com">Request demo</a>
      </div>
    </div>
  );
};

export default HomeInfo;

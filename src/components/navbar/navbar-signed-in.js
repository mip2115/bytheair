import React from "react";
import Logo from "../../assets/drone-air-logo.png";
import menuIcon from "../../assets/menu-icon.png";

// TODO –
// convert to NavbarSignedIn + NavbarSignedOut.  For now there's no sign in.
const NavbarSignedIn = (props) => {
  return (
    <div className="navbar-signed-in">
      <div className="navbar-logo">
        <img src={Logo} />
      </div>

      <div className="navbar-tabs">
        <div className="navbar-tabs-hamburger">
          <img src={menuIcon} />
        </div>
        <div className="navbar-tabs-tab">
          <a href="#how-it-works">How it works</a>
        </div>
        <div className="navbar-tabs-tab">
          <a href="#request-demo">Request demo</a>
        </div>
        <div className="navbar-tabs-login">
          <a href="/login">Dispensary login</a>
        </div>
        {/* <div className="navbar-tabs-tab">Sign Up</div> */}
        {/* <div className="navbar-tabs-tab">Logout</div>
        <div className="navbar-tabs-profile">M.P</div> */}
      </div>
    </div>
  );
};

export default NavbarSignedIn;

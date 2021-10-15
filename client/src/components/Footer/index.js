import React from "react";
import { SocialIcon } from "react-social-icons";
import './style.css';

function Footer() {
  return (
    <div className="footer">
      <div className="donate">
        <button className="donate-btn" id="donate-button">Donate Here</button>
      </div>
      <div className="icon-logos">
        <SocialIcon url="https://github.com/bleakney/free-maps" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://twitter.com/" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://linkedin.com/"  style={{ height: 35, width: 35 }} />
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__center pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <h2
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer <span style={{color: 'pink'}}>Nazma Khatun Nishe</span>. All Rights Reserved.
      </h2>
    </div>
  );
}

export default Footer;

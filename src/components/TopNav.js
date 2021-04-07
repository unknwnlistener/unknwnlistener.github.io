import React from "react";
import "../styles/nav.css";

export const TopNav = () => {
  return (
    <div className="nav-container">
      <div className="nav-item stats">
        <ul className="item-list">
          <li>Wood</li>
          <li>Food</li>
          <li>Gold</li>
        </ul>
      </div>
      <div className="nav-item nav-logo" id="logo"></div>
      <div className="nav-item options">
        <ul className="item-list">
          <li>Bio</li>
          <li>About Me</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

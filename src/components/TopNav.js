import React from "react";
import "../styles/nav.css";

export const TopNav = () => {
  return (
    <div className="nav-container brown-bordered patterned-background-1">
      <div className="nav-item stats">
        <ul className="item-list">
          <li>Wood: 000</li>
          <li>Food: 000</li>
          <li>Gold: 000</li>
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

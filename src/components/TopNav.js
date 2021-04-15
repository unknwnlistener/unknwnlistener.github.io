import React from "react";
import "../styles/nav.css";

export const TopNav = ({ currentTab, updateTab }) => {
  let tabs = ["bio", "resume", "projects"];
  return (
    <div className="nav-container no-border">
      {/* <div className="nav-item nav-logo" id="logo"></div> */}
      <div className="nav-item options">
        <ul className="item-list">
          {tabs.map((tab, i) => {
            return (
              <li
                onClick={() => updateTab(tab)}
                className={tab === currentTab ? "active" : ""}
                key={i}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

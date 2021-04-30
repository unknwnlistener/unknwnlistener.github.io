import React from "react";
import "../styles/nav.css";

export const SideNav = ({ tabList, currentTab, setTab }) => {
  let activateTab = (tab) => {
    if (tab === currentTab) return;
    else {
      setTab(tab);
    }
  };
  return (
    <div className="nav-container">
      <div className="nav-container__logo"></div>
      <div className="nav-container__item">
        <ul className="item-list">
          <button
            onClick={() => activateTab(tabList[0])}
            className="item-list__button"
          >
            Who am I?
          </button>
          <button
            onClick={() => activateTab(tabList[1])}
            className="item-list__button"
          >
            What I've done
          </button>
          <button
            onClick={() => activateTab(tabList[2])}
            className="item-list__button"
          >
            What I'm doing
          </button>
          <button
            onClick={() => activateTab(tabList[3])}
            className="item-list__button"
          >
            Want to say hi?
          </button>
        </ul>
      </div>
      <footer className="footer">Coded by Me!</footer>
    </div>
  );
};

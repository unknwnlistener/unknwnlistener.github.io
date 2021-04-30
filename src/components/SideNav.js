import React from "react";
import "../styles/nav.css";

export const SideNav = () => {
  return (
    <div className="nav-container">
      <div className="nav-container__logo"></div>
      <div className="nav-container__item">
        <ul className="item-list">
          <button className="item-list__button">Who am I?</button>
          <button className="item-list__button">What I've done</button>
          <button className="item-list__button">What I'm doing</button>
          <button className="item-list__button">Want to say hi?</button>
        </ul>
      </div>
      <footer className="footer">Coded by Me!</footer>
    </div>
  );
};

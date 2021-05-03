import React from "react";
import "../styles/nav.css";
import self from "../assets/self.png";

export const SideNav = ({ tabList, currentTab, setTab }) => {
  let activateTab = (tab, e) => {
    console.log(e);
    if (tab === currentTab) return;
    else {
      setTab(tab);
    }
  };

  let getClassesButton = (i) => {
    let classList = ["item-list__button", "mono-font"];
    if (currentTab === tabList[i]) classList.unshift("active-button");
    return classList.join(" ");
  };
  return (
    <div className="nav-container">
      <div className="nav-container__logo">
        <img src={self} alt="Edited profile of Nischal" />
      </div>
      <div className="nav-container__item">
        <ul className="item-list">
          <button
            onClick={() => activateTab(tabList[0])}
            className={getClassesButton(0)}
          >
            Who am I?
          </button>
          <button
            onClick={() => activateTab(tabList[1])}
            className={getClassesButton(1)}
          >
            What I've done
          </button>
          <button
            onClick={() => activateTab(tabList[2])}
            className={getClassesButton(2)}
          >
            What I'm doing
          </button>
          <button
            onClick={() => activateTab(tabList[3])}
            className={getClassesButton(3)}
          >
            Want to say hi?
          </button>
        </ul>
      </div>
      <footer className="footer">Coded by Me!</footer>
    </div>
  );
};

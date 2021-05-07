import React from "react";
import "../styles/nav.css";
import self from "../assets/sketch_self.png";

export const SideNav = ({ tabTitles, tabList, currentTab, setTab }) => {
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
          {tabList.map((tab, index) => {
            return (
              <button
                onClick={() => activateTab(tab)}
                className={getClassesButton(index)}
              >
                {tabTitles[index]}
              </button>
            );
          })}
        </ul>
      </div>
      <footer className="footer">Coded by Me!</footer>
    </div>
  );
};

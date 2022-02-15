import React, { useState } from "react";
import "../styles/nav.css";
import selfImg from "../assets/sketch_self.png";

export const SideNav = ({ tabTitles, tabList, currentTab, setTab }) => {
  let [toggleClass, setToggleClass] = useState("");

  let activateTab = (tab, e) => {
    console.log(e);
    if (tab === currentTab) return;
    else {
      setToggleClass("");
      setTab(tab);
    }
  };

  let getClassesButton = (i) => {
    let classList = ["item-list__button", "mono-font"];
    if (currentTab === tabList[i]) classList.unshift("active-button");
    return classList.join(" ");
  };

  let toggleSideNav = () => {
    console.log("ToGGLINEG");
    if (toggleClass === "show-sidenav") {
      setToggleClass("");
    } else {
      setToggleClass("show-sidenav");
    }
  };
  return (
    <>
      <div className="top-nav" onClick={() => toggleSideNav()}>
        <span
          className={"menu-button" + (toggleClass !== "" ? " active" : "")}
        ></span>
      </div>
      <div className={"nav-container " + toggleClass}>
        <div className="nav-container__logo">
          <img src={selfImg} alt="Edited profile of Nischal" />
        </div>
        <div className="nav-container__item">
          <ul className="item-list">
            {tabList.map((tab, index) => {
              return (
                <button
                  onClick={() => activateTab(tab)}
                  className={getClassesButton(index)}
                  key={index}
                >
                  {tabTitles[index]}
                </button>
              );
            })}
          </ul>
        </div>
        <footer className="footer">
          <div className="social-links">
            <a
              target="_"
              rel="noreferrer"
              href="https://github.com/unknwnlistener"
            >
              github
            </a>
            <span className="spacer">|</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/nischalabraham"
            >
              linkedin
            </a>
          </div>
          <div className="credits">Built by Nischal</div>
        </footer>
      </div>
    </>
  );
};

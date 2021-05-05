import React, { useState } from "react";
import "../styles/main.css";
import { SideNav } from "./SideNav";
import { AboutMe } from "./AboutMe";
import { Timeline } from "./Timeline";
// import { Projects } from "./Projects";
import { WIP } from "./WIP";

export const MainContainer = () => {
  let tabs = ["about", "timeline", "projects", "contact"];
  let tabTitles = ["About Me", "Timeline", "Projects", "Contact"];

  let [currentTab, setTab] = useState(tabs[0]);
  let [darkToggle, setDarkToggle] = useState(false);

  let contentArea;
  if (currentTab === tabs[0]) {
    contentArea = <AboutMe />;
  } else if (currentTab === tabs[1]) {
    contentArea = <Timeline />;
  } else {
    contentArea = <WIP />;
  }

  let toggleDark = () => {
    console.log("Dark toggle");
    setDarkToggle(!darkToggle);
  };

  return (
    <div className={`main-container ${darkToggle ? "dark-mode" : ""}`}>
      <label className="toggle-control">
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => toggleDark()}
        />
        <span className="control"></span>
      </label>
      <SideNav
        tabTitles={tabTitles}
        tabList={tabs}
        currentTab={currentTab}
        setTab={setTab}
      ></SideNav>
      {contentArea}
    </div>
  );
};

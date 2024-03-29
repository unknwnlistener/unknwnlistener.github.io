import React, { useState } from "react";
import "../styles/main.css";
import { SideNav } from "./SideNav";
import { AboutMe } from "./AboutMe";
import { Timeline } from "./Timeline";
import { Projects } from "./Projects";
import { ContactForm } from "./Contact";
import { WIP } from "./WIP";

export const MainContainer = () => {
  let tabs = ["about", "timeline", "projects", "contact"];
  let tabTitles = ["About Me", "Timeline", "Projects", "Contact"];

  let [currentTab, setTab] = useState(tabs[0]);
  let [darkToggle, setDarkToggle] = useState(false);

  let contentArea;
  switch (currentTab) {
    case tabs[0]:
      contentArea = <AboutMe />;
      break;
    case tabs[1]:
      contentArea = <Timeline />;
      break;
    case tabs[2]:
      contentArea = <Projects />;
      break;
    case tabs[3]:
      contentArea = <ContactForm />;
      break;
    default:
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

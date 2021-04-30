import React, { useState } from "react";
import "../styles/main.css";
import { SideNav } from "./SideNav";
import { AboutMe } from "./AboutMe";
import { Experience } from "./Timeline";
// import { Projects } from "./Projects";
import { WIP } from "./WIP";

export const MainContainer = () => {
  let tabs = ["about", "experience", "projects"];

  let [currentTab, setTab] = useState(tabs[0]);

  let contentArea;
  if (currentTab === tabs[0]) {
    contentArea = <AboutMe />;
  } else if (currentTab === tabs[1]) {
    contentArea = <Experience />;
  } else {
    contentArea = <WIP />;
  }

  return (
    <div className="main-container">
      <SideNav tabList={tabs} currentTab={currentTab} setTab={setTab}></SideNav>
      {contentArea}
    </div>
  );
};

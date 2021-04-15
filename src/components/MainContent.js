import React, { useState } from "react";
import "../styles/main.css";
import { TopNav } from "./TopNav";
import { Shelves } from "./Shelves";

export const MainContent = () => {
  let [tab, setTab] = useState("resume");
  return (
    <div className="main-content">
      <TopNav currentTab={tab} updateTab={setTab}></TopNav>
      <Shelves currentTab={tab}></Shelves>
    </div>
  );
};

import React from "react";
import "../styles/main.css";
import { TopNav } from "./TopNav";

export const MainContent = () => {
  return (
    <React.Fragment>
      <TopNav></TopNav>
      <div className="main-content"></div>
    </React.Fragment>
  );
};

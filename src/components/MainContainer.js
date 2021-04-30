import React from "react";
import "../styles/main.css";
import { SideNav } from "./SideNav";
import { AboutMe } from "./AboutMe";

export const MainContainer = () => {
  return (
    <div className="main-container">
      <SideNav></SideNav>
      <AboutMe></AboutMe>
    </div>
  );
};

import React from "react";
import "../styles/main.css";
import { TopNav } from "./TopNav";
import { Shelves } from "./Shelves";

export const MainContent = () => {
  return (
    <div className="main-content">
      <TopNav></TopNav>
      <Shelves></Shelves>
    </div>
  );
};

import React from "react";
import "../styles/main.css";
import { TopNav } from "./TopNav";
import { ControlCenter } from "./ControlCenter";
import { PlayArea } from "./PlayArea";

export const MainContent = () => {
  return (
    <div className="main-content">
      <TopNav></TopNav>
      <PlayArea></PlayArea>
      <ControlCenter></ControlCenter>
    </div>
  );
};

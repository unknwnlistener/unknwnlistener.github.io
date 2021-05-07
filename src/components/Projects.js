import React from "react";
import "../styles/content.css";
import "../styles/projects.css";
import { ImageContainer } from "./ImageContainer";

export const Projects = () => {
  let imageUrl =
    "https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1788&q=80";
  let projInfo = [
    { image: imageUrl, title: "placeholder project 1", desc: "Lorem ipsum" },
    { image: imageUrl, title: "placeholder project 2", desc: "Lorem ipsum" },
    { image: imageUrl, title: "placeholder project 3", desc: "Lorem ipsum" },
    { image: imageUrl, title: "placeholder project 4", desc: "Lorem ipsum" },
  ];
  return (
    <div className="content-container spacing">
      <div className="content projects">
        <h1>What I'm doing</h1>
        <section className="content__section">
          {projInfo.map((proj, index) => (
            <ImageContainer
              source={proj.image}
              alt={proj.title}
              desc={proj.desc}
            ></ImageContainer>
          ))}
        </section>
      </div>
    </div>
  );
};

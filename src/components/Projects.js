import React from "react";
import "../styles/content.css";
import "../styles/projects.css";
import { ImageContainer } from "./ImageContainer";

import waImg from "../assets/WA-reader.png";
import webImg from "../assets/PersonalWeb-screen.jpg";
import chuckImg from "../assets/ChuckNorrisJokes.png";

export const Projects = () => {
  // let imageUrl =
  //   "https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1788&q=80";
  let projInfo = [
    {
      image: waImg,
      altText: "screenshot of Whatsapp Conversation Reader",
      desc: "Web Application to read exported whatsapp conversation in a friendly format",
    },
    {
      image: webImg,
      altText: "screenshot of Personal Website",
      desc: "This website you're on right now! To showcase and summarize who I am and what I've done",
    },
    {
      image: chuckImg,
      altText: "screenshot of Chuck Norris Joke Generator",
      desc: "One of the first React projects I took up with Florin Pop's community to learn React.js",
    },
  ];
  return (
    <div className="content-container spacing">
      <div className="content projects">
        <h1>What I'm doing</h1>
        <section className="content__section">
          {projInfo.map((proj, index) => (
            <ImageContainer
              source={proj.image}
              alt={proj.altText}
              desc={proj.desc}
            ></ImageContainer>
          ))}
        </section>
      </div>
    </div>
  );
};

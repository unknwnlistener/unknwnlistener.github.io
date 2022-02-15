import React from "react";
import "../styles/content.css";
import "../styles/projects.css";
import { ImageContainer } from "./ImageContainer";

import waImg from "../assets/WA-reader.png";
import webImg from "../assets/PersonalWeb-screen.jpg";
import chuckImg from "../assets/ChuckNorrisJokes.png";
import fairviewImg from "../assets/FairviewHallChurch.png";

export const Projects = () => {
  // let imageUrl =
  //   "https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1788&q=80";
  let projInfo = [
    {
      image: waImg,
      altText: "screenshot of Whatsapp Conversation Reader",
      desc: "Web Application to read exported whatsapp conversation in a friendly format",
      link: "https://bee-wa-reader.netlify.app/",
      title: "WhatsApp Chat Reader",
      github: "https://github.com/unknwnlistener/whatsapp-reader",
    },
    {
      image: webImg,
      altText: "screenshot of Portfolio Website",
      desc: "This website you're on right now! To showcase and summarize who I am and what I've done",
      link: "#",
      title: "Portfolio Website",
      github: "https://github.com/unknwnlistener/unknwnlistener.github.io",
    },
    {
      image: chuckImg,
      altText: "screenshot of Chuck Norris Joke Generator",
      desc: "One of the first React projects I took up with Florin Pop's community to learn React.js",
      link: "https://chuck-norris-joker.netlify.app/",
      title: "Chuck Norris Joke Generator",
      github: "https://github.com/unknwnlistener/chuck-norris-joke-generator",
    },
    {
      image: fairviewImg,
      altText: "screenshot of Fairview Hall Church landing page",
      desc: "A Wordpress website built for Fairview Hall Church in Dublin",
      link: "https://fairviewhall.ie/",
      title: "Fairview Hall Church website",
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
              link={proj.link}
              title={proj.title}
              github={proj.github}
            ></ImageContainer>
          ))}
        </section>
      </div>
    </div>
  );
};

import React from "react";
import "../styles/content.css";
import "../styles/about.css";
import resume from "../assets/Resume_Nischal_Abraham.pdf";

export const AboutMe = () => {
  return (
    <div className="content-container spacing">
      <section className="content">
        <h1>
          Hi there!
          <br /> My name is Nischal Abraham
        </h1>
        <p className="large-p">
          I have a lot of studying done but perhaps not a lot to show for it.
          I've discovered there is always so much more to learn and being static
          is the same as moving backwards. I'm still quite new to a lot of the
          dev community and OSS but slowly finding ways to engage and interact.
          If you find any of my work interesting please connect with me, I'd
          love to talk!
          <br />
        </p>
        <p>
          This site is still a work in progress. Do come back and check in from
          time to time and things may look different 😊.
        </p>
        <a href={resume} target="_blank" rel="noreferrer" className="resume">
          <button>Resume</button>
        </a>
      </section>
    </div>
  );
};

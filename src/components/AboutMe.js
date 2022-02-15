import React from "react";
import "../styles/content.css";

export const AboutMe = () => {
  return (
    <div className="content-container spacing">
      <div className="content">
        <h1>Who am I?</h1>
        <p className="large-p">
          Hi my name is <span className="highlight">Nischal Abraham</span>. I'd
          call myself overeducated but there is always so much more to learn!
          I'm still quite new to a lot of the dev community but slowly finding
          ways to engage and interact. If you find my work interesting then
          connect with me, I'd love to talk!
        </p>
      </div>
    </div>
  );
};

import React from "react";
import "../styles/content.css";
import "../styles/timeline.css";

import { TimelineContent } from "./TimelineContent";

export const Experience = () => {
  return (
    <div className="content-container">
      <div className="content">
        <h1>Experience</h1>
        <section className="content__section">
          <div className="timeline-path"></div>
          <TimelineContent
            duration={"July 2017 - August 2019"}
            title={"Media.net"}
            subtitle={"Web Application Developer"}
            description={`Worked with Perform Media (www.performmedia.com): A Company to
                Publisher advertising platform that connected US companies such
                as Yahoo/MSN, Forbes, Reuters,etc to Publishers.`}
          ></TimelineContent>
        </section>
      </div>
    </div>
  );
};

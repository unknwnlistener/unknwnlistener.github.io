import React from "react";
import "../styles/content.css";
import "../styles/timeline.css";

import { TimelineContent } from "./TimelineContent";

export const Timeline = () => {
  return (
    <div className="content-container spacing">
      <div className="content">
        <h1>What I've done</h1>
        <section className="content__section timeline bottom-pad-2">
          <div className="left-elements">
            <TimelineContent
              duration={"November 2020 - Present"}
              location={"IE"}
              title={"Postal Bible School"}
              subtitle={"Office Administration"}
              link={"https://www.postalbibleschool.ie/"}
              linkDesc={"Postal Bible School|Website"}
            ></TimelineContent>
            <TimelineContent
              duration={"July 2017 - August 2019"}
              location={"IN"}
              title={"Media.net"}
              subtitle={"Web Application Developer"}
              description={`Worked with Perform Media (www.performmedia.com): A Company to
                Publisher advertising platform that connected US companies such
                as Yahoo/MSN, Forbes, Reuters,etc to Publishers.`}
            ></TimelineContent>
          </div>
          <span className="timeline-path"></span>
          <div className="right-elements">
            <TimelineContent
              duration={"September 2019 - July 2020"}
              location={"IE"}
              title={"National University of Ireland, Maynooth"}
              subtitle={"Masters in Computer Science"}
            ></TimelineContent>
            <TimelineContent
              duration={"September 2013 - May 2017"}
              location={"IN"}
              title={"Don Bosco Institute of Technology, Mumbai"}
              subtitle={"Bachelors in Engineering, Computer Engineering"}
            ></TimelineContent>
          </div>
        </section>
      </div>
    </div>
  );
};

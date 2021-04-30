import React from "react";
import "../styles/content.css";
import "../styles/timeline.css";

export const Experience = () => {
  return (
    <div className="content-container">
      <section className="content-container__section">
        <h1>Experience</h1>
        <div className="section__duration">July 2017 - August 2019</div>
        <div className="section__company">Media.net</div>
        <div className="section__position">Web Application Developer</div>
        <div className="section__description">
          <p>
            Perform Media (www.performmedia.com): Company to Publisher
            advertising platform connecting US clients Yahoo/MSN, Forbes,
            Reuters to Advertisers
          </p>
          <ul>
            <li>
              Improved client interactions by saving time spent by 40%, through
              the development for excel and CSV file import feature in parsing
              Ad Campaign information for storage in system.
            </li>
            <li>
              Reduced collaborative errors for the front-end team by 20% and
              updated Continuous Integration(CI) by redesigning version control
              workflow from Apache SVN to Git workflow.
            </li>
            <li>
              Enhanced personal knowledge base for Digital Marketing through
              development for Search Engine Optimization(SEO), Google AdWords
              and AdSense.
            </li>
            <li>
              Leveraged knowledge in SVN, Git, Agile development, programmed in
              HTML/CSS/JS, Angular and React using VS Code, C# using ASP.Net MVC
              in Visual Studio(VS) 2015.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

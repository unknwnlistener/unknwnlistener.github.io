import React, { useState } from "react";
import { ContentDescription } from "./ContentDescription";
import "../styles/shelf.css";

export const Shelves = () => {
  const [active, setActive] = useState([false, false, false]);
  // const sections = ["about", "experience", "education"];

  let handleClick = (section) => {
    let current = [...active];
    current[section] = !current[section];

    setActive(current);
  };
  return (
    <div className="library">
      <div
        id="about"
        className={(active[0] ? "activate" : "") + " section center-text"}
      >
        <h1 onClick={() => handleClick(0)}>About Me</h1>
        <p>
          Hello! My name is <span className="highlight">Nischal Abraham</span>.
          I'm a web developer
        </p>
      </div>
      <div
        id="experience"
        className={(active[1] ? "activate" : "") + " section"}
      >
        <h1 onClick={() => handleClick(1)}>Experience</h1>
        <ContentDescription
          collegeName="Media.net"
          year="July 2017 - August 2019"
          place="Mumbai, India"
          degree="Web Application Developer"
          desc={[
            "Perform Media (www.performmedia.com): Company to Publisher advertising platform connecting clients Yahoo/MSN, Forbes, Reuters to Advertisers",
            "Improved client interactions by saving time spent by 40%, through the development for excel and CSV file import feature in parsing Ad Campaign information for storage in system.",
            "Reduced collaborative errors for the front-end team by 20% and updated Continuous Integration(CI) by redesigning version control workflow from Apache SVN to Git workflow.",
            "Enhanced personal knowledge base for Digital Marketing through development for Search Engine Optimization(SEO), Google AdWords and AdSense.",
            "Leveraged knowledge in SVN, Git, Agile development, programmed in HTML/CSS/JS, Angular and React using VS Code, C# using ASP.Net MVC in Visual Studio(VS) 2015.",
          ]}
        ></ContentDescription>
      </div>
      <div
        id="education"
        className={(active[2] ? "activate" : "") + " section"}
      >
        <h1 onClick={() => handleClick(2)}>Education</h1>
        <ContentDescription
          collegeName="National University of Ireland Maynooth"
          year="September 2019 - July 2020"
          place="Maynooth, Ireland"
          degree="MSc in Computer Science (Software Engineering)"
          desc={[
            "Graduated with 1st Class Honours",
            "Coursework: Object-Oriented Programming (Java), Spatial Databases, Software Testing (Java), Interaction and User Interface Design, Internet Solutions.",
            "Projects (additional details below): a. Dissertation on “Quantifying Personalisation Bias in Search”. b. Application for “Linguistic Management of English Clauses”.",
          ]}
        ></ContentDescription>
        <ContentDescription
          collegeName="Don Bosco Institute of Technology"
          year="May 2019"
          place="Mumbai, India"
          degree="Bachelor of Engineering, Computer Engineering"
          desc={[
            " CGPA: 7.24 / 10.0.",
            "Project and paper published on “Ad-Hoc Network for File Sharing”.",
            "Web based HTML5 game creation and live hosting for over 500 students across the country.",
            "Organized multiple open workshops on Web Development (HTML, CSS, PHP), UI/UX Design (Photoshop) and Version Control (Git) teaching an average of 40 students.",
          ]}
        ></ContentDescription>
      </div>
    </div>
  );
};

import React from "react";

export const ImageContainer = ({ source, alt, desc, link, title, github }) => {
  return (
    <div className="project-container">
      <div class="image-container">
        <img src={source} alt={alt} />
        <span class="image__desc">{desc}</span>
      </div>

      <h3 className="project__title">{title}</h3>
      <div className="project__links">
        {link && (
          <p>
            <a href={link} target="_blank" rel="noreferrer">
              Site
            </a>
          </p>
        )}
        {github && (
          <p>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

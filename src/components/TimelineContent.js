import React from "react";
import "../styles/timeline.css";

export const TimelineContent = ({
  duration,
  title,
  subtitle,
  description,
  link,
  linkDesc,
  location,
}) => {
  return (
    <div className="timeline-content">
      <span className="location">{location}</span>
      <div className="duration">{duration}</div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <a href={link} className="link">
        {linkDesc}
      </a>
      <div className="description">
        <small>{description}</small>
      </div>
    </div>
  );
};

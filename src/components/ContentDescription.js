import React from "react";
import "../styles/college.css";

export const ContentDescription = ({
  collegeName,
  year,
  place,
  degree,
  desc,
}) => {
  return (
    <div className="college">
      <div class="time-and-place">
        <div className="when">{year}</div>
        <div className="where">{place}</div>
      </div>
      <div className="what">
        <span className="degree">{degree}</span>,{" "}
        <span className="college-name">{collegeName}</span>
      </div>
      <div className="what more">{desc}</div>
    </div>
  );
};

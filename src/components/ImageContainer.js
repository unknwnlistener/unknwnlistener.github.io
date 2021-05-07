import React from "react";

export const ImageContainer = ({ source, alt, desc }) => {
  return (
    <div class="image-container">
      <img src={source} alt={alt} />
      <span class="image__desc">{desc}</span>
    </div>
  );
};

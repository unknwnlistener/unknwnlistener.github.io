import React from "react";
import "../styles/section.css";

export const ControlCenter = () => {
  return (
    <div className="section-container">
      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        inventore explicabo adipisci quam reiciendis sed excepturi non? Laborum
        aliquam reprehenderit tenetur reiciendis, maiores, dicta ut ipsa,
        praesentium veritatis eos saepe.
      </div>
      <img
        className="image desc-image"
        src="/logo192.png"
        alt="Stock for now"
      />
      {/* default path is to public folder  */}
    </div>
  );
};

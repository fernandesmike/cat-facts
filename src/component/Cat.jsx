import React from "react";
import "../stylesheets/base-reset.css";

const Cat = ({ catName }) => {
  return (
    <section>
      <div className="image"></div>
      <div className="details">
        <p>by {catName}</p>
        <p>A cat</p>
      </div>
    </section>
  );
};

export default Cat;

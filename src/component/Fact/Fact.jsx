import React from "react";
import "../../stylesheets/base-reset.css";

const Fact = ({ catFact }) => {
  return (
    <section>
      <p>{catFact}</p>
    </section>
  );
};

export default Fact;

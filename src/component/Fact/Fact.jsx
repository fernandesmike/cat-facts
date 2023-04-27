import React from "react";

// Global CSS
import "../../stylesheets/base-reset.css";
import "../../stylesheets/base-style.css";

// CSS Modules
import style from "./fact.module.css";

const Fact = ({ catFact }) => {
  return (
    <section className={style.section}>
      <p className={style.p}>{catFact}</p>
    </section>
  );
};

export default Fact;

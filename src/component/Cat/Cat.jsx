import React from "react";

// Global CSS
import "../../stylesheets/base-reset.css";
import "../../stylesheets/base-style.css";

// CSS Modules
import style from "./cat.module.css";

import CatPhoto from "../../assets/angry-cat.jpeg";

const Cat = ({ catName }) => {
  return (
    <section className={style.section}>
      <img
        src={CatPhoto}
        alt="Photo of an angry cat who said the current fact"
        className={style.img}
      />
      <div className="details">
        <p className={style["cat-name"]}>by {catName}</p>
        <p className={style.secondary}>A "friendly" cat</p>
      </div>
    </section>
  );
};

export default Cat;

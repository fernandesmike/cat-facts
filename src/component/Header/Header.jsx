import React from "react";

// Global CSS
import "../../stylesheets/base-reset.css";
import "../../stylesheets/base-style.css";

// CSS Modules
import style from "./header.module.css";

// Assets
import CatLogo from "../../assets/cat-gif.gif";

const Header = () => {
  return (
    <section className={style.section}>
      <img src={CatLogo} alt="A cat logo" className={style["cat-logo"]} />
      <div className="content">
        <h1 className={style.h1}>Random cat facts</h1>
        <p className={style.p}>said by an actual cat</p>
      </div>
    </section>
  );
};

export default Header;

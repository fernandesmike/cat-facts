import React from "react";
import { Link } from "react-router-dom";

// Global CSS
import "../../stylesheets/base-reset.css";
import "../../stylesheets/base-style.css";

// CSS Modules
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.p}>
        Coded and designed with ❤️ by{" "}
        <a href="https://dribbble.com/mikeandrew_30" className={style.a}>
          Mike Andrew
        </a>
      </p>
    </footer>
  );
};

export default Footer;

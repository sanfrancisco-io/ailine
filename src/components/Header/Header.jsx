import React from "react";
import style from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <header>
          <h2>AILINE</h2>
          <a href="#">Заказать сейчас</a>
        </header>
      </div>
    </div>
  );
};

export default Header;

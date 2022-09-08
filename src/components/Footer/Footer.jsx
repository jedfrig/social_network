import React from "react";
import "../../App.css";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <ul>
        <li>Конфеденційність</li>
        <li>Умови</li>
        <li>Реклама</li>
        <li>Файли Cookie</li>
        <li>Вибір реклами</li>
        <li>Більше</li>
      </ul>
    </div>
  );
};

export default Footer;

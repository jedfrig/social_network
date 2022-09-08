import React from "react";
import "../../App.css";
import s from "./Header.module.css";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
// import pidoras from "./images/pid.jpg";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://cdn-icons-png.flaticon.com/512/87/87413.png" alt="" />
    </header>
  );
};

export default Header;

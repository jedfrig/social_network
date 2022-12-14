/* eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItems.module.css";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.user}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? s.active : undefined)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;

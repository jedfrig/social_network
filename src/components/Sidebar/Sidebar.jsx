import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.active : undefined)}
        >
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;

/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.user}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let usersData = [
    {
      id: 1,
      name: "Artem",
    },
    {
      id: 2,
      name: "Nastya",
    },
    {
      id: 3,
      name: "Egor",
    },
    {
      id: 4,
      name: "Nester",
    },
    {
      id: 5,
      name: "Sveta",
    },
  ];
  let messages = [
    {
      message: "Hi",
    },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.users}>
        <DialogItem name={usersData[0].name} id={usersData[0].id} />
        <DialogItem name={usersData[1].name} id={usersData[1].id} />
        <DialogItem name={usersData[2].name} id={usersData[2].id} />
        <DialogItem name={usersData[3].name} id={usersData[4].id} />
        <DialogItem name={usersData[4].name} id={usersData[4].id} />
      </div>
      <div className={s.messages}>
        <MessageItem message="Hi" />
        <MessageItem message="How are you?" />
        <MessageItem message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;

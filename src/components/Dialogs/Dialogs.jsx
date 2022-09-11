/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

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

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let users = [
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
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How are you?",
    },
    {
      id: 3,
      message: "Yo",
    },
    {
      id: 4,
      message: "Push",
    },
    {
      id: 5,
      message: "Punch",
    },
  ];

  let messageElements = messages.map((m) => (
    <MessageItem message={m.message} id={m.id} />
  ));

  let dialogElements = users.map((d) => <DialogItem name={d.name} id={d.id} />);
  return (
    <div className={s.dialogs}>
      <div className={s.users}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;

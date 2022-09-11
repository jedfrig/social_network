import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      {/* eslint-disable*/}

      <img src="https://www.blast.hk/attachments/64804/" alt="" />

      <span>{props.post}</span>
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;

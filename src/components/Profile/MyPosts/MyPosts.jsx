import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h3>Add post</h3>
      <div>
        <textarea name=""></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.myPosts}>My Posts</div>
      <Post message="Hi, how are you?" />
      <Post message="It's my first post" />
    </div>
  );
};

export default MyPosts;

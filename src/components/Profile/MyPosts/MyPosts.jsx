import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  {
    id: 1,
    post: "Hi, how are you?",
    likesCount: 12,
  },
  {
    id: 2,
    post: "How are you?",
    likesCount: 12,
  },
  {
    id: 3,
    post: "It's my first post",
    likesCount: 1,
  },
  {
    id: 4,
    post: "Yo",
    likesCount: 9,
  },
  {
    id: 5,
    post: "Yo",
    likesCount: 5,
  },
];

let postElements = posts.map((p, i) => (
  <Post key={i} post={p.post} likesCount={p.likesCount} />
));

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
      <div className={s.currentPosts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;

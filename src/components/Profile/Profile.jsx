import React from "react";
import "../../App.css";
import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Content() {
  return (
    <div>
      <ProfileHeader />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Content;

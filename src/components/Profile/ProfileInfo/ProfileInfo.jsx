/* eslint-disable */
import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.avatar}>
        <img
          src="https://scontent.fiev15-1.fna.fbcdn.net/v/t31.18172-8/16403304_1390407011023709_8307570604510792624_o.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_ohc=8TNKCUNOdyAAX-Z6D1n&_nc_ht=scontent.fiev15-1.fna&oh=00_AT-Vo2pU64UUr4KhMOF2qMredE1PNFbfzP_LKPTnZItcqg&oe=63329F11"
          alt=""
        />
      </div>
      <div className={s.profileInfoDetails}>
        <div className={s.name__surname}>Artem Hunchenko</div>
        <p>
          <div>Date of birth: 14 march</div>
          <div>City: Kyiv</div>
          <div>
            Education: KNURE (Khariv National University of Raidoelectronics)
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;

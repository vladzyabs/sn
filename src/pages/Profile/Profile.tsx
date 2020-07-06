import React from "react";
import UserInfo from "./UserInfo";
import style from "./Profile.module.scss";
import MyPosts from "./MyPosts";

type PropsProfileType = {}

function Profile(props: PropsProfileType) {
    return (
        <div className={style.profile}>

            <UserInfo/>

            <MyPosts/>

        </div>
    )
}

export default Profile
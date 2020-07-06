import React from "react";
import UserInfo from "./UserInfo";
import style from "./Profile.module.scss"
import {ProfileType} from "../../redux/StoreTypes";
import MyPostsContainer from "./MyPostsContaner";

type PropsProfileType = {
    profileData: ProfileType
}

function Profile(props: PropsProfileType) {
    return (
        <div className={style.profile}>

            <UserInfo/>
            
            <MyPostsContainer />

        </div>
    )
}

export default Profile
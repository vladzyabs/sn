import React from "react";
import UserInfo from "./UserInfo";
import MyPosts from "./MyPosts";
import style from "./Profile.module.scss"
import {ProfileType} from "../../redux/StoreTypes";

type PropsProfileType = {
    profileData: ProfileType
    dispatch: any
}

function Profile(props: PropsProfileType) {
    return (
        <div className={style.profile}>

            <UserInfo/>

            <MyPosts posts={props.profileData.posts}
                     newPosts={props.profileData.newPosts}
                     dispatch={props.dispatch}/>

        </div>
    )
}

export default Profile
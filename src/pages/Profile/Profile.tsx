import React from "react";
import UserInfo from "./UserInfo";
import style from "./Profile.module.scss";
import MyPosts from "./MyPosts";
import {ProfileInfoType} from "../../redux/profilePage/profileType";
import Preloader from "../../components/common/Preloader/Preloader";

type PropsProfileType = {
    posts: any
    newPosts: any
    status: string
    updateStatus: (status: string) => void
    profileInfo: ProfileInfoType
    addPost: () => void
    inputNewPost: (value: string) => void
    addLike: (id: string) => void
}

function Profile(props: PropsProfileType) {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div className={style.profile}>

            <UserInfo userInfo={props.profileInfo}
                      status={props.status}
                      updateStatus={props.updateStatus}/>

            <MyPosts posts={props.posts}
                     newPosts={props.newPosts}
                     addPost={props.addPost}
                     inputNewPost={props.inputNewPost}
                     addLike={props.addLike}/>

        </div>
    )
}

export default Profile

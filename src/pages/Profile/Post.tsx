import React from "react";
import style from "./Profile.module.scss";
import Icon, {iconsName, iconsPrefix} from "../../components/Icon/Icon";
import {PostsType} from "../../redux/profilePage/profileType";

type PropsPostType = {
    post: PostsType
    addLike: (id: string) => void
}

function Post(props: PropsPostType) {

    const addLike = () => {
        props.addLike(props.post.id)
    };

    return (
        <div className={style.post}>
            <div className={style.postPicWrapper}>
                <img src="https://img.icons8.com/plasticine/2x/user.png" alt=""/>
            </div>
            <div className={style.postText}>
                <pre>{props.post.postValue}</pre>
            </div>
            <div className={style.postLick}>
                {props.post.countLike}
                <button onClick={addLike}>
                    <Icon prefix={iconsPrefix.fas} iconName={iconsName.heart} size={'sm'}/>
                </button>
            </div>
        </div>
    )
}

export default Post
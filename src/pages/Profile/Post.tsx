import React from "react";
import {PostsType} from "../../redux/StoreTypes";
import style from "./Profile.module.scss";
import Icon, {iconsName, iconsPrefix} from "../../components/Icon/Icon";

type PropsPostType = {
    post: PostsType
}

function Post(props: PropsPostType) {

    const addLike = () => {
        // let action = actionAddLikePost(props.post.id);
        // props.dispatch(action)
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
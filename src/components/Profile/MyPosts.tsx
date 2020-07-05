import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Profile.module.scss";
import {
    actionAddPost,
    actionInputNewPost,
    actionAddLikePost,
} from "../../redux/reducers/profileReducer";
import Icon, {iconsName, iconsPrefix} from "../Icon/Icon";
import {PostsType} from "../../redux/StoreTypes";

type PropsMyPostsType = {
    posts: Array<PostsType>,
    newPosts: string,
    dispatch: any
}

function MyPosts(props: PropsMyPostsType) {
    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = actionInputNewPost(e.currentTarget.value);
        props.dispatch(action);
    };
    const textareaOnKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            buttonOnClick();
        }
    };
    const buttonOnClick = () => {
        let action = actionAddPost();
        props.dispatch(action);
    };
    return (
        <div className={style.myPosts}>

            <div className={style.addPosts}>
                <span>New post:</span>
                <textarea className={style.textarea}
                          onChange={textareaOnChange}
                          value={props.newPosts}
                          onKeyPress={textareaOnKeyPress}/>
                <button className={style.button} onClick={buttonOnClick}>
                    Send<Icon prefix={iconsPrefix.fas} iconName={iconsName.paperPlane} size={'sm'}/>
                </button>
            </div>

            <div className={style.postsItems}>

                {
                    props.posts.map(post => <Post key={post.id} post={post} dispatch={props.dispatch}/>)
                }


            </div>
        </div>
    )
}

// ----------------------------------------------------
type PropsPostType = {
    post: PostsType
    dispatch: any
}
function Post(props: PropsPostType) {

    const addLike = () => {
        let action = actionAddLikePost(props.post.id);
        props.dispatch(action)
    };

    return (
        <div className={style.post}>
            <div className={style.postPicWrapper}>
                <img src="https://img.icons8.com/plasticine/2x/user.png" alt=""/>
            </div>
            <div className={style.postText}>
                <pre>{props.post.message}</pre>
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

export default MyPosts
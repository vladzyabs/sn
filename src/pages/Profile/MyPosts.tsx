import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Profile.module.scss";
import Icon, {iconsName, iconsPrefix} from "../../components/Icon/Icon";
import {DispatchType, PostsType} from "../../redux/StoreTypes";
import Post from "./Post";
import {connect} from "react-redux";
import {actionAddPost, actionInputNewPost} from "../../redux/profilePage/profileAction";
import {RootStateType} from "../../redux/rootStore";

type PropsMyPostsType = {
    posts: Array<PostsType>
    newPosts: string
    addPost: () => void
    inputNewPost: (value: string) => void
}

function MyPost(props: PropsMyPostsType) {
    const textareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.inputNewPost(e.currentTarget.value)
    };
    const textareaOnKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            buttonOnClick();
        }
    };
    const buttonOnClick = () => {
        props.addPost()
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
                    props.posts.map(post => <Post key={post.id} post={post}/>)
                }

            </div>
        </div>
    )
}

const mstp = (state: RootStateType) => {
    return {
        posts: state.profileData.posts,
        newPosts: state.profileData.newPosts,
    }
};

const mdtp = (dispatch: DispatchType) => {
    return {
        addPost: () => dispatch(actionAddPost()),
        inputNewPost: (value: string) => dispatch(actionInputNewPost(value)),
    }
};

const connector = connect(mstp, mdtp);

export default connector(MyPost)
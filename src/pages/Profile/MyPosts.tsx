import React, {ChangeEvent, KeyboardEvent} from "react";
import style from "./Profile.module.scss";
import Icon, {iconsName, iconsPrefix} from "../../components/Icon/Icon";
import Post from "./Post";
import {connect} from "react-redux";
import {actionAddLikePost, actionAddPost, actionInputNewPost} from "../../redux/profilePage/profileAction";
import {RootStateType} from "../../redux/rootStore";
import {PostsType} from "../../redux/profilePage/profileType";

type PropsMyPostsType = {
    posts: PostsType[]
    newPosts: string
    addPost: () => void
    inputNewPost: (value: string) => void
    addLike: (id: string) => void
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
                    props.posts.map(post => <Post key={post.id} post={post} addLike={props.addLike}/>)
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

const mdtp = {
    addPost: () => (actionAddPost()),
    inputNewPost: (value: string) => (actionInputNewPost(value)),
    addLike: (id: string) => (actionAddLikePost(id))
};

const connector = connect(mstp, mdtp);

export default connector(MyPost)
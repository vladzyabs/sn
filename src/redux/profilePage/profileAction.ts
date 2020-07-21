import {ProfileInfoType} from "./profileType";

export const ADD_POST = 'ADD_POST';
export const INPUT_NEW_POST = 'INPUT_NEW_POST';
export const ADD_LIKE_POST = 'ADD_LIKE_POST';
export const SET_USER_INFO = 'SET_USER_INFO';

type ActionAddPostType = { type: typeof ADD_POST }
export const actionAddPost = (): ActionAddPostType => {
    return {
        type: ADD_POST,
    }
};

type ActionInputNewPostType = { type: typeof INPUT_NEW_POST, newPost: string }
export const actionInputNewPost = (newPost: string): ActionInputNewPostType => {
    return {
        type: INPUT_NEW_POST,
        newPost,
    }
};

type ActionAddLikePostType = { type: typeof ADD_LIKE_POST, idPost: string }
export const actionAddLikePost = (idPost: string): ActionAddLikePostType => {
    return {
        type: ADD_LIKE_POST,
        idPost,
    }
};

type ActionSetUserInfoType = { type: typeof SET_USER_INFO, preloader: ProfileInfoType }
export const actionSetUserInfo = (info: ProfileInfoType): ActionSetUserInfoType => {
    return {
        type: SET_USER_INFO,
        preloader: info,
    }
};

export type ProfilePageActionType =
    ActionAddPostType
    | ActionInputNewPostType
    | ActionAddLikePostType
    | ActionSetUserInfoType
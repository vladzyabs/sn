import constants from "../constants";
import {v1} from "uuid";
import {ProfileType} from "../StoreTypes";
import {ActionType} from "./ActionType";

let initialState: ProfileType = {
    posts: [
        {id: v1(), message: 'post 1', countLike: 5},
        {id: v1(), message: 'post 2', countLike: 1},
        {id: v1(), message: 'post 3', countLike: 13},
        {id: v1(), message: 'post 4', countLike: 2},
        {id: v1(), message: 'post 5', countLike: 8},
        {id: v1(), message: 'post 6', countLike: 17},
        {id: v1(), message: 'post 7', countLike: 20},
    ],
    newPosts: '',
};

type profileReducerType = (state: ProfileType, action: ActionType) => ProfileType
const profileReducer: profileReducerType = (state = initialState, action) => {

    type inputNewPostType = (newPost: string) => void;
    const _inputNewPost:inputNewPostType = (newPost) => {
        state.newPosts = newPost;
    };

    type addPostType = () => void
    const _addPost:addPostType = () => {
        const newPost = {id: v1(), message: state.newPosts.trim(), countLike: 0};
        if (state.newPosts.trim()) {
            state.posts = [newPost, ...state.posts]
        }
        _inputNewPost('');
    };

    type addLikeType = (idPost: string) => void
    const _addLike: addLikeType = (idPost) => {
        let postFind = state.posts.find((item) => item.id === idPost);
        postFind && postFind.countLike++;
    };

    switch (action.type) {
        case constants.ADD_POST:
            _addPost();
            return state;
        case constants.INPUT_NEW_POST:
            _inputNewPost(action.newPost);
            return state;
        case constants.ADD_LIKE_POST:
            _addLike(action.idPost);
            return state;
        default:
            return state
    }
};


// action profile
export type actionAddPostType = {
    type: typeof constants.ADD_POST
}
export const actionAddPost = (): actionAddPostType => {
    return {
        type: constants.ADD_POST,
    }
};

export type actionInputNewPostType = {
    type: typeof constants.INPUT_NEW_POST
    newPost: string
}
export const actionInputNewPost = (newPost: string): actionInputNewPostType => {
    return {
        type: constants.INPUT_NEW_POST,
        newPost,
    }
};

export type actionAddLikePostType = {
    type: typeof constants.ADD_LIKE_POST
    idPost: string
}
export const actionAddLikePost = (idPost: string): actionAddLikePostType => {
    return {
        type: constants.ADD_LIKE_POST,
        idPost,
    }
};

export default profileReducer
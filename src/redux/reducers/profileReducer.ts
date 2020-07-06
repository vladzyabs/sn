import constants from "../constants";
import {v1} from "uuid";
import {ProfileType} from "../StoreTypes";

let initialState: ProfileType = {
    posts: [
        {id: v1(), postValue: 'post 1', countLike: 5},
        {id: v1(), postValue: 'post 2', countLike: 1},
        {id: v1(), postValue: 'post 3', countLike: 13},
        {id: v1(), postValue: 'post 4', countLike: 2},
        {id: v1(), postValue: 'post 5', countLike: 8},
        {id: v1(), postValue: 'post 6', countLike: 17},
        {id: v1(), postValue: 'post 7', countLike: 20},
    ],
    newPosts: '',
};

type profileReducerType = (state: ProfileType, action: ProfilePageActionType) => ProfileType
const profileReducer: profileReducerType = (state = initialState, action) => {

    // const _addLike = (idPost: string) => {
    //     let postFind = state.posts.find((item) => item.id === idPost);
    //     postFind && postFind.countLike++;
    // };
    switch (action.type) {
        case constants.ADD_POST:
            // _addPost();
            if (state.newPosts.trim()) {
                return {
                    ...state,
                    newPosts: '',
                    posts: [{id: v1(), postValue: state.newPosts, countLike: 0}, ...state.posts]
                };
            } else return state;
        case constants.INPUT_NEW_POST:
            // _inputNewPost(action.newPost);
            return {
                ...state,
                newPosts: action.newPost || ''
            };
        case constants.ADD_LIKE_POST:
            return {
                ...state
            };
        default:
            return state
    }
};


// action profile
export const actionAddPost = () => {
    return {
        type: constants.ADD_POST,
    }
};

export const actionInputNewPost = (newPost: string) => {
    return {
        type: constants.INPUT_NEW_POST,
        newPost,
    }
};

export const actionAddLikePost = (idPost: string) => {
    return {
        type: constants.ADD_LIKE_POST,
        idPost,
    }
};

export type ProfilePageActionType =
    ReturnType<typeof actionAddPost>
    | ReturnType<typeof actionInputNewPost>
    | ReturnType<typeof actionAddLikePost>
    | any

export default profileReducer
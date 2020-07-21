import {ADD_LIKE_POST, ADD_POST, INPUT_NEW_POST, SET_USER_INFO} from "./profileAction";
import {v1} from "uuid";
import {ProfilePageActionType} from "./profileAction";
import {ProfileStateType} from "./profileType";

let initialState: ProfileStateType = {
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
    profileInfo: null,
};

const profileReducer = (state = initialState, action: ProfilePageActionType): ProfileStateType => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                profileInfo: action.preloader
            };
        case ADD_POST:
            if (state.newPosts.trim()) {
                return {
                    ...state,
                    newPosts: '',
                    posts: [{id: v1(), postValue: state.newPosts.trim(), countLike: 0}, ...state.posts]
                };
            } else return {...state, newPosts: ''};
        case INPUT_NEW_POST:
            return {
                ...state,
                newPosts: action.newPost
            };
        case ADD_LIKE_POST:
            let index = state.posts.findIndex(post => post.id === action.idPost);
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.idPost) {
                        return {...post, countLike: state.posts[index].countLike + 1}
                    }
                    return post
                })
            };
        default:
            return state
    }
};

export default profileReducer
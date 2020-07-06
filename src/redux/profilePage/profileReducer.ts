import _constants from "../constants";
import {v1} from "uuid";
import {ProfilePageActionType} from "./profileAction";

let initialState = {
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

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfilePageActionType) => {
    switch (action.type) {
        case _constants.ADD_POST:
            if (state.newPosts.trim()) {
                return {
                    ...state,
                    newPosts: '',
                    posts: [{id: v1(), postValue: state.newPosts, countLike: 0}, ...state.posts]
                };
            } else return state;
        case _constants.INPUT_NEW_POST:
            return {
                ...state,
                newPosts: action.payload || ''
            };
        case _constants.ADD_LIKE_POST:
            let index = state.posts.findIndex(post => post.id === action.payload)
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload) {
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
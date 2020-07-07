import {ADD_LIKE_POST, ADD_POST, INPUT_NEW_POST} from "./profileAction";
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

const profileReducer = (state: InitialStateType = initialState, action: ProfilePageActionType): InitialStateType => {
    switch (action.type) {
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
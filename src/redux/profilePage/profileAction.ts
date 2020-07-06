import _constants from "../constants";

type ActionAddPostType = {type: typeof _constants.ADD_POST, payload: null}
export const actionAddPost = (): ActionAddPostType => {
    return {
        type: _constants.ADD_POST,
        payload: null,
    }
};

type ActionInputNewPostType = {type: typeof _constants.INPUT_NEW_POST, payload: string}
export const actionInputNewPost = (newPost: string): ActionInputNewPostType => {
    return {
        type: _constants.INPUT_NEW_POST,
        payload: newPost,
    }
};

type ActionAddLikePostType = {type: typeof _constants.ADD_LIKE_POST, payload: string}
export const actionAddLikePost = (idPost: string): ActionAddLikePostType => {
    return {
        type: _constants.ADD_LIKE_POST,
        payload: idPost,
    }
};

export type ProfilePageActionType =
    ActionAddPostType
    | ActionInputNewPostType
    | ActionAddLikePostType
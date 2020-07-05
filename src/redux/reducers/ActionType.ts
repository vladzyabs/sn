import {actionAddLikePostType, actionAddPostType, actionInputNewPostType} from "./profileReducer";
import {actionAddMessageType, actionInputNewMessageType} from "./dialogsReduser";

export type ActionType = actionAddPostType
    & actionInputNewPostType
    & actionAddLikePostType
    & actionAddMessageType
    & actionInputNewMessageType

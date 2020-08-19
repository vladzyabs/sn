import {ADD_POST, INPUT_NEW_POST, SET_USER_INFO, ProfileInfoType, ADD_LIKE_POST} from './profileType'
import {profileAPI} from '../../api/api';

type ActionAddPostType = { type: typeof ADD_POST }
export const actionAddPost = (): ActionAddPostType => {
   return {
      type: ADD_POST,
   }
}

type ActionInputNewPostType = { type: typeof INPUT_NEW_POST, newPost: string }
export const actionInputNewPost = (newPost: string): ActionInputNewPostType => {
   return {
      type: INPUT_NEW_POST,
      newPost,
   }
}


type ActionAddLikePostType = { type: typeof ADD_LIKE_POST, idPost: string }
export const actionAddLikePost = (idPost: string): ActionAddLikePostType => {
   return {
      type: ADD_LIKE_POST,
      idPost,
   }
}
type ActionSetUserInfoType = { type: typeof SET_USER_INFO, preloader: ProfileInfoType }
export const actionSetUserInfo = (info: ProfileInfoType): ActionSetUserInfoType => {
   return {
      type: SET_USER_INFO,
      preloader: info,
   }
}

export const thunkGetUserInfo = (userID: number) =>
   (dispatch: any) => {
      profileAPI.getProfileInfo(userID)
         .then(response => dispatch(actionSetUserInfo(response.data)))
   }

export type ProfilePageActionType =
   ActionAddPostType
   | ActionInputNewPostType
   | ActionAddLikePostType
   | ActionSetUserInfoType

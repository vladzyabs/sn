import { ADD_LIKE_POST, ADD_POST, DELETE_POST, ProfileInfoType, SET_STATUS, SET_USER_INFO } from './profileType'
import {profileAPI} from '../../api/api'

type ActionAddPostType = { type: typeof ADD_POST, value: string }
export const actionAddPost = (value: string): ActionAddPostType => {
   return {
      type: ADD_POST,
      value,
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

type ActionSetStatusType = { type: typeof SET_STATUS, status: string }
export const actionSetStatus = (status: string): ActionSetStatusType => {
   return {
      type: SET_STATUS,
      status,
   }
}

export const actionDeletePost = (postID: string) => ({
   type: DELETE_POST,
   postID
} as const)
type DeletePostActionType = ReturnType<typeof actionDeletePost>

export const thunkGetUserInfo = (userID: number) =>
   (dispatch: any) => {
      profileAPI.getProfileInfo(userID)
         .then(response => dispatch(actionSetUserInfo(response.data)))
   }

export const thunkGetStatus = (userID: number) =>
   (dispatch: any) => {
      profileAPI.getStatus(userID)
         .then(response => dispatch(actionSetStatus(response.data)))
   }

export const thunkUpdateStatus = (status: string) =>
   (dispatch: any) => {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(actionSetStatus(status))
            }
         })
   }

export type ProfilePageActionType =
   ActionAddPostType
   | DeletePostActionType
   | ActionAddLikePostType
   | ActionSetUserInfoType
   | ActionSetStatusType

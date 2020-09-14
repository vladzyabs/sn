import { ADD_LIKE_POST, ADD_POST, DELETE_POST, ProfileInfoType, SET_STATUS, SET_USER_INFO } from './profileType'
import { profileAPI } from '../../api/api'
import { Dispatch } from 'redux'

// actions =============================================================================================================

export const actionAddPost = (value: string) => ({
   type: ADD_POST,
   value,
} as const)
type ActionAddPostType = ReturnType<typeof actionAddPost>

export const actionDeletePost = (postID: string) => ({
   type: DELETE_POST,
   postID,
} as const)
type DeletePostActionType = ReturnType<typeof actionDeletePost>

export const actionAddLikePost = (idPost: string) => ({
   type: ADD_LIKE_POST,
   idPost,
} as const)
type ActionAddLikePostType = ReturnType<typeof actionAddLikePost>


export const actionSetUserInfo = (info: ProfileInfoType) => ({
   type: SET_USER_INFO,
   preloader: info,
} as const)
type ActionSetUserInfoType = ReturnType<typeof actionSetUserInfo>


export const actionSetStatus = (status: string) => ({
   type: SET_STATUS,
   status,
} as const)
type ActionSetStatusType = ReturnType<typeof actionSetStatus>

// thunks ==============================================================================================================

export const thunkGetUserInfo = (userID: number) =>
   async (dispatch: Dispatch) => {
      const res = await profileAPI.getProfileInfo(userID)
      if (res.data) {
         dispatch(actionSetUserInfo(res.data))
      }
   }

export const thunkGetStatus = (userID: number) =>
   async (dispatch: Dispatch) => {
      const res = await profileAPI.getStatus(userID)
      dispatch(actionSetStatus(res.data))
   }

export const thunkUpdateStatus = (status: string) =>
   async (dispatch: Dispatch) => {
      const res = await profileAPI.updateStatus(status)
      if (res.data.resultCode === 0) {
         dispatch(actionSetStatus(status))
      }
   }

export type ProfilePageActionType =
   ActionAddPostType
   | DeletePostActionType
   | ActionAddLikePostType
   | ActionSetUserInfoType
   | ActionSetStatusType

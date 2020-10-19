import {ProfileDataType} from '../../api/apiType'

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_LIKE_POST = 'ADD_LIKE_POST'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_STATUS = 'SET_STATUS'
export const SET_USER_PHOTO = 'SET_USER_PHOTO'
export const SET_PHOTO_LOADING = 'SET_PHOTO_LOADING'

// profile type
export type ProfileInfoType = ProfileDataType
export type PostsType = {
   id: string
   postValue: string
   countLike: number
}
export type ProfileStateType = {
   profileInfo: ProfileInfoType
   status: string
   photoLoading: boolean
   posts: PostsType[]
}

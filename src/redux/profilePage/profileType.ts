import {ProfileDataType} from '../../api/apiType';

export const ADD_POST = 'ADD_POST'
export const INPUT_NEW_POST = 'INPUT_NEW_POST'
export const ADD_LIKE_POST = 'ADD_LIKE_POST'
export const SET_USER_INFO = 'SET_USER_INFO'

// profile type
export type ProfileInfoType = ProfileDataType | null
export type PostsType = {
   id: string
   postValue: string
   countLike: number
}
export type ProfileStateType = {
   profileInfo: ProfileInfoType
   posts: PostsType[]
   newPosts: string
}

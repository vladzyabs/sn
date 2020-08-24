import * as axios from 'axios'
import {ResponseType, AuthMeDataType, ProfileDataType, UsersDataType} from './apiType'

const instance = axios.default.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': 'ec5b15d4-74e9-420d-8187-76eec8294de7',
   },
})

export const authAPI = {
   getMe() {
      return instance
         .get<ResponseType<AuthMeDataType>>('auth/me')
         .then(response => response.data)
   },
}

export const profileAPI = {
   getProfileInfo(userID: number) {
      return instance
         .get<ProfileDataType>(`profile/${userID}`)
   },
}

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 10) {
      return instance
         .get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   followUser(userID: number) {
      return instance
         .post<ResponseType>(`follow/${userID}`)
         .then(response => response.data)
   },
   unfollowUser(userID: number) {
      return instance
         .delete<ResponseType>(`follow/${userID}`)
         .then(response => response.data)
   },
}

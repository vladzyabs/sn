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
   login(email: string, password: string, rememberMe: boolean = false) {
      return instance
         .post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
   },
   logout() {
      return instance
         .delete<ResponseType>(`auth/login`)
   },
}

export const profileAPI = {
   getProfileInfo(userID: number) {
      return instance
         .get<ProfileDataType>(`profile/${userID}`)
   },
   getStatus(userID: number) {
      return instance
         .get<string>(`/profile/status/${userID}`)
   },
   updateStatus(status: string) {
      return instance
         .put<ResponseType>(`/profile/status`, {status: status})
   },
   uploadPhoto(photoFile: any) {
      const formData = new FormData()
      formData.append('image', photoFile)

      return instance
         .put<ResponseType<{photos: {small: string, large: string}}>>(`/profile/photo`, formData)
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

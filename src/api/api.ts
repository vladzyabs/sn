import * as axios from 'axios'

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
         .get('auth/me')
         .then(response => response.data)
   }
}

export const profileAPI = {}

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 10) {
      return instance
         .get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   followUser(userID: number) {
      return instance
         .post(`follow/${userID}`)
         .then(response => response.data)
   },
   unfollowUser(userID: number) {
      return instance
         .delete(`follow/${userID}`)
         .then(response => response.data)
   }
}

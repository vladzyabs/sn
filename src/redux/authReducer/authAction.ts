import {SET_USER_DATA} from './authTypes'
import {authAPI} from '../../api/api'
import {AuthMeDataType} from '../../api/apiType'
import {Dispatch} from 'redux'
import {stopSubmit} from 'redux-form'


type SetAuthDataActionType = {
   type: typeof SET_USER_DATA
   id: number | null
   login: string | null
   email: string | null
   isAuth: boolean
}
export const setAuthDataAC = (payload: AuthMeDataType, isAuth: boolean): SetAuthDataActionType => {
   return {
      type: SET_USER_DATA,
      id: payload.id,
      login: payload.login,
      email: payload.email,
      isAuth: isAuth
   }
}

export const thunkGetAuthData = () =>
   (dispatch: Dispatch) => {
      authAPI.getMe()
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthDataAC(data.data, true))
            }
         })
   }

export const thunkLogin = (email: string, password: string, rememberMe: boolean = false) =>
   (dispatch: any) => {
      authAPI.login(email, password, rememberMe)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(thunkGetAuthData())
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
               dispatch(stopSubmit('loginForm', {_error: message}))
            }
         })
   }

export const thunkLogout = () =>
   (dispatch: Dispatch) => {
      authAPI.logout()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthDataAC({email: null, id: null, login: null}, false))
            }
         })
   }

export type AuthActionType
   = SetAuthDataActionType

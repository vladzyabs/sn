import { SET_USER_DATA } from './authTypes'
import { authAPI } from '../../api/api'
import { AuthMeDataType } from '../../api/apiType'
import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'

// actions =============================================================================================================

export const setAuthDataAC = (payload: AuthMeDataType, isAuth: boolean) => ({
   type: SET_USER_DATA,
   id: payload.id,
   login: payload.login,
   email: payload.email,
   isAuth: isAuth,
} as const)
type SetAuthDataActionType = ReturnType<typeof setAuthDataAC>

// thunks ==============================================================================================================

export const thunkGetAuthData = () =>
   async (dispatch: Dispatch) => {
      const res = await authAPI.getMe()
      if (res.resultCode === 0) {
         dispatch(setAuthDataAC(res.data, true))
      }
   }

export const thunkLogin = (email: string, password: string, rememberMe: boolean = false) =>
   async (dispatch: any) => {
      const res = await authAPI.login(email, password, rememberMe)
      if (res.data.resultCode === 0) {
         dispatch(thunkGetAuthData())
      } else {
         let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
         dispatch(stopSubmit('loginForm', {_error: message}))
      }
   }

export const thunkLogout = () =>
   async (dispatch: Dispatch) => {
      const res = await authAPI.logout()
      if (res.data.resultCode === 0) {
         dispatch(setAuthDataAC({email: null, id: null, login: null}, false))
      }
   }

export type AuthActionType
   = SetAuthDataActionType

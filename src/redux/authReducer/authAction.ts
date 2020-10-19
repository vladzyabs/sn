import {SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS} from './authTypes'
import {authAPI, securityAPI} from '../../api/api'
import {AuthMeDataType, LoginParamsType} from '../../api/apiType'
import {Dispatch} from 'redux'
import {stopSubmit} from 'redux-form'

// actions =============================================================================================================

export const setAuthDataAC = (payload: AuthMeDataType, isAuth: boolean) => ({
   type: SET_USER_DATA,
   payload,
   isAuth,
} as const)
type SetAuthDataActionType = ReturnType<typeof setAuthDataAC>

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
   type: GET_CAPTCHA_URL_SUCCESS,
   payload: {
      captchaUrl,
   },
} as const)
type SetCaptchaUrlActionType = ReturnType<typeof getCaptchaUrlSuccess>

// thunks ==============================================================================================================

export const thunkGetAuthData = () =>
   async (dispatch: Dispatch) => {
      const res = await authAPI.getMe()
      if (res.resultCode === 0) {
         dispatch(setAuthDataAC(res.data, true))
      }
   }

export const thunkLogin = (data: LoginParamsType) =>
   async (dispatch: any) => {
      const res = await authAPI.login(data)
      if (res.data.resultCode === 0) {
         dispatch(thunkGetAuthData())
      } else if (res.data.resultCode === 10) {
         dispatch(getCaptchaUrl())
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

export const getCaptchaUrl = () =>
   async (dispatch: Dispatch) => {
      const res = await securityAPI.getCaptchaUrl()
      const captchaUrl = res.data.url
      dispatch(getCaptchaUrlSuccess(captchaUrl))
   }

export type AuthActionType
   = SetAuthDataActionType
   | SetCaptchaUrlActionType

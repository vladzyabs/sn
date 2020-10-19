import { AuthType } from './authTypes'
import { AuthActionType } from './authAction'

const initialState: AuthType = {
   id: null,
   login: null,
   email: null,
   isAuth: false,
   captchaUrl: null,
} as const

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_USER_DATA':
         return {
            ...state,
            ...action.payload
         }
      case 'GET_CAPTCHA_URL_SUCCESS':
         return {
            ...state,
            captchaUrl: action.payload.captchaUrl
         }
      default:
         return state
   }
}

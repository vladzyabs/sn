import {SET_USER_DATA} from './authTypes'
import {authAPI} from '../../api/api'
import {AuthMeDataType} from '../../api/apiType'

type SetAuthDataActionType = {
   type: typeof SET_USER_DATA
   id: number | null
   login: string | null
   email: string | null
}
export const setAuthDataAC = (payload: AuthMeDataType): SetAuthDataActionType => {
   return {
      type: SET_USER_DATA,
      id: payload.id,
      login: payload.login,
      email: payload.email,
   }
}

export const thunkGetAuthData = () =>
   (dispatch: any) => {
      authAPI.getMe()
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthDataAC(data.data))
            }
         })
   }

export type AuthActionType
   = SetAuthDataActionType

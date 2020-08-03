import {AuthType, SET_USER_DATA} from './authTypes';

type SetAuthDataActionType = {
   type: typeof SET_USER_DATA
   id: number | null
   login: string | null
   email: string | null
}
export const setAuthDataAC = (payload: AuthType): SetAuthDataActionType => {
   return {
      type: SET_USER_DATA,
      id: payload.id,
      login: payload.login,
      email: payload.email,
   }
}

export type ActionType
   = SetAuthDataActionType

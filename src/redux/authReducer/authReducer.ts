import {AuthType} from './authTypes'
import {AuthActionType} from './authAction'

const initialState: AuthType = {
   id: null,
   login: null,
   email: null,
   isAuth: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_USER_DATA':
         return {
            ...state,
            id: action.id,
            login: action.login,
            email: action.email,
            isAuth: true,
         }
      default:
         return state
   }
}

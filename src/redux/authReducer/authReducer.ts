import {AuthType} from './authTypes';
import {ActionType} from './authAction';

const initialState: AuthType = {
   id: null,
   login: null,
   email: null,
   isAuth: false
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'SET_USER_DATA':
         return {
            ...state,
            id: action.id,
            login: action.login,
            email: action.email,
            isAuth: true
         }
      default:
         return state
   }
}

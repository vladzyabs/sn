import {INITIALIZED_SUCCESS} from './appType'
import {Dispatch} from 'redux'
import {thunkGetAuthData} from '../authReducer/authAction'

type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS }
export const initializedSuccessAC = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initialize = () =>
   (dispatch: Dispatch | any) => {
      const promise = dispatch(thunkGetAuthData())
      Promise.all([promise])
         .then(() => {
            dispatch(initializedSuccessAC())
         })
   }

export type AppActionType =
   InitializedSuccessActionType

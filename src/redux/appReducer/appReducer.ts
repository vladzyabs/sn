import {AppStateType} from './appType'
import {AppActionType} from './appAction'

const initialState: AppStateType = {
   initialized: false
}

const appReducer = (state = initialState, action: AppActionType): AppStateType => {
   switch (action.type) {
      case 'INITIALIZED_SUCCESS':
         return {
            ...state,
            initialized: true
         }
      default:
         return state
   }
}

export default appReducer

import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import profileReducer from './profilePage/profileReducer'
import dialogReducer from './dialogsPage/dialogsReduser'
import usersReducer from './usersPage/usersReducer'
import {authReducer} from './authReducer/authReducer'
import {AuthActionType} from './authReducer/authAction'
import {DialogsPageActionType} from './dialogsPage/dialogsAction'
import {ProfilePageActionType} from './profilePage/profileAction'
import {UsersPageActionType} from './usersPage/usersAction'
import appReducer from './appReducer/appReducer'
import {AppActionType} from './appReducer/appAction'

const rootReducer = combineReducers({
   appData: appReducer,
   profileData: profileReducer,
   dialogsData: dialogReducer,
   usersData: usersReducer,
   auth: authReducer,
   form: formReducer,
})

let rootStore = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

export type RootActionType =
   AuthActionType
   | DialogsPageActionType
   | ProfilePageActionType
   | UsersPageActionType
   | AppActionType

export default rootStore

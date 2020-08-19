import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import profileReducer from './profilePage/profileReducer'
import dialogReducer from './dialogsPage/dialogsReduser'
import usersReducer from './usersPage/usersReducer'
import {authReducer} from './authReducer/authReducer'

const rootReducer = combineReducers({
   profileData: profileReducer,
   dialogsData: dialogReducer,
   usersData: usersReducer,
   auth: authReducer,
})

let rootStore = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

export default rootStore

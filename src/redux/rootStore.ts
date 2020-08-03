import {combineReducers, createStore} from "redux"
import profileReducer from "./profilePage/profileReducer";
import dialogReducer from "./dialogsPage/dialogsReduser";
import usersReducer from "./usersPage/usersReducer";
import {authReducer} from './authReducer/authReducer';

const rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
    usersData: usersReducer,
    auth: authReducer,
});

let rootStore = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>

export default rootStore

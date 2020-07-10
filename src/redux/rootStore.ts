import {combineReducers, createStore} from "redux"
import profileReducer from "./profilePage/profileReducer";
import dialogReducer from "./dialogsPage/dialogsReduser";
import {ProfilePageActionType} from "./profilePage/profileAction";
import {DialogsPageActionType} from "./dialogsPage/dialogsAction";
import {UsersPageActionType} from "./usersPage/usersAction";
import usersReducer from "./usersPage/usersReducer";

const rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
    usersData: usersReducer,
});

type RootActionType =
    ProfilePageActionType
    | DialogsPageActionType
    | UsersPageActionType

export type RootStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: RootActionType) => void

let rootStore = createStore(rootReducer);

export default rootStore


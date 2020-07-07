import {combineReducers, createStore} from "redux"
import profileReducer from "./profilePage/profileReducer";
import dialogReducer from "./dialogsPage/dialogsReduser";
import {ProfilePageActionType} from "./profilePage/profileAction";
import {DialogsPageActionType} from "./dialogsPage/dialogsAction";

const rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
});

type RootActionType =
    ProfilePageActionType
    | DialogsPageActionType

export type RootStateType = ReturnType<typeof rootReducer>
export type DispatchType = (action: RootActionType) => void

let rootStore = createStore(rootReducer);

export default rootStore


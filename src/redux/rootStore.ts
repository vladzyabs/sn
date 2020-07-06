import {combineReducers, createStore} from "redux"
import profileReducer from "./profilePage/profileReducer";
import dialogReducer from "./dialogsPage/dialogsReduser";

const rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>

let rootStore = createStore(rootReducer);

export  default rootStore


import { createStore, combineReducers } from "redux"
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogsReduser";

export const appReducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
});

let store = createStore(appReducers);

export default store
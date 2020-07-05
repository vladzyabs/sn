import { createStore, combineReducers } from "redux"
import profileReducer from "./reducers/profileReducer";
import dialogReducer from "./reducers/dialogsReduser";
import {RootStoreType} from "./StoreTypes";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogReducer,
});

let store: RootStoreType = createStore(reducers);

export default store
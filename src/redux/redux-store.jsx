import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer
});


const store = createStore(reducers);

export default store;
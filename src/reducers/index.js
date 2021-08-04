import {combineReducers} from "redux";
import messagesReducer from "./messages";

export const rootReducer = combineReducers({
    messages: messagesReducer
});
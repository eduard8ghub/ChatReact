import { combineReducers } from "redux";
import {chatsReducer} from "./Chats/reducer";

export default combineReducers({
    chats: chatsReducer
})
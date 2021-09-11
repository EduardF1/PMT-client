import {combineReducers} from "redux";
import errorReducer from "./errorReducer";

// main store reducer
export default combineReducers({
    errors:errorReducer
})
import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

// main store reducer
export default combineReducers({
    errors:errorReducer,
    project: projectReducer
});
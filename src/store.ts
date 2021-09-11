import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {}
const middleware = [thunk]

let store:any;

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            // redux extensions available only for Chrome
            composeWithDevTools()
            )
    );
} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware))
    );
}

export default store;
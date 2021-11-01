import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import paginationReducer from "./pagination";
import userReducer from "./user";
import statusReducer from "./status";

const combinedReducer = combineReducers({
    pagination: paginationReducer,
    user: userReducer,
    status: statusReducer,
});

export const store = createStore(
    combinedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

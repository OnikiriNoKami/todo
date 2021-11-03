import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import paginationReducer from "./pagination";
import userReducer from "./user";
import statusReducer from "./status";
import todoReducer from "./todo";
import registrationReducer from "./registration";
import loginReducer from "./login";
import authorizationReducer from "./authorization";

const combinedReducer = combineReducers({
    authorization: authorizationReducer,
    user: userReducer,
    status: statusReducer,
    todo: todoReducer,
    login: loginReducer,
    registration: registrationReducer,
    pagination: paginationReducer,
    
});

export const store = createStore(
    combinedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

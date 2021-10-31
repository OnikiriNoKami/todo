import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const combinedReducer = combineReducers({});

export const store = createStore(
    combinedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

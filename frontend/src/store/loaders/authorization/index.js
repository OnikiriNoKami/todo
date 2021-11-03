import { combineReducers } from "redux";
import tokenLoaderReducer from "./token";

const authorizationLoaderReducer = combineReducers({
    tokenLoader: tokenLoaderReducer
});

export default authorizationLoaderReducer;
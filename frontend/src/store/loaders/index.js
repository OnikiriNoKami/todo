import { combineReducers } from "redux";
import authorizationLoaderReducer from "./authorization";

const loadersReducer = combineReducers({
    authorization: authorizationLoaderReducer,
});

export default loadersReducer;
import { combineReducers } from "redux";
import todoCreationCollapseReducer from "./todoCreationCollapseReducer";

const todoCreationReducer = combineReducers({
    collapse: todoCreationCollapseReducer,
})

export default todoCreationReducer;
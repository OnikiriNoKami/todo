import { combineReducers } from "redux";
import todoCreationCollapseReducer from "./todoCreationCollapseReducer";
import todoCreationDateReducer from "./todoCreationDate/todoCreationDateReducer";

const todoCreationReducer = combineReducers({
    collapse: todoCreationCollapseReducer,
    date: todoCreationDateReducer,
})

export default todoCreationReducer;
import { combineReducers } from "redux";
import todoCreationCollapseReducer from "./todoCreationCollapseReducer";
import todoCreationDateReducer from "./todoCreationDate/todoCreationDateReducer";
import todoCreationInputsReducer from "./todoCreationInputs/todoCreationInputsReducer";

const todoCreationReducer = combineReducers({
    collapse: todoCreationCollapseReducer,
    date: todoCreationDateReducer,
    inputs: todoCreationInputsReducer,
})

export default todoCreationReducer;
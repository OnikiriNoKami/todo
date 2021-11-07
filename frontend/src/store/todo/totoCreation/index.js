import { combineReducers } from "redux";
import todoCreationCollapseReducer from "./todoCreationCollapseReducer";
import todoCreationDateReducer from "./todoCreationDate/todoCreationDateReducer";
import todoCreationInputsReducer from "./todoCreationInputs/todoCreationInputsReducer";
import todoCreationRequestReducer from "./todoCreationRequests/todoCreationRequestsReducer";

const todoCreationReducer = combineReducers({
    collapse: todoCreationCollapseReducer,
    date: todoCreationDateReducer,
    inputs: todoCreationInputsReducer,
    requests: todoCreationRequestReducer,
})

export default todoCreationReducer;
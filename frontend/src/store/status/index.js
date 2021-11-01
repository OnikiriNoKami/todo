import { combineReducers } from "redux";
import singleStatusReducer from "./statusReducer";
import manyStatusesReducer from "./manyStatusesReducer";

const statusReducer = combineReducers({
    status: singleStatusReducer,
    manyStatuses: manyStatusesReducer,
})

export default statusReducer;
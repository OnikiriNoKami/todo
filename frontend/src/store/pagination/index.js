import { combineReducers } from "redux";
import commentPaginationReducer from "./commentPagination";
import todoPaginationReducer from "./todoPaginaton";

const paginationReducer = combineReducers({
    todoPagination: todoPaginationReducer,
    //commentPagination: commentPaginationReducer,
});

export default paginationReducer;

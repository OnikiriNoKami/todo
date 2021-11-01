import { combineReducers } from "redux";
import manyTodosReducer from "./manyTodosReducer";
import singleTodoReducer from "./todoReducer";

const todoReducer = combineReducers({
    todo: singleTodoReducer,
    manyTodos: manyTodosReducer,
})

export default todoReducer;
import { combineReducers } from "redux";
import manyTodosReducer from "./manyTodosReducer";
import singleTodoReducer from "./todoReducer";
import todoCreationReducer from "./totoCreation";

const todoReducer = combineReducers({
    todoCreation: todoCreationReducer,
    todo: singleTodoReducer,
    manyTodos: manyTodosReducer,
})

export default todoReducer;
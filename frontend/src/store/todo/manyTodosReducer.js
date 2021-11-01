import { todosActionsTypes } from "../../utils/reduxActionType/todoActionsTypes"

const defaultState= {
    loading: false,
    manyTodos: [],
}

const manyTodosReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case todosActionsTypes.SET_TODOS:
            return { ...state, manyTodos: payload }
        case todosActionsTypes.SET_TODOS_LOADING:
            return { ...state, loading: payload }
        case todosActionsTypes.ADD_TODO:
            return { ...state, manyTodos: [ ...state.manyTodos, payload ] }
        case todosActionsTypes.DROP_TODOS:
            return { ...defaultState }

        default: 
            return state
    }
}

export default manyTodosReducer;
import { todosActionsTypes } from "../../utils/reduxActionType/todoActionsTypes"

const defaultState= {
    loading: false,
    todos: [],
}

const manyTodosReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case todosActionsTypes.SET_TODOS:
            return { ...state, todos: payload }
        case todosActionsTypes.SET_TODOS_LOADING:
            return { ...state, loading: payload }
        case todosActionsTypes.ADD_TODO:
            return { ...state, todos: [ ...state.todos, payload ] }
        case todosActionsTypes.DROP_TODOS:
            return { ...defaultState }
        case todosActionsTypes.SET_TODOS_NEW_STATUS:
            return { ...state, todos: state.todos.map(element => {
                if(element._id === payload.todoId){
                    return {...element, statusId: payload.statusId}
                }
                return element
            })}

        default: 
            return state
    }
}

export default manyTodosReducer;
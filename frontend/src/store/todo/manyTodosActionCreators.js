import { todosActionsTypes } from "../../utils/reduxActionType/todoActionsTypes";

const todosActions = {
    setTodos: (todos) => ({type: todosActionsTypes.SET_TODOS, payload: todos }),
    setLoading: (loading)=>({type: todosActionsTypes.SET_TODOS_LOADING, payload: loading}),
    addTodo: (todo)=> ({type: todosActionsTypes.ADD_TODO, payload: todo}),
    dropTodos: (confirm=false) => {
        if(confirm){
            return ({type: todosActionsTypes.DROP_TODOS})
        }
        throw new Error("Confirmation for todos drop not provided.")
    },
}

export default todosActions;
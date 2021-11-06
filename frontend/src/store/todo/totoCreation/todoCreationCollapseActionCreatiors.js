import todoCreationCollapseActionsTypes from "../../../utils/reduxActionType/todoCreation/todoCreationCollapseActionsTypes"
export const toggleTodoCreationCollapse = () => ({type: todoCreationCollapseActionsTypes.TOGGLE_TODO_CREATION_COLLAPSE})
export const setTodoCreationCollapse = (isOpen) => ({type: todoCreationCollapseActionsTypes.SET_TODO_CREATION_COLLAPSE, payload: isOpen})
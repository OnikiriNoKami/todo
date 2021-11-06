import todoCreationCollapseActionsTypes from "../../../utils/reduxActionType/todoCreation/todoCreationCollapseActionsTypes";

const defaultState = {
    isOpen: false
}

const todoCreationCollapseReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case todoCreationCollapseActionsTypes.SET_TODO_CREATION_COLLAPSE:
            return { ...state, isOpen: payload }
        case todoCreationCollapseActionsTypes.TOGGLE_TODO_CREATION_COLLAPSE:
            return { ...state, isOpen: !state.isOpen}
        default:
            return state;
    }
}

export default todoCreationCollapseReducer;
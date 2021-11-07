import todoCreationRequestActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationRequestActionsTypes";

const defaultState = {
    createRequest: false,
    resetRequest: false,
}

const todoCreationRequestReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case todoCreationRequestActionsTypes.SET_CREATE_REQUEST:
            return { ...state, createRequest: payload }
        case todoCreationRequestActionsTypes.SET_RESET_REQUEST:
            return { ...state, resetRequest: payload }

        default:
            return state;
    }
}

export default todoCreationRequestReducer;
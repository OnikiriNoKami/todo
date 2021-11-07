import todoCreationRequestActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationRequestActionsTypes";

const todoCreationRequestActions = {
    setCreateRequest: (request) => ({type: todoCreationRequestActionsTypes.SET_CREATE_REQUEST, payload: request}),
    setResetRequest: (request) => ({type: todoCreationRequestActionsTypes.SET_RESET_REQUEST, payload: request})
}

export default todoCreationRequestActions;
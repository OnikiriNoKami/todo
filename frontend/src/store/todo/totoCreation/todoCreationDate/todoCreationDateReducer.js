import todoCreationDateActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationDateActionsTypes";

const defaultState = {
    beginDate: new Date(),
    endDate: new Date(),
}

const todoCreationDateReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case todoCreationDateActionsTypes.SET_TODO_CREATION_ENDDATE:
            return { ...state, endDate: payload}
        case todoCreationDateActionsTypes.SET_TODO_CREATION_BEGINDATE:
            return { ...state, beginDate: payload}
        case todoCreationDateActionsTypes.ADD_DAY_TODO_CREATION_ENDDATE:
            return { ...state, endDate: new Date( state.endDate.setDate(state.endDate.getDate() + payload))}

        default:
            return state
    }
}

export default todoCreationDateReducer;
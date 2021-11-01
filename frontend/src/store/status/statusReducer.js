import statusActionsTypes from "../../utils/reduxActionType/statusActionsTypes";

const defaultState = {
    id: "",
    title: "",
}

const singleStatusReducer = (state= defaultState, {type, payload}) => {
    switch(type){
        case statusActionsTypes.SET_STATUS_DATA:
            return { id: payload.id || state.id, title: payload.title || state.title }
        case statusActionsTypes.SET_STATUS_ID:
            return { ...state, id: payload }
        case statusActionsTypes.SET_STATUS_TITLE:
            return { ...state, title: payload }
        case statusActionsTypes.DROP_STATUS_DATA:
            return { ...defaultState }

        default:
            return state
    }
}

export default singleStatusReducer;


import { statusesActionsTypes } from "../../utils/reduxActionType/statusActionsTypes";

const defaultState = {
    loading: false,
    statuses: []
}

const manyStatusesReducer = (state = defaultState, {type, payload}) => {
    switch(type){
        case statusesActionsTypes.SET_STATUSES:
            return { ...state, statuses: payload }
        case statusesActionsTypes.SET_STATUSES_LOADING:
            return { ...state, loading: payload }
        case statusesActionsTypes.ADD_STATUS:
            return { ...state, statuses: [...state.statuses, payload] }
        case statusesActionsTypes.DROP_STATUSES:
            return { ...defaultState }
        default:
            return state
    }
}

export default manyStatusesReducer;
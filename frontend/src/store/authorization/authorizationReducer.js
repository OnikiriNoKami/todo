import authorizationActionsTypes from "../../utils/reduxActionType/authorizationActions"

const defaultState = {
    authorized: false,
    tokenRetrivedFromStorage: '',
    token: '',
}

const authorizationReducer = (state=defaultState, {type, payload})=> {
    switch(type){
        case authorizationActionsTypes.SET_AUTHORIZED:
            return { ...state, authorized: payload }
        case authorizationActionsTypes.SET_TOKEN_RETRIVED_FROM_STORAGE:
            return { ...state, tokenRetrivedFromStorage: payload }
        case authorizationActionsTypes.SET_AUTHORIZATION_TOKEN:
            return { ...state, token: payload }
        case authorizationActionsTypes.RESET_AUTHORIZATION_DATA:
            return { ...defaultState }
        default:
            return state
    }
}

export default authorizationReducer
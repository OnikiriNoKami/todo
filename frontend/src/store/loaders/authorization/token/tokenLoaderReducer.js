import tokenLoaderActionsTypes from '../../../../utils/reduxActionType/loaders/tokenLoaderActionsTypes';

const defaultState = {
    displayLoader: true
}

const tokenLoaderReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case tokenLoaderActionsTypes.LOADER_TOKEN_DISPLAY:
            return { displayLoader: payload}
        
        default:
            return state
    }
}

export default tokenLoaderReducer;
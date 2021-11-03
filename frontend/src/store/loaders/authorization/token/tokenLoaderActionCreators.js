import tokenLoaderActionsTypes from "../../../../utils/reduxActionType/loaders/tokenLoaderActionsTypes";

const tokenLoaderActions = {
    display: (displayStatus) => ({type: tokenLoaderActionsTypes.LOADER_TOKEN_DISPLAY, payload: displayStatus})

}

export default tokenLoaderActions;
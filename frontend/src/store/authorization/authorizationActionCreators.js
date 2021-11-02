import authorizationActionsTypes from "../../utils/reduxActionType/authorizationActions";

const authorizationActions = {
    setAuthorized: (authorized) => ({
        type: authorizationActionsTypes.SET_AUTHORIZED,
        payload: authorized,
    }),
    setTokenRetrivedFromStorage: (retrivedFromStorage) => ({
        type: authorizationActionsTypes.SET_TOKEN_RETRIVED_FROM_STORAGE,
        payload: retrivedFromStorage,
    }),
    setToken: (token)=>({type: authorizationActionsTypes.SET_AUTHORIZATION_TOKEN, payload: token}),
    resetData: (confirm)=>{
        if(confirm){
            return ({type: authorizationActionsTypes.RESET_AUTHORIZATION_DATA})
        }
        throw new Error("Confirmation for authorization data reset not provided.")
    }
};

export default authorizationActions;

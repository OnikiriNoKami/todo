import registrationActionsTypes from "../../utils/reduxActionType/registrationActionsTypes";

export const regCreateUserRequest = (request) => ({type: registrationActionsTypes.SET_CREATE_USER_REQUEST, payload: request})
export const regSetEmailValid = (validStatus) => ({type: registrationActionsTypes.SET_EMAIL_VALID, payload: validStatus})
export const regSetPasswordValid = (validStatus) => ({type: registrationActionsTypes.SET_PASSWORD_VALID, payload: validStatus})
export const regSetEmailValue = (emailValue) => ({type: registrationActionsTypes.SET_EMAIL_VALUE, payload: emailValue})
export const regSetPasswordValue = (passwordValue) => ({type: registrationActionsTypes.SET_PASSWORD_VALUE, payload: passwordValue})
export const regDropData = (confirm=false) => {
    if(confirm){
        return ({type: registrationActionsTypes.DROP_REGISTRATION_DATA})
    }
    throw new Error("Confirmation for registration data drop not provided.")
}
export const regResetInputs = (request) => ({type: registrationActionsTypes.SET_RESET_REQUEST, payload: request})
export const regSetPasswordDirty = (dirty) => ({type: registrationActionsTypes.SET_PASSWORD_DIRTY, payload: dirty})
export const regSetEmailDirty = (dirty) => ({type: registrationActionsTypes.SET_EMAIL_DIRTY, payload: dirty})

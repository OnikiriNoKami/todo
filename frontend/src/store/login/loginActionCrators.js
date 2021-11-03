import loginActionsTypes from "../../utils/reduxActionType/loginActionsTypes";

export const logLoginUserRequest = (request) => ({
    type: loginActionsTypes.LOGIN_USER_REQUEST,
    payload: request,
});

export const logSetPasswordValid = (validStatus) => ({
    type: loginActionsTypes.LOGIN_PASSWORD_VALID,
    payload: validStatus,
});

export const logSetPasswordValue = (passwordValue) => ({
    type: loginActionsTypes.LOGIN_PASSWORD_VALUE,
    payload: passwordValue,
});
export const logDropData = (confirm = false) => {
    if (confirm) {
        return { type: loginActionsTypes.LOGIN_DROP_DATA };
    }
    throw new Error("Confirmation for login page data drop not provided.");
};
export const logResetInputs = (request) => ({
    type: loginActionsTypes.LOGIN_RESET_REQUEST,
    payload: request,
});
export const logSetPasswordDirty = (dirty) => ({
    type: loginActionsTypes.LOGIN_PASSWORD_DIRTY,
    payload: dirty,
});

export const logSetPasswordIsDefault = (isDefault) => ({
    type: loginActionsTypes.LOGIN_PASSWORD_IS_DEFAULT,
    payload: isDefault,
});

export const logSetNickNameDirty = (dirty) => ({
    type: loginActionsTypes.LOGIN_NICKNAME_DIRTY,
    payload: dirty,
});
export const logSetNickNameValue = (nickNameValue) => ({
    type: loginActionsTypes.LOGIN_NICKNAME_VALUE,
    payload: nickNameValue,
});
export const logSetNickNameValid = (validStatus) => ({
    type: loginActionsTypes.LOGIN_NICKNAME_VALID,
    payload: validStatus,
});

export const logSetNickNameIsDefault = (isDefault) => ({
    type: loginActionsTypes.LOGIN_NICKNAME_IS_DEFAULT,
    payload: isDefault,
});

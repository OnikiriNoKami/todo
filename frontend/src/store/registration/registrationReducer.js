import registrationActionsTypes from "../../utils/reduxActionType/registrationActionsTypes";

const defaultState = {
    createUserRequest: false,
    email: {
        valid: false,
        value: "",
        isDefault: true,
        dirty: false,
    },
    password: {
        valid: false,
        value: "",
        isDefault: true,
        dirty: false,
    },
    nickName: {
        valid: false,
        value: "",
        isDefault: true,
        dirty: false,
    },
    resetRequest: false,
};

const registrationReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case registrationActionsTypes.SET_CREATE_USER_REQUEST:
            return { ...state, createUserRequest: payload };
        case registrationActionsTypes.SET_RESET_REQUEST:
            return { ...state, resetRequest: payload };
        case registrationActionsTypes.SET_EMAIL_VALID:
            return { ...state, email: { ...state.email, valid: payload } };
        case registrationActionsTypes.SET_PASSWORD_DIRTY:
            return {
                ...state,
                password: { ...state.password, dirty: payload },
            };
        case registrationActionsTypes.SET_EMAIL_DIRTY:
            return { ...state, email: { ...state.email, dirty: payload } };
        case registrationActionsTypes.SET_PASSWORD_VALID:
            return {
                ...state,
                password: { ...state.password, valid: payload },
            };
        case registrationActionsTypes.SET_PASSWORD_VALUE:
            return {
                ...state,
                password: { ...state.password, value: payload },
            };
        case registrationActionsTypes.SET_EMAIL_VALUE:
            return { ...state, email: { ...state.email, value: payload } };
        case registrationActionsTypes.DROP_REGISTRATION_DATA:
            return { ...defaultState };
        case registrationActionsTypes.SET_NICKNAME_VALID:
            return {
                ...state,
                nickName: { ...state.nickName, valid: payload },
            };
        case registrationActionsTypes.SET_NICKNAME_VALUE:
            return {
                ...state,
                nickName: { ...state.nickName, value: payload },
            };
        case registrationActionsTypes.SET_NICKNAME_DIRTY:
            return {
                ...state,
                nickName: { ...state.nickName, dirty: payload },
            };
        case registrationActionsTypes.SET_EMAIL_IS_DEFAULT:
            return { ...state, email: { ...state.email, isDefault: payload } };
        case registrationActionsTypes.SET_PASSWORD_IS_DEFAULT:
            return { ...state, password: { ...state.password, isDefault: payload } };
        case registrationActionsTypes.SET_NICKNAME_IS_DEFAULT:
            return { ...state, nickName: { ...state.nickName, isDefault: payload } };

        default:
            return state;
    }
};

export default registrationReducer;

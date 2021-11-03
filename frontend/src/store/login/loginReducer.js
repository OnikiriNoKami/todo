import loginActionsTypes from "../../utils/reduxActionType/loginActionsTypes";

const defaultState = {
    loginUserRequest: false,
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

const loginReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case loginActionsTypes.LOGIN_USER_REQUEST:
            return { ...state, loginUserRequest: payload };
        case loginActionsTypes.LOGIN_RESET_REQUEST:
            return { ...state, resetRequest: payload };

        case loginActionsTypes.LOGIN_PASSWORD_DIRTY:
            return {
                ...state,
                password: { ...state.password, dirty: payload },
            };
        case loginActionsTypes.LOGIN_PASSWORD_VALID:
            return {
                ...state,
                password: { ...state.password, valid: payload },
            };
        case loginActionsTypes.LOGIN_PASSWORD_VALUE:
            return {
                ...state,
                password: { ...state.password, value: payload },
            };
        case loginActionsTypes.LOGIN_PASSWORD_IS_DEFAULT:
            return {
                ...state,
                password: { ...state.password, isDefault: payload },
            };
        case loginActionsTypes.LOGIN_NICKNAME_VALID:
            return {
                ...state,
                nickName: { ...state.nickName, valid: payload },
            };
        case loginActionsTypes.LOGIN_NICKNAME_VALUE:
            return {
                ...state,
                nickName: { ...state.nickName, value: payload },
            };
        case loginActionsTypes.LOGIN_NICKNAME_DIRTY:
            return {
                ...state,
                nickName: { ...state.nickName, dirty: payload },
            };
        case loginActionsTypes.LOGIN_NICKNAME_IS_DEFAULT:
            return {
                ...state,
                nickName: { ...state.nickName, isDefault: payload },
            };
        case loginActionsTypes.LOGIN_DROP_DATA:
            return { ...defaultState };
        default:
            return state;
    }
};

export default loginReducer;

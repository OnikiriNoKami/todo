import userActionsTypes from "../../utils/reduxActionType/userActionsTypes";

const defaultState = {
    id: "",
    email: "",
    phone: "",
    nickName: "",
    todos: [],
    token: "",
    loading: false,
};

const userReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case userActionsTypes.SET_USER_NICKNAME:
            return { ...state, nickName: payload };
        case userActionsTypes.SET_USER_ID:
            return { ...state, id: payload };
        case userActionsTypes.SET_USER_EMAIL:
            return { ...state, email: payload };
        case userActionsTypes.SET_USER_PHONE:
            return { ...state, phone: payload };
        case userActionsTypes.SET_USER_TODOS:
            return { ...state, todos: payload };
        case userActionsTypes.SET_USER_TOKEN:
            return { ...state, token: payload };
        case userActionsTypes.SET_USER_DATA:
            return {
                email: payload.email || state.email,
                phone: payload.phone || state.phone,
                nickName: payload.nickName || state.nickName,
                todos: payload.todos || state.todos,
                token: payload.token || state.token,
                id: payload.id || state.id,
            };
        case userActionsTypes.SET_USER_LOADING:
            return { ...state, loading: payload }
        case userActionsTypes.ADD_USER_TODO:
            return { ...state, todos: [...state.todos, payload] };
        case userActionsTypes.DROP_USER_DATA:
            return { ...defaultState };

        default:
            return state;
    }
};

export default userReducer;

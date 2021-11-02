import todoActionsTypes from "../../utils/reduxActionType/todoActionsTypes";

const defaultState = {
    id: "",
    title: "",
    description: "",
    userId: "",
    statusId: "",
    beginDate: "",
    endDate: "",
};

const singleTodoReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case todoActionsTypes.SET_TODO_DATA:
            return {
                id: payload.id || state.id,
                title: payload.title || state.title,
                descriotion: payload.description || state.description,
                userId: payload.userId || state.userId,
                statusId: payload.statusId || state.statusId,
                beginDate: payload.beginDate || state.beginDate,
                endDate: payload.endDate || state.endDate,
            };
        case todoActionsTypes.SET_TODO_ID:
            return { ...state, id: payload }
        case todoActionsTypes.SET_TODO_TITLE:
            return { ...state, title: payload }
        case todoActionsTypes.SET_TODO_DESCRIPTION:
            return { ...state, description: payload }
        case todoActionsTypes.SET_TODO_USERID:
            return { ...state, userId: payload }
        case todoActionsTypes.SET_TODO_STATUSID:
            return { ...state, statusId: payload }
        case todoActionsTypes.SET_TODO_BEGINDATE:
            return { ...state, beginDate: payload }
        case todoActionsTypes.SET_TODO_ENDDATE:
            return { ...state, endDate: payload }
        case todoActionsTypes.DROP_TODO_DATA:
            return { ...defaultState }


        default:
            return state;
    }
};

export default singleTodoReducer;

import todoCreationDateActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationDateActionsTypes";

const defaultState = {
    beginDate: new Date(),
    beginDateIsDirty: false,
    endDate: new Date(),
    endDateIsDirty: false,
};

const todoCreationDateReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case todoCreationDateActionsTypes.SET_TODO_CREATION_ENDDATE:
            return { ...state, endDate: payload };
        case todoCreationDateActionsTypes.SET_TODO_CREATION_ENDDATE_IS_DIRTY:
            return { ...state, endDateIsDirty: payload };
        case todoCreationDateActionsTypes.SET_TODO_CREATION_BEGINDATE_IS_DIRTY:
            return { ...state, beginDateIsDirty: payload };
        case todoCreationDateActionsTypes.SET_TODO_CREATION_BEGINDATE:
            return { ...state, beginDate: payload };
        case todoCreationDateActionsTypes.ADD_DAY_TODO_CREATION_ENDDATE:
            return {
                ...state,
                endDate: new Date(
                    state.endDate.setDate(state.endDate.getDate() + payload)
                ),
            };
        case todoCreationDateActionsTypes.RESET_TODO_CREATION_DATE_DATA:
            return { ...defaultState };
        default:
            return state;
    }
};

export default todoCreationDateReducer;

import todoCreationInputsActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationInputsActionsTypes";

const defaultState = {
    title: {
        valid: false,
        value: "",
        isDefault: true,
        dirty: false,
    },
    description: {
        valid: false,
        value: "",
        isDefault: true,
        dirty: false,
    },
};

const todoCreationInputsReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case todoCreationInputsActionsTypes.TODO_CREATION_TITLE_VALID:
            return { ...state, title: { ...state.title, valid: payload } };
        case todoCreationInputsActionsTypes.TODO_CREATION_TITLE_VALUE:
            return { ...state, title: { ...state.title, value: payload } };
        case todoCreationInputsActionsTypes.TODO_CREATION_TITLE_IS_DEFAULT:
            return { ...state, title: { ...state.title, isDefault: payload } };
        case todoCreationInputsActionsTypes.TODO_CREATION_TITLE_DIRTY:
            return { ...state, title: { ...state.title, dirty: payload } };

        case todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_VALID:
            return { ...state, description: { ...state.description, valid: payload } };
        case todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_VALUE:
            return { ...state, description: { ...state.description, value: payload } };
        case todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_IS_DEFAULT:
            return { ...state, description: { ...state.description, isDefault: payload } };
        case todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_DIRTY:
            return { ...state, description: { ...state.description, dirty: payload } };

        case todoCreationInputsActionsTypes.TODO_CREATION_DROP_INPUT_DATA:
            return { ...defaultState }
        default:
            return state;
    }
};

export default todoCreationInputsReducer;

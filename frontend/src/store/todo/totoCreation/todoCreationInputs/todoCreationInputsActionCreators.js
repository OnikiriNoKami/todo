import todoCreationInputsActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationInputsActionsTypes";

export const todoCreationSetTitleDirty = (dirty) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_TITLE_DIRTY,
    payload: dirty,
});
export const todoCreationSetTitleValue = (titleValue) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_TITLE_VALUE,
    payload: titleValue,
});
export const todoCreationSetTitleValid = (validStatus) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_TITLE_VALID,
    payload: validStatus,
});

export const todoCreationSetTitleIsDefault = (isDefault) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_TITLE_IS_DEFAULT,
    payload: isDefault,
});

export const todoCreationSetDescriptionDirty = (dirty) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_DIRTY,
    payload: dirty,
});
export const todoCreationSetDescriptionValue = (descriptionValue) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_VALUE,
    payload: descriptionValue,
});
export const todoCreationSetDescriptionValid = (validStatus) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_VALID,
    payload: validStatus,
});

export const todoCreationSetDescriptionIsDefault = (isDefault) => ({
    type: todoCreationInputsActionsTypes.TODO_CREATION_DESCRIPTION_IS_DEFAULT,
    payload: isDefault,
});

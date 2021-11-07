import todoCreationDateActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationDateActionsTypes";

export const setBeginDate = (beginDate) => ({type: todoCreationDateActionsTypes.SET_TODO_CREATION_BEGINDATE, payload: beginDate});
export const setEndDate = (endDate) => ({type: todoCreationDateActionsTypes.SET_TODO_CREATION_ENDDATE, payload: endDate})
export const addDayToEndDate = (days) => ({type: todoCreationDateActionsTypes.ADD_DAY_TODO_CREATION_ENDDATE, payload: days})
export const resetDateData = (confirm=false) => {
    if(confirm){
        return ({type: todoCreationDateActionsTypes.RESET_TODO_CREATION_DATE_DATA})
    }
    throw new Error("Confirmation for date data drop not provided.");
}
export const setBeginDateIsDirty = (isDirty) => ({type: todoCreationDateActionsTypes.SET_TODO_CREATION_BEGINDATE_IS_DIRTY, payload: isDirty})
export const setEndDateIsDirty = (isDirty) => ({type: todoCreationDateActionsTypes.SET_TODO_CREATION_ENDDATE_IS_DIRTY, payload: isDirty})


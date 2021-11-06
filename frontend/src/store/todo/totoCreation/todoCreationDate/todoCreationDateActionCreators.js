import todoCreationDateActionsTypes from "../../../../utils/reduxActionType/todoCreation/todoCreationDateActionsTypes";

export const setBeginDate = (beginDate) => ({type: todoCreationDateActionsTypes.SET_TODO_CREATION_BEGINDATE, payload: beginDate});
export const setEndDate = (endDate) => ({type: todoCreationDateActionsTypes.SET_TODO_CREATION_ENDDATE, payload: endDate})
export const addDayToEndDate = (days) => ({type: todoCreationDateActionsTypes.ADD_DAY_TODO_CREATION_ENDDATE, payload: days})

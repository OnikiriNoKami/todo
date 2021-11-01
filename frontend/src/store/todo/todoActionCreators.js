import todoActionsTypes from "../../utils/reduxActionType/todoActionsTypes";

const todoActions = {
    setData: ({
        title,
        description,
        userId,
        statusId,
        beginDate,
        endDate,
    }) => ({
        type: todoActionsTypes.SET_TODO_DATA,
        payload: { title, description, userId, statusId, beginDate, endDate },
    }),
    setTitle: (title) => ({type: todoActionsTypes.SET_TODO_TITLE, payload: title }),
    setDescription: (description) => ({type: todoActionsTypes.SET_TODO_DESCRIPTION, payload: description }),
    setUserId: (userId) => ({type: todoActionsTypes.SET_TODO_USERID, payload: userId }),
    setStatusId: (statusId) => ({type: todoActionsTypes.SET_TODO_STATUSID, payload: statusId }),
    setBeginDate: (beginDate) => ({type: todoActionsTypes.SET_TODO_BEGINDATE, payload: beginDate }),
    setEndDate: (endDate) => ({type: todoActionsTypes.SET_TODO_ENDDATE, payload: endDate }),
    setId: (id) => ({type: todoActionsTypes.SET_TODO_ID, payload: id}),
    dropData: (confirm) => {
        if(confirm){
            return {type: todoActionsTypes.DROP_TODO_DATA}
        }
        throw new Error("Confirmation for todo data drop not provided.")
    },
};

export default todoActions;

import statusActionsTypes from "../../utils/reduxActionType/statusActionsTypes";

// SET_STATUS_ID: 'set_status_id',
//     SET_STATUS_TITLE: 'set_status_title',
//     SET_STATUS_DATA: 'set_status_data',
//     DROP_STATUS_DATA: 'drop_status_data',

const statusActions = {
    setData: ({ id, title }) => ({
        type: statusActionsTypes.SET_STATUS_DATA,
        payload: { id, title },
    }),
    setId: (id) => ({type: statusActionsTypes.SET_STATUS_ID, payload: id}),
    setTitle: (title) => ({type: statusActionsTypes.SET_STATUS_TITLE, payload: title }),
    dropData: (confirm=false) => {
        if(confirm){
            return ({type: statusActionsTypes.DROP_STATUS_DATA})
        }
        throw new Error("Confirmation for status data drop not provided.")
    }
};

export default statusActions;

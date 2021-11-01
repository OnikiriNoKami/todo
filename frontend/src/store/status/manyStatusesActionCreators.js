import { statusesActionsTypes } from "../../utils/reduxActionType/statusActionsTypes";

const statusesActions = {
    setStatuses: (statuses) => ({type: statusesActionsTypes.SET_STATUSES, payload: statuses }),
    setLoading: (loading) => ({type: statusesActionsTypes.SET_STATUSES_LOADING, payload: loading }),
    addStatus: (status) => ({type: statusesActionsTypes.ADD_STATUS, payload: status }),
    dropStatuses: (confirm=false) => {
        if(confirm){
            return ({type: statusesActionsTypes.DROP_STATUSES})
        }
        throw new Error("Confirmation for statuses data drop not provided.")
    }
}

export default statusesActions;
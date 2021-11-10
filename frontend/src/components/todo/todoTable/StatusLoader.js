import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { getStatusesQuery } from "../../../GraphQL/queries/statusQueries";
import statusesActions from "../../../store/status/manyStatusesActionCreators";

export default function StatusLoader() {
    const dispatch = useDispatch();
    const [loadStatuses, {data, loading}] = useLazyQuery(getStatusesQuery);

    useEffect(()=>{
        loadStatuses();
    }, [])

    useEffect(()=>{
        if(data){
            dispatch(statusesActions.setStatuses(data.statuses))
        }
    }, [data])
    return null
}

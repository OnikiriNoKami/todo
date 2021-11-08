import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import paginationTodoActions from "../../../../store/pagination/paginationTodoActions";

export default function PaginationMonitor() {
    const dispatch = useDispatch();
    const [prevPage, setPrevPage] = useState(1);
    const totalCount = useSelector(state => state.pagination.todoPagination.totalCount)
    const limit = useSelector(state => state.pagination.todoPagination.limit)
    const pagination = useSelector((state) => state.pagination.todoPagination);

    useEffect(() => {
        if (prevPage !== pagination.currentPage) {
            setPrevPage(pagination.currentPage);
            dispatch(paginationTodoActions.setChangeRequest(true));
        }
    }, [pagination.currentPage, dispatch]);

    useEffect(()=>{
        dispatch(
            paginationTodoActions.setTotalPages(
                Math.floor(pagination.totalCount / pagination.limit) + 1
            )
        );
    }, [totalCount, limit])
    return null;
}

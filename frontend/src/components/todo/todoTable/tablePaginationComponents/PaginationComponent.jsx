import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import paginationTodoActions from "../../../../store/pagination/paginationTodoActions";
import usePaginationStyles from "../../../../styles/pagination/paginationStyles";
import PaginationMonitor from "./PaginationMonitor";

export default function PaginationComponent() {
    const styles = usePaginationStyles();
    const dispatch = useDispatch();
    const currentPage = useSelector(state=>state.pagination.todoPagination.currentPage);
    const totalPages = useSelector(state=>state.pagination.todoPagination.totalPages);

    const handleChange = (event, value) => {
        dispatch(paginationTodoActions.setPage(value));
    }

    return (
        <>
        <PaginationMonitor />
        <Pagination className={styles.marginTop} classes={{ul: styles.ul}} count={totalPages} page={currentPage} onChange={handleChange} />
        </>
    );
}

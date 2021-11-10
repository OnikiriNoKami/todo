import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import todosActions from "../../../store/todo/manyTodosActionCreators";
import { getTodoByUserIdPaginated } from "../../../GraphQL/queries/todoQueries";
import paginationTodoActions from "../../../store/pagination/paginationTodoActions";

export default function TodosLoader() {
    const dispatch = useDispatch();
    const [fetchTodos, { error, loading, data, refetch }] = useLazyQuery(
        getTodoByUserIdPaginated
    );
    const userId = useSelector((state) => state.user.id);
    const limit = useSelector((state) => state.pagination.todoPagination.limit);
    const paginationRequest = useSelector(
        (state) => state.pagination.todoPagination.changeRequest
    );
    const page = useSelector(
        (state) => state.pagination.todoPagination.currentPage
    );

    useEffect(() => {
        fetchTodos({
            variables: {
                userId,
                limit,
                page,
            },
        });
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(
                paginationTodoActions.setPaginationDataTogether({
                    hasPrev: data.getTodosByUserId.pagination.hasPrev,
                    hasNext: data.getTodosByUserId.pagination.hasNext,
                    totalCount: data.getTodosByUserId.pagination.totalCount,
                })
            );
            dispatch(todosActions.setTodos(data.getTodosByUserId.todos));
        }
    }, [data]);

    useEffect(() => {
        if (paginationRequest) {
            refetch({
                userId,
                limit,
                page,
            });
            dispatch(paginationTodoActions.setChangeRequest(false));
        }
    }, [paginationRequest]);

    return null;
}

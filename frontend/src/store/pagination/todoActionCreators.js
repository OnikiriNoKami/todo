import paginationActions from "../../utils/reduxActionType/paginationActions";

const paginationTodoActions = {
    setLimit: (limit) => ({
        type: paginationActions.SET_TODO_LIMIT,
        payload: limit,
    }),
    setOffset: (offset) => ({
        type: paginationActions.SET_TODO_OFFSET,
        payload: offset,
    }),
    setPage: (page) => ({
        type: paginationActions.SET_TODO_PAGE,
        payload: page,
    }),
    setHasPrevious: (hasPrevious) => ({
        type: paginationActions.SET_TODO_HAS_PREVIOUS,
        payload: hasPrevious,
    }),
    setHasNext: (hasNext) => ({
        type: paginationActions.SET_TODO_HAS_NEXT,
        paylode: hasNext,
    }),
    setPaginationDataTogether: ({
        limit,
        offset,
        page,
        hasPrevious,
        hasNext,
    }) => ({
        type: paginationActions.SET_TODO_PAGINATION_DATA_TOGETHER,
        payload: { limit, offset, page, hasPrevious, hasNext },
    }),
};

export default paginationTodoActions;

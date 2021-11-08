import paginationActions from "../../utils/reduxActionType/paginationActions";

export const paginationTodoChangeRequest = (request) => ({type: paginationActions.SET_TODO_CHANGE_REQUEST, payload: request})

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
        hasPrev,
        hasNext,
        totalCount,
    }) => ({
        type: paginationActions.SET_TODO_PAGINATION_DATA_TOGETHER,
        payload: { limit, offset, page, hasPrev, hasNext, totalCount },
    }),
    setTotalCount: (totalCount) => ({type: paginationActions.SET_TODO_TOTAL_COUNT, payload: totalCount}),
    setTotalPages: (totalPages) => ({type: paginationActions.SET_TODO_TOTAL_PAGES, payload: totalPages}),
    setChangeRequest: paginationTodoChangeRequest,
};

export default paginationTodoActions;

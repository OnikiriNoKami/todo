import paginationActions from "../../utils/reduxActionType/paginationActions";

const defaultTodoPaginationState = {
    limit: 25,
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    offset: 0,
    hasPrev: false,
    hasNext: false,
};

const todoPaginationReducer = (
    state = defaultTodoPaginationState,
    { type, payload }
) => {
    switch (type) {
        case paginationActions.SET_TODO_OFFSET:
            return { ...state, offset: payload };
        case paginationActions.SET_TODO_TOTAL_COUNT:
            return { ...state, totalCount: payload };
        case paginationActions.SET_TODO_TOTAL_PAGES:
            return { ...state, totalPages: payload };
        case paginationActions.SET_TODO_LIMIT:
            return { ...state, limit: payload };
        case paginationActions.SET_TODO_PAGE:
            return { ...state, currentPage: payload };
        case paginationActions.SET_TODO_HAS_NEXT:
            return { ...state, hasNext: payload };
        case paginationActions.SET_TODO_HAS_PREVIOUS:
            return { ...state, hasPrev: payload };
        case paginationActions.SET_TODO_PAGINATION_DATA_TOGETHER:
            return {
                ...state,
                offset: payload.offset || state.offset,
                limit: payload.limit || state.limit,
                currentPage: payload.page || state.currentPage,
                hasNext: payload.hasNext || state.hasNext,
                hasPrev: payload.hasPrevious || state.hasPrev,
                totalPages: payload.totalPages || state.totalPages,
                totaCount: payload.totalCount || state.totalCount,
            };

        default:
            return state;
    }
};

export default todoPaginationReducer;

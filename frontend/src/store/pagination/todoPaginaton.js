import paginationActions from "../../utils/reduxActionType/paginationActions";

const defaultTodoPaginationState = {
    limit: 25,
    currentPage: 1,
    offset: 0,
    hasPrevious: false,
    hasNext: false,
};

const todoPaginationReducer = (
    state = defaultTodoPaginationState,
    { type, payload }
) => {
    switch (type) {
        case paginationActions.SET_TODO_OFFSET:
            return { ...state, offset: payload };
        case paginationActions.SET_TODO_LIMIT:
            return { ...state, limit: payload };
        case paginationActions.SET_TODO_PAGE:
            return { ...state, currentPage: payload };
        case paginationActions.SET_TODO_HAS_NEXT:
            return { ...state, hasNext: payload };
        case paginationActions.SET_TODO_HAS_PREVIOUS:
            return { ...state, hasPrevious: payload };
        case paginationActions.SET_TODO_PAGINATION_DATA_TOGETHER:
            return {
                ...state,
                offset: payload.offset || state.offset,
                limit: payload.limit || state.limit,
                currentPage: payload.page || state.currentPage,
                hasNext: payload.hasNext || state.hasNext,
                hasPrevious: payload.hasPrevious || state.hasPrevious,
            };

        default:
            return state;
    }
};

export default todoPaginationReducer;
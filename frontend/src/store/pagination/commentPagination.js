import paginationActions from "../../utils/reduxActionType/paginationActions";

const defaultCommentPaginationState = {
    limit: 25,
    currentPage: 1,
    offset: 0,
    hasPrevious: false,
    hasNext: false,
};

const commentPaginationReducer = (
    state = defaultCommentPaginationState,
    { type, payload }
) => {
    switch (type) {
        case paginationActions.SET_COMMENT_OFFSET:
            return { ...state, offset: payload };
        case paginationActions.SET_COMMENT_LIMIT:
            return { ...state, limit: payload };
        case paginationActions.SET_COMMENT_PAGE:
            return { ...state, currentPage: payload };
        case paginationActions.SET_COMMENT_HAS_NEXT:
            return { ...state, hasNext: payload };
        case paginationActions.SET_COMMENT_HAS_PREVIOUS:
            return { ...state, hasPrevious: payload };
        case paginationActions.SET_COMMENT_PAGINATION_DATA_TOGETHER:
            return {
                ...state,
                offset: payload.offset || state.offset,
                limit: payload.limit || state.limit,
                currentPage: payload.currentPage || state.currentPage,
                hasNext: payload.hasNext || state.hasNext,
                hasPrevious: payload.hasPrevious || state.hasPrevious,
            };

        default:
            return state;
    }
};

export default commentPaginationReducer;
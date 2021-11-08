const ComposePagination = ({limit, page, totalCount}) => {
    const hasNext = totalCount-(limit*page) > 0 ? true : false;
    const hasPrev = page > 1 ? true : false;
    return {
        limit: limit,
        page: page,
        hasNext: hasNext,
        hasPrev: hasPrev,
        totalCount,
    }
}

module.exports = ComposePagination;
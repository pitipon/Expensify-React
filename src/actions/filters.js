
// Filter - Action Generators
const setFilter = (
    {
        text = '',
        sortBy = '',
        startDate = undefined,
        endDate = undefined
    } = {}
) => ({
    type: 'SET_FILTER',
    filter: {
        text,
        sortBy,
        startDate,
        endDate
    }
}) 

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'  
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'  
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

module.exports = {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
}
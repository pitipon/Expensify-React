import moment from 'moment';

// get visible expenses
const getVisibleExpenses = (expenses, filter) => {
    const { text, sortBy, startDate, endDate } = filter;

    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        let startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true;
        let endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true;
        let textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleExpenses;
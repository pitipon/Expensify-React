// get visible expenses
const getVisibleExpenses = (expenses, filter) => {
    const { text, sortBy, startDate, endDate } = filter;

    return expenses.filter((expense) => {
        let startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        let endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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
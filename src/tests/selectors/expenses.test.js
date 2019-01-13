import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0).valueOf()
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[1]]);
})

test('should filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter);

    expect(result).toEqual([expenses[2], expenses[0]]);
})


test('should filter by endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filter);

    expect(result).toEqual([expenses[0], expenses[1]]);
})


test('should sort by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter);

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
})

test('should sort by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter);

    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
})
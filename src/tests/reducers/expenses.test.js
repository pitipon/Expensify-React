import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@UNIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Macbook',
        note: '',
        createdAt: 20000,
        amount: 40000
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'Food',
            note: 'salmon',
            amount: 200
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state[1].description).toEqual('Food');
    expect(state[1].note).toEqual('salmon');
    expect(state[1].amount).toEqual(200);
})
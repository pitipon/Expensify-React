import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// mock
const demoState = {
    expenses: [{
        id: '232321ff2',
        description: 'January Rent',
        note: 'Final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

// 
// ACTION GENERATORS
// 

// Expense - Action Generators
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt= 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

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


// 
// REDUCERS
// 

// Expenses Reducer
const expenseReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}

// Filters Reducer
const defaultFilterReducer = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = defaultFilterReducer, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {...action.filter}
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}



// 
// INIT & SUBSCRIBE & DISPATCH
// 




// get visible expenses
const getVisibleExpenses = (expenses, filter) => {
    const { text, sortBy, startDate, endDate } = filter;

    return expenses.filter((expense) => {
        let startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        let endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        let textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);
console.log('Init Store')
console.log(store.getState())

// Subscribe
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(444,visibleExpenses);
})


// dispatch
store.dispatch(
    addExpense({
        description: 'Rent',
        amount: 100,
        createdAt: 1000
    })
)

store.dispatch(
    addExpense({
        description: 'Coffee',
        amount: 300,
        createdAt: -1000
    })
)

// let expenses = store.getState().expenses;

// store.dispatch(
//     editExpense(
//         expenses[0].id,
//         { amount: 500 }
//     )
// )

store.dispatch( setTextFilter('rent') )

// store.dispatch( sortByAmount() )

// store.dispatch( sortByDate() )

store.dispatch( setStartDate(125) ) // 125

// store.dispatch( setStartDate() ) // undefined

store.dispatch( setEndDate(1250) ) // 1250


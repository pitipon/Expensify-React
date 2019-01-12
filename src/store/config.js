import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';


export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer
        })
    );

    return store;
}
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
// Redux store
import configStore from './store/config';
// Redux actions
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
// Redux selectors
import getVisibleExpenses from './selectors/expenses';
// style
import 'normalize.css/normalize.css';
import './styles/style.scss'


// create redux store
const store = configStore();
console.log(store.getState());

// Subscribe
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(444,visibleExpenses);
})


// dispatch
store.dispatch( 
    addExpense({
        description: 'Water bill',
        amount: 100,
        createdAt: 100
    }) 
);

store.dispatch(
    addExpense({
        description: 'Gas bill',
        amount: 200,
        createdAt: 101
    })
)

store.dispatch(
    setTextFilter('bill')
)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

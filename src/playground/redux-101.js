import { createStore } from 'redux';

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducer
// 1. Reducers are pure functions
// 2. Never change state or action

const reducers = (state = { count: 0 }, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            const new_state = typeof action.count === 'number' ? { count: action.count } : state
            return new_state; 
        case 'ZERO':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore( reducers );

const unsubscribe = store.subscribe( () => {
    console.log('subscribe')
    console.log(store.getState())
})


// increment the count 
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())


// increment the count 
store.dispatch( resetCount() )

// unsubscribe
// unsubscribe();

// decrement the count 
store.dispatch( decrementCount({ decrementBy: 5 }))

store.dispatch( decrementCount() )

// Set by Number
store.dispatch( setCount({ count: 100 }))


const { createStore } = require('redux');

// Reducer function
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create Redux store with the reducer
const store = createStore(counterReducer);

// Subscribe to store changes and log current state
store.subscribe(() => {
  console.log('Current state:', store.getState());
});

// Dispatch actions to the store
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' }); 

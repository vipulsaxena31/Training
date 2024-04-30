const {createStore} = require('redux')

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;

const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

const toggleTodo =  id => ({
    type: TOGGLE_TODO,
    id
});


const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
            todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
};

const store = createStore(todosReducer);

// Subscribe to store changes and log current state
store.subscribe(() => {
  console.log('Current todos:', store.getState());
});

// Dispatch actions to the store
store.dispatch(addTodo('Learn REDUX'));
store.dispatch(addTodo('Implementing REDUX'));
store.dispatch(addTodo('Creating redux project'));
store.dispatch(toggleTodo(2));
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT: {
            return {
                ...state,
                todoInput: action.payload
            }
        }

        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }

        case DELETE_TODO: {
            const newJob = [...state.todos];
            newJob.splice(action.payload, 1)
            return {
                ...state,
                todos: newJob
            }
        }

        case EDIT_TODO: {
            const newJob = [...state.todos];
            newJob[action.payload] = state.todoInput;
            return {
                ...state,
                todos: newJob
            }
        }

        default: {
            throw new Error('Invalid Action')
        }
    }
}

export { initState }

export default reducer;
import { createStore } from "redux";

// export const addTodo = (inputValue) => {
//     // there is no other logic
//     return({ type: "ADD_TODO", data: inputValue }) 
// }

export const addTodo = (inputValue) => ({ type: "ADD_TODO", data: inputValue })
export const completeTodo = (id) => ({ type: "COMPLETE_TODO", data: id })
export const deleteTodo = (id) => ({ type: "DELETE_TODO", data: id })

const INITIAL_STATE = []

const ToDoListReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {
                id: state.length,
                todo: action.data,
                completed: false
            }
            return [...state, newTodo];

        case "COMPLETE_TODO":
            const newTodoList = state.map(item => {
                if (item.id === action.data) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
            return newTodoList;

        case "DELETE_TODO":
            return state.filter(item => (item.id !== action.data))
        default:
            return state
    }

}


export const store = createStore(ToDoListReducer);
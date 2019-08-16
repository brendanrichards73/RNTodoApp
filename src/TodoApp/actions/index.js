import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionTypes';
import generateNextId from './generateNextId'

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: generateNextId(),
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})
import * as types from './actionTypes';
import * as actions from './index';

let mockNextTodoId = 0

jest.mock('./generateNextId', () => () => {
    return mockNextTodoId
})

describe('actions', () => {
    test('should create an action to add a todo', () => {
        mockNextTodoId = 1

        expect(actions.addTodo('Task 1')).toEqual({
            type: types.ADD_TODO,
            id: 1,
            text: 'Task 1'
        })
    })

    // test('should create an action to toggle a todo', () => {
    //     const id = '1',
    //     const toggleAction = {
    //         type: types.TOGGLE_TODO,
    //         id
    //     }
    //     expect(actions.toggleTodo).toEqual(toggleAction)
    // })

})
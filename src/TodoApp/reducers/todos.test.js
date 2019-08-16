import todosReducer from './todos'

describe('Todo tests', () => {
    test('Add a todo', () => {
        const nextState = todosReducer({}, {type: 'ADD_TODO', id: '1', text: 'I need to cut the grass', completed: false})
        const firstTodo = nextState['1']

        expect(firstTodo).toBeTruthy()
        expect(firstTodo.id).toEqual('1')
        expect(firstTodo.text).toEqual('I need to cut the grass')
        expect(firstTodo.completed).toBeFalsy()
    })

    test('Toggle a todo', () => {
        const toggleState = todosReducer({
            '1': {
                id: '1',
                text: 'Buy a paper',
                completed: false
            }
        }, {type: 'TOGGLE_TODO', id: '1'})

        const todo = toggleState['1']

        expect(todo.completed).toBeTruthy()        
    })

    test('Return default state', () => {
        const state = todosReducer(undefined, {});
        
        expect(state).toEqual({});
    })
})
import AddTodo from './AddTodo'
import React from 'react'
import renderer from 'react-test-renderer'

describe('Add Todo', () => {
    test('render default', () => {
        const tree = renderer.create(<AddTodo />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
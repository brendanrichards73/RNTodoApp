import TextBox from './TextBox'
import React from 'react'
import renderer from 'react-test-renderer'

describe('TextBox', () => {
    test('render default', () => {
        const tree = renderer.create(
            <TextBox value={'I need to cut the grass'}/>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})
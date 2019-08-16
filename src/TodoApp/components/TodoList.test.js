import TodoList from './TodoList';
import React from 'react';
import { shallow } from 'enzyme';

test('TodoList renders the text of a todo', () => {
    const todo = {id: 1, text: 'Buy milk', completed: false}
    const todo2 = {id: 2, text: 'Buy milk 2', completed: false}

    const wrapper = shallow(<TodoList todos={[todo, todo2]} />);
    expect(wrapper.findWhere(node => {
        console.log('node: ', node.text())
        return node.text() === 'Buy milk'
    })).toExist()
    
});
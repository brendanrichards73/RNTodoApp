import TodoList from './TodoList';
import React from 'react';
import { mount } from 'enzyme';



test('TodoList renders the text of a todo', () => {
    const todo = { id: 1, text: 'Buy bread', completed: false};
    const wrapper = mount(
        <TodoList todo={todo} />
    );

    const p = wrapper.find('.todo-title');
    expect(p.todo.text).toBe('Buy bread')
});
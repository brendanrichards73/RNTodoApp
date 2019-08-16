import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleTodo }) => {
    const todosKeys = Object.keys(todos)

    return (<View testID = 'todo-item' style={{ padding: 20,}}>
        {
            todosKeys.map(todoKey => {
                const todo = todos[todoKey]
                
                return (<TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text testID = 'todo-title' style={{fontSize: 24,
                textDecorationLine:todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
                </TouchableOpacity>)
            }
        
        )}
    </View>)
}

export default TodoList;

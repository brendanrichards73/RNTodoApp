import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';




const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
            <View style={{ padding: 20,}}>
                {todos.map(todo => 
                <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                    <Text style={{fontSize: 24,
                    textDecorationLine:todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
                </TouchableOpacity>,
                )}
                
            
            </View>
        )

export default TodoList;

// <Button style={{ width: 10, height: 10, backgroundColor: 'red' }} onPress={() => deleteTodo(id)}>Delete</Button>
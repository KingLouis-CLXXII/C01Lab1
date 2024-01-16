import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from "uuid";
import AddTask from './AddTask';

const ToDoList = ({ initialTasks }) => {

    const [toDos, setToDos] = useState(initialTasks.map((value) => ({id: uuidv4(), title: value })));

    const addToDo = ( newTitle ) => {
        setToDos((prevToDos) => [
            ...prevToDos,
            {
                id: uuidv4(),
                title: newTitle
            }
        ])
    }
    
    const removeToDo = (id) => {
        setToDos(toDos => toDos.filter((task) => task.id !== id))
    }

    return (
    <View style={styles.todoListContainer}>
      {toDos.map((task) => (
        <View style={styles.todoItem} key={task.id}>
            <Text >Task: {task.title}</Text>
            <Button title="Remove" onPress={() => removeToDo(task.id)} />

        </View>
      ))}
      <AddTask onAddTask = {addToDo}/>
    </View>
  );
};

ToDoList.defaultProps = {
    initialTasks: [],
}

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});
  
export default ToDoList;
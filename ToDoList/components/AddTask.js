import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const AddTask = ({ onAddTask }) => {

    const [task, setTask] = useState("");

    const handleAddTask = () => {
        if(task.trim() !== "") {
            onAddTask(task)
            setTask("")
        }
    }

    return (
        <View style={styles.addTodoForm}>
            <TextInput style={styles.input} value={task} onChangeText={(text) => setTask(text)}/> 
            <Button title="Add Task" onPress={handleAddTask} />

        </View>
    )
    

};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;
import React, { useContext, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import TaskPostForm from '../components/TaskPostForm';
import { Context } from '../context/TaskContext';

const CreateScreen = ({ navigation }) => {
    const { addTask } = useContext(Context);

    return (
        <TaskPostForm onSubmit={(title, content) => {
            addTask(title,content, () => navigation.navigate('Home'));
        }} 
        />
    )
};

const styles = StyleSheet.create({
    
});

export default CreateScreen;

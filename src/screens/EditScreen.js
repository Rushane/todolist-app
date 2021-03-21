import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import {Context} from '../context/TaskContext';
import TaskPostForm from '../components/TaskPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editTask } = useContext(Context);

    const taskPost = state.find(
        taskPost => taskPost.id === id
    );

    return <TaskPostForm
                initialValues={{title: taskPost.title, content: taskPost.content}}
                onSubmit={(title, content) => { 
                    editTask(id, title, content, () => navigation.pop());
            }} 
    />
};

const styles = StyleSheet.create({});

export default EditScreen;
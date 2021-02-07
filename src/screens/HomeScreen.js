import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {Context} from '../context/TaskContext';
 

const HomeScreen = () => {
    const {state, addTasks} = useContext(Context);

    return (<View>
        <Text>Home screen</Text>
        <Button title="Add Task" onPress={addTasks}/>
        <FlatList 
            data={state}
            keyExtractor={(taskPosts) => taskPosts.title}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        
        />
    </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
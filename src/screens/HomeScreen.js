import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import TaskContext from '../context/TaskContext';
 

const HomeScreen = () => {
    const taskPosts = useContext(TaskContext);

    return (<View>
        <Text>Home screen</Text>
        <FlatList 
            data={taskPosts}
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
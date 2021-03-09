import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/TaskContext';
import {Feather} from '@expo/vector-icons';
 

const HomeScreen = ({navigation}) => {
    const {state, addTasks, deleteTask} = useContext(Context);

    return (<View>
        <FlatList 
            data={state}
            keyExtractor={(taskPosts) => taskPosts.title}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })} >
                <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                    <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
                </View>
                </TouchableOpacity> 
            }}
        
        />
    </View>
    );
};

HomeScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity> 
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
    }
});

export default HomeScreen;
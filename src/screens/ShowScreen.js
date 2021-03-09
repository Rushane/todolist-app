import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/TaskContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const taskPost = state.find(
    taskPost  => taskPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{taskPost.title}</Text>
      <Text>{taskPost.content}</Text>
    </View>
  );
};


ShowScreen.navigationOptions = ({navigation})  => {
    return {
        headerRight: () =>
          <TouchableOpacity onPress={() => navigation.navigate('Edit')}> 
              <EvilIcons name="pencil" size={35} />
          </TouchableOpacity> 
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;

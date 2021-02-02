import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
      Home: HomeScreen 
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Tasks'
    }
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};

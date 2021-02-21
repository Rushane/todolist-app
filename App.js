import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from './src/context/TaskContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator({
      Home: HomeScreen,
      Show: ShowScreen,
      Create: CreateScreen
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Tasks'
    }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
        <App />
    </Provider>
  );
};

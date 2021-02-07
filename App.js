import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from './src/context/TaskContext';

const navigator = createStackNavigator({
      Home: HomeScreen 
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

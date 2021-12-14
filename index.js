
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/modules/redux/store/store';

const startScreen = () => {

    return(
        <Provider store={store}>
        <NavigationContainer>
        <App/>
        </NavigationContainer>
        </Provider>  
    )
}
AppRegistry.registerComponent(appName, () => startScreen);

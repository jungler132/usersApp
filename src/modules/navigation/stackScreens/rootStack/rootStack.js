import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import UserDetailScreenStack from '../UserDetailScreenStack/index';
import UserPageListStack from '../UserPageListStack/index';
import UserEditScreenStack from '../UserEditScreenStack/index';


const Stack = createStackNavigator();


function RootStack() {

    return (
        <Stack.Navigator headerMode={false} initialRouteName={'LaunchScreen'}>
            <Stack.Screen options={{headerShown:false}} name='UserPageList' component={UserPageListStack}/>
            <Stack.Screen options={{headerShown:false}} name='UserDetailScreen' component={UserDetailScreenStack}/>
            <Stack.Screen options={{headerShown:false}} name="UserEditScreen" component={UserEditScreenStack}/>
        </Stack.Navigator>
        
    )
}

export default RootStack;


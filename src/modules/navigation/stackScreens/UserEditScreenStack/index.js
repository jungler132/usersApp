import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import UserEditScreen from '../../../../views/UserEditScreen/index'



const EditStack = createStackNavigator();


function UserEditScreenStack() {
    return (
        <EditStack.Navigator headerMode={false}>
            <EditStack.Screen options={{headerShown:false}} name='UserEditScreen' component={UserEditScreen}/>
        </EditStack.Navigator>
        
    )
}

export default UserEditScreenStack;

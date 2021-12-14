import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import UserDetailScreen from '../../../../views/UserDetailScreen/index';



const DetailStack = createStackNavigator();


function UserDetailScreenStack() {
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen options={{headerShown:false}} name='UserDetailScreen' component={UserDetailScreen}/>
        </DetailStack.Navigator>
        
    )
}

export default UserDetailScreenStack;

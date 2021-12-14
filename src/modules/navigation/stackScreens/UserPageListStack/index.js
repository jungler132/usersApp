import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import UserPageList from '../../../../views/UserPageList/index'



const PageList = createStackNavigator();


function UserPageListStack() {
    return (
        <PageList.Navigator>
            <PageList.Screen options={{headerShown:false}} name='UserPageListStack' component={UserPageList}/>
        </PageList.Navigator>
        
    )
}

export default UserPageListStack;

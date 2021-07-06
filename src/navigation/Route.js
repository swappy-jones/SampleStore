import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './StackNavigation'

const Stack = createStackNavigator();

const Route = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="App" 
            screenOptions={{
            headerShown: false
            }}>
            <Stack.Screen name="App" component={StackNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Route
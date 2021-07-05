import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDashboardScreen from '../screens/HomeDashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import FirstTimeLoginScreen from '../screens/FirstTimeLoginScreen';
import StoreDetailsScreen from '../screens/StoreDetailsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import SplashScreen from '../screens/SplashScreen';
import {SCREEN_ROUTE_MAPPING} from '../utils/strings'

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ForgotPassConfirmOTPScreen from '../screens/ForgotPassConfirmOTPScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName= {SCREEN_ROUTE_MAPPING.SplashScreen}
            screenOptions={{
            headerShown: false
            }}>
          <Stack.Screen name={SCREEN_ROUTE_MAPPING.SplashScreen} component={SplashScreen} />
          <Stack.Screen name={SCREEN_ROUTE_MAPPING.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={SCREEN_ROUTE_MAPPING.FirstTimeLoginScreen} component={FirstTimeLoginScreen} />
          <Stack.Screen name={SCREEN_ROUTE_MAPPING.StoreDetailsScreen} component={StoreDetailsScreen} />
          <Stack.Screen name={SCREEN_ROUTE_MAPPING.HomeDashboardScreen} component={HomeDashboardScreen} />
          <Stack.Screen name={SCREEN_ROUTE_MAPPING.ItemDetailsScreen} component={ItemDetailsScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
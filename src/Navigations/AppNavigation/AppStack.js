import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import SignupScreen from '../../Screens/SignupScreen/SignupScreen';
import OtpScreen from '../../Screens/OtpScreen/OtpScreen';
import BasicScreen from '../../Screens/BasicScreen/BasicScreen';



const Stack = createStackNavigator();

const AppStack = () => {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: '#FFFFFF',
                },
            }}
            initialRouteName="SplashScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false, title: 'Screen Saver' }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false, title: 'Login' }}
            />
            <Stack.Screen
                name="BasicScreen"
                component={BasicScreen}
                options={{ headerShown: false, title: 'Login' }}
            />
            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false, title: 'Signup' }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OtpScreen"
                component={OtpScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
export default AppStack;
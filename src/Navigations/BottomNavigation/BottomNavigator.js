import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../../Components/Screen1';
import Screen2 from '../../Components/Screen2';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Screen1"
                component={Screen1}
                options={{ headerShown: true, title: 'Screen 1' }} />
            <Tab.Screen
                name="Screen2"
                component={Screen2}
                options={{ headerShown: true, title: 'Screen 2' }} />
        </Tab.Navigator>
    )
}

export default BottomNavigator
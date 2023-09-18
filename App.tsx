/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import DrawerNavigation from './src/Navigations/AppNavigation/DrawerNavigation';

function App(): JSX.Element { 
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <DrawerNavigation />
      </RootSiblingParent>
    </NavigationContainer>
  );
}

export default App;
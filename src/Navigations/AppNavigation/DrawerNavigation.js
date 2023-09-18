import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from './AppStack';
import {Dimensions,} from 'react-native';
import SideMenu from '../AppNavigation/SideMenu/SideMenu';


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (

        <Drawer.Navigator
        ScreenOption={{
          activeBackgroundColor: 'transparent',
          inactiveBackgroundColor: 'transparent',
          activeTintColor: 'green'
        }}
        drawerStyle={{
          width: Dimensions.get('window').width - 10,
        }}
        drawerContent={props => <SideMenu {...props} />}
      >
        <Drawer.Screen
          name="AppStack"
          component={AppStack}
          options={{
            headerShown: false,
            drawerType: 'front',
          }}
        />
      </Drawer.Navigator>
    )
}

export default DrawerNavigation
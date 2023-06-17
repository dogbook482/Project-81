import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/profile.js'
import BottomTabNavigator from './bottomTabNavigator';

const Drawer = createDrawerNavigator()
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={BottomTabNavigator}/>
            <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator
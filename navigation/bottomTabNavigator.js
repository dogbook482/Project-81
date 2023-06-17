import * as React from 'react';
import {Text, View, Stylesheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/feed.js';
import CreateStory from '../screens/createStory.js';

const Tab=createBottomTabNavigator()
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='Story Creator' component={CreateStory}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator
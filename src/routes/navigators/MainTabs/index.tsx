import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../TabBarBorder';
import MainScreen from '../../../screens/MainScreen';
import Settings from '../../../screens/Settings';
import Tasks from '../../../screens/Tasks';
import Financials from '../../../screens/Financials';

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={'Dashboard'}
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarLabel: 'Dashboard',
        }}
        component={MainScreen}
      />
      <Tab.Screen
        name={'Tasks'}
        options={{
          title: 'Tasks',
          headerShown: false,
          tabBarLabel: 'Tasks',
        }}
        component={Tasks}
      />

      <Tab.Screen
        name={'Financials'}
        options={{
          title: 'Financials',
          headerShown: false,
          tabBarLabel: 'Financials',
        }}
        component={Financials}
      />
      <Tab.Screen
        name={'Settings'}
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarLabel: 'Settings',
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}
export default HomeTabs;

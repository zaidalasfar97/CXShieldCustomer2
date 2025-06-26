import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import AccountDetails from '../../../screens/Settings/AccountDetails';
const nativeStack = createNativeStackNavigator();
const Settings = () => {
  return (
    <nativeStack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}>
      <nativeStack.Screen name="AccountDetails" component={AccountDetails} />
    </nativeStack.Navigator>
  );
};

export default Settings;

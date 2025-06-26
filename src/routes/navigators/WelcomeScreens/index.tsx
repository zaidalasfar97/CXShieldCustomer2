import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import WelcomeScreen from '../../../screens/Welcome';
const nativeStack = createNativeStackNavigator();
const WelcomeScreens = () => {
  return (
    <nativeStack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}>
      <nativeStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </nativeStack.Navigator>
  );
};

export default WelcomeScreens;

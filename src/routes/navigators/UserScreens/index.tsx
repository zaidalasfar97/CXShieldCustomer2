/* eslint-disable @typescript-eslint/no-unused-vars */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import Login from '../../../screens/User/Login';

interface UserScreensProps {}
const nativeStack = createNativeStackNavigator();

const UserScreens = () => {
  return (
    <nativeStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}>
      <nativeStack.Screen name="Login" component={Login} />
    </nativeStack.Navigator>
  );
};

export default UserScreens;

const styles = StyleSheet.create({
  container: {},
});

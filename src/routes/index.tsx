/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../redux/store';
import 'react-native-reanimated';
import NavigationManager from './navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '../i18n/index';
import {t} from 'i18next';
interface RoutesProps {}

const Routes = (props: RoutesProps) => {
  //Method for handling notifications opened
  return (
    <SafeAreaProvider style={{direction: t('dir') === 'ltr' ? 'ltr' : 'rtl'}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Platform.OS === 'ios' ? (
            <StatusBar animated={true} translucent={true} hidden={false} />
          ) : (
            <StatusBar
              animated={true}
              translucent={true}
              barStyle="dark-content"
              backgroundColor={'transparent'}
              hidden={false}
            />
          )}
          <NavigationManager />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {},
});

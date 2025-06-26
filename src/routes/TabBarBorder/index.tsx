/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Dimensions, StyleSheet} from 'react-native';
import Text from '../../components/Text'; // Assuming your custom Text
import {tbColors} from '../../config/appConfig';
import Dashboard from '../../assets/svg/Home/Dashboard.svg';
import DashboardNotActive from '../../assets/svg/Home/DashboadNotActive.svg';
import Tasks from '../../assets/svg/Home/tasks.svg';
import Financials from '../../assets/svg/Home/Financials.svg';
import FinancialsBlack from '../../assets/svg/Home/FinancialsBlack.svg';

import Settings from '../../assets/svg/Home/settings.svg';
const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        console.log(label, 'label', isFocused, state);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles.mainItemContainer}>
            <Pressable onPress={onPress}>
              <View style={styles.iconTextContainer}>
                {label === 'Dashboard' && (
                  <Text>
                    {isFocused ? (
                      <DashboardNotActive />
                    ) : (
                      <DashboardNotActive />
                    )}
                  </Text>
                )}
                {label === 'Tasks' && (
                  <Text>
                    <Tasks />
                  </Text>
                )}
                {label === 'Financials' && (
                  <Text>
                    {isFocused ? <FinancialsBlack /> : <Financials />}
                  </Text>
                )}
                {label === 'Settings' && (
                  <Text>
                    <Settings />
                  </Text>
                )}

                <Text
                  small
                  style={{
                    color: isFocused ? '#000' : '#7D7D7D',
                    fontWeight: isFocused ? 'bold' : 'normal',
                    marginTop: 4,
                  }}>
                  {route.name}
                </Text>
                {isFocused && <View style={styles.activeUnderline} />}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#E4E4F4',
    shadowColor: 'gray',
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    elevation: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  activeUnderline: {
    width: 20,
    height: 3,
    backgroundColor: '#3CC4BF', // Light green underline
    borderRadius: 2,
    marginTop: 4,
  },
  plusButton: {
    width: 60,
    height: 60,
    backgroundColor: tbColors.primary,
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    elevation: 10,
  },
  newMessageDot: {
    position: 'absolute',
    top: 5,
    right: -3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
});

export default TabBar;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Back from '../../assets/svg/NewAccount/BackBlack.svg';
import {tbColors} from '../../config/appConfig';
import Text from '../Text';
import {moderateScale} from 'react-native-size-matters';

interface TobNavBarProps {
  navigation: any;
  title?: any;
  backArrow?: boolean;
  rightIcon?: React.ReactElement;
  onRightIconPress?: () => void;
  BackGroundColor?: any;
}

const TobNavBar = (props: TobNavBarProps) => {
  return (
    <View
      style={{
        backgroundColor: props.BackGroundColor
          ? props.BackGroundColor
          : 'rgba(250, 250, 252, 1)',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: moderateScale(15),
        }}>
        {!props.backArrow ? (
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <Text color={tbColors.grey} fontSize={16}>
          {props.title}
        </Text>
        <TouchableOpacity onPress={props.onRightIconPress}>
          <View>{props.rightIcon}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  backButton: {
    flexDirection: 'row',
  },
});

export default TobNavBar;

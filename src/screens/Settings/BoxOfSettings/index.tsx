/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/Text';
import AccountSettings from '../../../assets/svg/Settings/AccountSettings.svg';
import {moderateScale} from 'react-native-size-matters';

interface BoxSettingsProps {
  title?: any;
  icon?: React.ReactElement;
  navigation: any;
  titleIcon?: React.ReactElement;
  onPress?: () => void;
}

const BoxSettings = (props: BoxSettingsProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.settingBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {props.titleIcon}
          <Text
            style={{marginHorizontal: moderateScale(10)}}
            color="#202B36"
            fontSize={16}>
            {props.title}
          </Text>
        </View>

        <View>{props.icon}</View>
      </View>
    </TouchableOpacity>
  );
};

export default BoxSettings;

const styles = StyleSheet.create({
  settingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    marginVertical: moderateScale(6),
  },
});

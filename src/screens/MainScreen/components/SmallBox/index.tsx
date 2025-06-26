/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import { ScreenWidth } from '../../../../config/metrics';
import { moderateScale } from 'react-native-size-matters';
import Text from '../../../../components/Text';

interface SmallBoxProps {
  title?: any;
  numberOfTitle?: any;
  icon?: React.ReactElement;
  backGroundData?: any;
  widthData?: any;
  titleTextSize?: any;
  description?: any
}

const SmallBox = (props: SmallBoxProps) => {
  console.log(props);
  return (
    <View
      style={{ width: props.widthData ? props.widthData : ScreenWidth / 2.1 }}>
      <View
        style={{
          backgroundColor: props.backGroundData
            ? props.backGroundData
            : 'rgba(255, 255, 255, 0.8)',
          marginHorizontal: 5,
          borderRadius: 16,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}>
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            {props.numberOfTitle}

          </Text>
          <Text
            color='#798086'
            style={{
              fontSize: 18,
              marginTop: 5
            }}>
            {'  '}{props.description}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {props.icon && <View>{props.icon}</View>}
          <Text
            style={{
              fontSize: props.titleTextSize
                ? props.titleTextSize
                : moderateScale(14),
              fontWeight: 'bold',
              marginHorizontal: moderateScale(4),
            }}>
            {props.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SmallBox;

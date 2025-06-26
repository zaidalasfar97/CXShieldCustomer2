/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {I18nManager, TouchableOpacity, View} from 'react-native';
import Text from '../../components/Text';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import {tbColors} from '../../config/appConfig';
import {Image, ScrollView} from 'moti';
import ArrowGreen from '../../assets/svg/Financials/ArrowGreen.svg';
import NeedCard from '../../components/NeedCard';
interface QualityOfServiceProps {
  navigation: any;
}

const needs = [
  {
    image: require('../../assets/svg/Home/Sandwiches.png'),
    title: I18nManager.isRTL ? 'ساندويشات' : 'Sandwiches',
    description: I18nManager.isRTL
      ? 'قيم الطعم والنضارة.'
      : 'Rate taste and freshness.',
  },
  {
    image: require('../../assets/svg/Home/Sandwiches.png'),
    title: I18nManager.isRTL ? 'سلطات' : 'Salads',
    description: I18nManager.isRTL
      ? 'قيم الجودة والمكونات.'
      : 'Judge quality and ingredients.',
  },
  // ...add more as needed
];

const QualityOfService = (props: QualityOfServiceProps) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: 'rgba(250, 250, 252, 1)',
      }}>
      <TobNavBar title={'Default Questions'} navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: 'rgba(250, 250, 252, 1)',
        }}>
        {needs.map((item, idx) => (
          <NeedCard
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
            onPress={() => {
              /* handle navigation or action */
              props.navigation.navigate('CustomQuestions');
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default QualityOfService;

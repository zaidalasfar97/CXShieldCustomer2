/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../components/Text';
import {TextInputComp} from '../../components/TextInput';
import Button from '../../components/Button';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import Close from '../../assets/svg/Home/Close.svg';
import DotIndicator from '../../components/DotIndicator';
import DownIcon from '../../assets/svg/Home/ArrowDown.svg';
import ContactNumber from '../../assets/svg/NewAccount/ContactNumber.svg';
import MapPic from '../../assets/svg/NewAccount/map.svg';
import {tbColors} from '../../config/appConfig';
import {Image, ScrollView} from 'moti';
import Next from '../../assets/svg/NewAccount/next.svg';
import ArrowGreen from '../../assets/svg/Financials/ArrowGreen.svg';

interface DefaultQuestionsProps {
  navigation: any;
}

const DefaultQuestions = (props: DefaultQuestionsProps) => {
  const QuestionCard = ({
    imageSource,
    title,
    description,
    id,
  }: {
    imageSource: any;
    title: string;
    description: string;
    id: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (id === '1') {
            props.navigation.navigate('QualityOfProduct');
          } else if (id === '2') {
            props.navigation.navigate('QualityOfService');
          }
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderRadius: moderateScale(14),
            borderColor: tbColors.greyBorder,
            marginTop: moderateScale(15),
          }}>
          <Image
            style={{
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: moderateScale(20),
              width: '90%',
              borderRadius: moderateScale(14),
            }}
            source={imageSource}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: moderateScale(20),
              marginTop: moderateScale(10),
            }}>
            <Text bold fontSize={20}>
              {title}
            </Text>
            <ArrowGreen />
          </View>
          <Text
            color={tbColors.grey}
            fontSize={16}
            style={{
              marginHorizontal: moderateScale(20),
              marginTop: moderateScale(5),
              marginBottom: moderateScale(20),
            }}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

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
        <QuestionCard
          title="Quality of Product"
          description="Evaluate the product's performance and standards."
          imageSource={require('../../assets/svg/Home/QualityOfProduct.png')}
          id={'1'}
        />
        <QuestionCard
          title="Quality of Service"
          description="Rate staff performance and customer care."
          imageSource={require('../../assets/svg/Home/QualityOfProduct.png')}
          id={'2'}
        />
        <QuestionCard
          title="Environment & Hygiene"
          description="Assess cleanliness and safety standards of the facility."
          imageSource={require('../../assets/svg/Home/QualityOfProduct.png')}
          id={'3'}
        />
        <View style={{height: moderateScale(70)}} />
      </ScrollView>
    </View>
  );
};

export default DefaultQuestions;

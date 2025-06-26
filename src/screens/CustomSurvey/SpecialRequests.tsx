/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import {TextInputComp} from '../../components/TextInput';
import Button from '../../components/Button';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import Close from '../../assets/svg/Home/Close.svg';
import DotIndicator from '../../components/DotIndicator';
import DownIcon from '../../assets/svg/Home/ArrowDown.svg';
import {ScrollView} from 'moti';
import Next from '../../assets/svg/NewAccount/next.svg';
import Date from '../../assets/svg/Home/Date.svg';
import MoneyWhite from '../../assets/svg/Financials/MoneyWhite.svg';
import Money from '../../assets/svg/Home/Money.svg';
import {tbColors} from '../../config/appConfig';
import TextArea from '../../components/TextArea';
interface SpecialRequestsProps {
  navigation: any;
}

const SpecialRequests = (props: SpecialRequestsProps) => {
  const [shoppingOption, setShoppingOption] = useState('');
  const [business, setBusiness] = useState('');

  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: 'rgba(250, 250, 252, 1)',
      }}>
      <TobNavBar
        title={'New Custom Survey'}
        navigation={props.navigation}
        rightIcon={<Close />}
      />
      <ScrollView
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: 'rgba(250, 250, 252, 1)',
        }}>
        <Text
          fontSize={22}
          bold
          style={{
            textAlign: 'center',
            marginVertical: 8,
            marginTop: moderateScale(22),
          }}>
          Special Requests
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 24}}>
          Would you like to add any special requests for the shielder to do or
          consider during their survey of the facility?
        </Text>
        <DotIndicator total={6} activeIndex={3} />
        <View style={{marginVertical: moderateScale(20)}}>
          <TextArea label="Special Request" placeHolder="Special Request" />
        </View>

        <View
          style={{
            marginVertical: moderateScale(10),
          }}>
          <Button
            title="Next"
            onPress={() => props.navigation.navigate('SurveyQuestions')}
            icon={<Next />}
          />
        </View>
        <View
          style={{
            marginVertical: moderateScale(10),
          }}>
          <Button
            title="I don’t have any special requests"
            onPress={() => props.navigation.navigate('SpecialRequests')}
            BKColor="#FFFFFF"
            titleColor={tbColors.black}
            borderColorData={'#798086'}
          />
        </View>

        <View style={{marginVertical: moderateScale(20)}}>
          <Text fontSize={14} color={tbColors.grey}>
            You can choose the type of product to order or the place to sit in
            or visit...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SpecialRequests;

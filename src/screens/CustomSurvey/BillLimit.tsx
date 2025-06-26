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

interface DateTimeProps {
  navigation: any;
}

const DateTime = (props: DateTimeProps) => {
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
          Bill Limit
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 24}}>
          How much would you like the shielder to spend while surveying?
        </Text>
        <DotIndicator total={6} activeIndex={2} />

        <View
          style={{
            borderWidth: 1,
            borderColor: '#DEDEEC',
            backgroundColor: '#EBFAF8',
            borderRadius: moderateScale(12),
            marginVertical: moderateScale(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: moderateScale(20),
              marginHorizontal: moderateScale(20),
            }}>
            <Money />
            <Text
              bold
              fontSize={18}
              style={{marginHorizontal: moderateScale(8)}}>
              Top Up Amount
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // marginVertical: moderateScale(20),
              alignSelf: 'center',
              marginBottom: moderateScale(14),
            }}>
            <Text fontSize={40} bold>
              137
            </Text>
            <Text
              style={{
                marginTop: moderateScale(10),
                marginHorizontal: moderateScale(8),
              }}
              color="#798086"
              bold
              fontSize={20}>
              JOD
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginBottom: moderateScale(14),
            }}>
            <Button
              title="Top up balance"
              icon={<MoneyWhite />}
              BKColor={tbColors.primary}
            />
          </View>
        </View>

        <TextInputComp
          label="Bill Limit"
          placeholder="Bill Limit"
          value={business}
          onChangeText={setBusiness}
          rightIconName={
            <Text fontSize={18} color={tbColors.grey}>
              JOD
            </Text>
          }
          iconType="image"
          iconSource={<Money />}
        />

        <View
          style={{
            marginVertical: moderateScale(10),
          }}>
          <Button
            title="Next"
            onPress={() => props.navigation.navigate('SpecialRequests')}
            icon={<Next />}
          />
        </View>
        <View style={{marginVertical: moderateScale(20)}}>
          <Text fontSize={14} color={tbColors.grey}>
            The shielder will take a picture from the receipt and attach it to
            the final report.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DateTime;

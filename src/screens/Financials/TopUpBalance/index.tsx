/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';
import CardNumber from '../../../assets/svg/Financials/CardNumber.svg';
import Money from '../../../assets/svg/Home/Money.svg';
import {TextInputComp} from '../../../components/TextInput';
import ExpiryDate from '../../../assets/svg/Financials/ExpiryDate.svg';
import CVV from '../../../assets/svg/Financials/CVV.svg';
import Button from '../../../components/Button';
import SaveChanges from '../../../assets/svg/Common/SaveChanges.svg';
import DataNotSaved from '../../../assets/svg/Financials/DataNotSaved.svg';
import {ScrollView} from 'moti';

interface TopUpBalanceProps {
  navigation: any;
}

const TopUpBalance = (props: TopUpBalanceProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}>
          <Back />
          <Text color={tbColors.grey} fontSize={18}>
            Questions Library
          </Text>
          <View />
        </TouchableOpacity>
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
              marginBottom: moderateScale(30),
            }}>
            <Text fontSize={40} bold>
              00
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
        </View>
        <TextInputComp
          placeholder={'Card Numbers'}
          label="Card Numbers"
          value={''}
          iconType="image"
          iconSource={<CardNumber />}
          onChangeText={() => {}}
        />

        <TextInputComp
          placeholder={'Expiry Date'}
          label="Expiry Date"
          value={''}
          iconType="image"
          iconSource={<ExpiryDate />}
          onChangeText={() => {}}
        />
        <TextInputComp
          placeholder={'CVC/CVV (Back of Card)'}
          label="CVC/CVV (Back of Card)"
          value={''}
          iconType="image"
          iconSource={<CVV />}
          onChangeText={() => {}}
        />
        <Button
          title="Top Up"
          BKColor={tbColors.primary}
          icon={<SaveChanges />}
          onPress={() => {
            props.navigation.navigate('TopUpSuccessful');
          }}
        />
        <View>
          <DataNotSaved
            style={{alignSelf: 'center', marginTop: moderateScale(24)}}
          />
          <Text
            fontSize={14}
            color={tbColors.grey}
            style={{textAlign: 'center', marginTop: moderateScale(8)}}>
            KINDLY NOTE THAT CX SHIED DO NOT STORE YOUR CARD INFORMATION.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default TopUpBalance;

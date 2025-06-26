/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import AccountCreatedPic from '../../../assets/svg/NewAccount/AccountCreated.svg';
import Text from '../../../components/Text';
import {moderateScale} from 'react-native-size-matters';

interface NewPlanPaymentSuccProps {
  navigation: any;
}

const NewPlanPaymentSucc = (props: NewPlanPaymentSuccProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={[
        '#2EC4B6',
        '#3CC8BB',
        '#46CBBE',
        '#59D0C5',
        '#69D5CB',
        '#7CDAD1',
        '#8DDFD7',
        '#A4E6DF',
        '#BCEDE8',
        '#D4F3F0',
        '#EBFAF8',
        '#EBFAF8',
      ]}>
      <View style={{alignItems: 'center', marginTop: '45%'}}>
        <AccountCreatedPic />
        <Text
          bold
          fontSize={24}
          style={{
            marginTop: moderateScale(8),
          }}>
          Payment Successful
        </Text>
        <Text
          fontSize={18}
          style={{textAlign: 'center', marginVertical: moderateScale(8)}}>
          Changes was reflected successfully on your balance.
        </Text>
      </View>

      <View style={{marginTop: 20}}>
        <Button
          title="Home Page"
          BKColor={'#FFFFFF'}
          titleColor={'#202B36'}
          onPress={async () => {
            // await storeData('access_token', 'login');

            props.navigation.navigate('Login');
          }}
          // icon={<BidLogo />}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

export default NewPlanPaymentSucc;

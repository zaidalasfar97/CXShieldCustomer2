/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInputComp} from '../../../components/TextInput';
import Button from '../../../components/Button';
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';
import FullName from '../../../assets/svg/Settings/FullName.svg';
import Phone from '../../../assets/svg/Settings/Phone.svg';
import EmailAddress from '../../../assets/svg/Settings/EmailAddress.svg';
import SaveChanges from '../../../assets/svg/Common/SaveChanges.svg';
import {Image, ScrollView} from 'moti';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenHeight} from '../../../config/metrics';
interface AboutCompanyProps {
  navigation: any;
}

const AboutCompany = (props: AboutCompanyProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');

  return (
    <ScrollView
      style={{height: ScreenHeight}}
      showsVerticalScrollIndicator={false}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          '#2EC4B6',
          '#3CC8BB',
          '#46CBBE',
          //   '#59D0C5',
          '#69D5CB',
          // '#7CDAD1',
          '#8DDFD7',
          '#A4E6DF',
          '#BCEDE8',
          '#D4F3F0',
          '#EBFAF8',
        ]}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.backButton}>
            <Back />
            <Text color={tbColors.white} fontSize={18}>
              ABOUT CX SHIELD
            </Text>
            <View style={{marginHorizontal: '3%'}} />
          </TouchableOpacity>
        </View>

        <Image
          style={{
            alignItems: 'center',
            alignSelf: 'center',
          }}
          source={require('../../../assets/svg/Settings/CompanyLogo.png')}
        />
        <View style={{marginHorizontal: moderateScale(20)}}>
          <View style={{marginTop: moderateScale(33)}}>
            <Text>
              Welcome to [App Name], your trusted partner for managing payments
              and financial transactions effortlessly. Our app is designed to
              simplify your payment experience by offering multiple payment
              options in a secure and user-friendly interface.
            </Text>
          </View>
          <View style={{marginTop: moderateScale(33)}}>
            <Text>
              At [App Name], we are committed to providing reliable and
              efficient solutions for individuals and businesses. Whether you're
              topping up your balance, paying bills, or managing subscriptions,
              we aim to make every transaction seamless and hassle-free.
            </Text>
          </View>
          <View style={{marginTop: moderateScale(33)}}>
            <Text>
              Welcome to [App Name], your trusted partner for managing payments
              and financial transactions effortlessly. Our app is designed to
              simplify your payment experience by offering multiple payment
              options in a secure and user-friendly interface.
            </Text>
          </View>
          <View style={{marginTop: moderateScale(33)}}>
            <Text>
              Welcome to [App Name], your trusted partner for managing payments
              and financial transactions effortlessly. Our app is designed to
              simplify your payment experience by offering multiple payment
              options in a secure and user-friendly interface.
            </Text>
          </View>
          <View style={{marginTop: moderateScale(33)}}>
            <Text>
              Welcome to [App Name], your trusted partner for managing payments
              and financial transactions effortlessly. Our app is designed to
              simplify your payment experience by offering multiple payment
              options in a secure and user-friendly interface.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FBFBFB',
    paddingTop: 60,
    paddingHorizontal: 20,
    height: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default AboutCompany;

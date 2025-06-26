/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {I18nManager, Platform, StyleSheet, View} from 'react-native';
import Text from '../../../components/Text';
import {useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../components/Button';

import {useAppDispatch} from '../../../redux/store';
import {t} from 'i18next';
import CXLogo from '../../../assets/svg/Common/CXLogo.svg';
import Email from '../../../assets/svg/Common/email.svg';
import Password from '../../../assets/svg/Common/password.svg';
import Eye from '../../../assets/svg/Common/eye.svg';
import Apple from '../../../assets/svg/Common/apple.svg';
import Google from '../../../assets/svg/Common/google.svg';
import RNRestart from 'react-native-restart';

import {TextInputComp} from '../../../components/TextInput';
import i18n, {currentLanguage} from '../../../i18n';
import {moderateScale} from 'react-native-size-matters';
import {tbColors} from '../../../config/appConfig';

// import DatePickerComponent from '../../../sharedComp/DatePicker';
// import AuthInputs from './TextInput';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// import CustomDatePicker from '../../../sharedComp/DatePicker';
// import DropdownComponent from '../../../sharedComp/DropDown';
// import TextArea from '../../../components/TextArea';
// import OTPComp from '../../../sharedComp/OTP';
// import RadioButton from '../../../sharedComp/RadioButton';
// import moment from 'moment';
// UserScreens

interface LoginProps {
  navigation: any;
}

const Login = (props: LoginProps) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  // const industryData = [
  //   {label: 'Technology', value: 'tech'},
  //   {label: 'Healthcare', value: 'healthcare'},
  //   {label: 'Finance', value: 'finance'},
  //   {label: 'Education', value: 'education'},
  //   {label: 'Manufacturing', value: 'manufacturing'},
  // ];

  const [error, setError] = useState({
    email: false,
    password: false,
  } as any);

  const filteredData = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item: any) =>
        item.name
          .toLocaleLowerCase('en')
          .includes(query.toLocaleLowerCase('en')),
      );
    }
  }, [data, query]);
  const onSearch = (text: any) => {
    setQuery(text);
  };
  //const {KeyboardAwareInsetsView} = Keyboard;
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(t('lang'), 'qweqwelang', currentLanguage);

  const handleGenderSelect = (gender: string) => {
    console.log('Selected gender:', gender);
  };
  const [establishmentDate, setEstablishmentDate] = useState('');
  // console.log(selectedDate, 'selectedDate');
  const handleDateChange = selectedDate => {
    setEstablishmentDate(selectedDate);
    console.log('Selected Date:', selectedDate);
  };
  return (
    <View>
      <View
        style={{position: 'absolute', height: '100%', width: '100%'}}></View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        extraHeight={150}
        extraScrollHeight={100}
        enableAutomaticScroll={Platform.OS === 'ios'}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            I18nManager.forceRTL(t('lang') === 'en');
            i18n.changeLanguage(t('lang') === 'en' ? 'ar' : 'en');
            RNRestart.Restart();
          }}
          style={{marginTop: '20%', marginHorizontal: 20}}>
          <Text style={{color: '#2EC4B6'}}>
            {t('lang') === 'ar' ? 'العربية' : 'English'}
          </Text>
        </TouchableOpacity>
        <CXLogo
          style={{alignSelf: 'center'}}
          // viewBox="0 0 345 266"
        />
        <View style={{marginVertical: 20, marginHorizontal: 20}}>
          <TextInputComp
            label={'Email Address'}
            placeholder={'Email Address'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            onRightLabelPress={() => {
              console.log('eeee');
            }}
            iconType="image"
            iconSource={<Email />}
            // rightIconName="email"
          />
          <TextInputComp
            label="Password"
            rightLabel="FORGET PASSWORD?"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconType="image"
            iconSource={<Password />}
            keyboardType="email-address"
            onRightLabelPress={() => {
              console.log('eeee');
            }}
            rightIconName={<Eye />}
          />
          <View style={{marginVertical: 10}}>
            <Button
              title="Login"
              onPress={async () => {
                // await storeData('access_token', 'login');

                props.navigation.navigate('HomeTabs');
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '47%',
              borderRadius: moderateScale(12),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#DEDEEC',
              paddingVertical: moderateScale(8),
            }}>
            <Google style={{marginHorizontal: 5}} />
            <Text style={{padding: 8, alignSelf: 'center'}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '47%',
              borderRadius: moderateScale(12),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#DEDEEC',
              paddingVertical: moderateScale(8),
            }}>
            <Apple style={{marginHorizontal: 5}} />
            <Text style={{padding: 8, alignSelf: 'center'}}>Apple</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: 20,
            marginVertical: 20,
            borderColor: '#DEDEEC',
          }}
        />
        <View style={{alignItems: 'center'}}>
          <Text color={'#202B36'} fontSize={18}>
            New to CX Shield?
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('NewAccount');
            }}>
            <Text color={tbColors.primary} bold fontSize={18}>
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {height: '120%'},
  footerBgBox: {
    // width: '90%',
    aspectRatio: 345 / 266,
    marginTop: '15%',
    alignSelf: 'center',
    // height: '30%',
  },
});

// <RadioButton
//           onSelect={handleGenderSelect}
//           label1={'Male'}
//           label2={'Female'}
//           value1={'1'}
//           value2={'2'}
//         />
//       <DropdownComponent data={industryData as never} label="" />
//         <TextArea
//           name="social_media"
//           // value={form.social_media}
//           hasError={error.social_media}
//           placeHolder={t('Product.social_media').toString()}
//           label={t('Product.social_media').toString()}
//           // onChangeText={onChange}
//         />
//          <OTPComp maxLength={3} isSecure />

//         <CustomDatePicker
//           label="Meeting Time"
//           onChange={handleDateChange}
//           title="Hellqwe"
//           placeholder="Heqweqw"
//           value={establishmentDate}
//         />

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import Modal from 'react-native-modal';

import DotIndicator from '../../../components/DotIndicator';
import { TextInputComp } from '../../../components/TextInput';
import DropdownComponent from '../../../components/DropDown';
import Button from '../../../components/Button';
import Next from '../../../assets/svg/NewAccount/next.svg';
import Text from '../../../components/Text';
import Back from '../../../assets/svg/NewAccount/BackBlack.svg';
import City from '../../../assets/svg/NewAccount/city.svg'
import { tbColors } from '../../../config/appConfig';
import Email from '../../../assets/svg/Common/email.svg';
import MapView, { Marker } from 'react-native-maps';
import LocationPickerModal from '../../../components/LocationPickerModal';
import { moderateScale } from 'react-native-size-matters';
import SocialMediaLinks from '../SocialMediaLinks';
import Checkbox from '../../../assets/svg/Tasks/checkbox.svg';
import CheckboxEmpty from '../../../assets/svg/Tasks/checkboxEmpty.svg';
interface BusinessDetailsProps {
  navigation: any;
}

const BusinessDetails = (props: BusinessDetailsProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');
  const industryData = [
    { label: 'Technology', value: 'tech' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Finance', value: 'finance' },
    { label: 'Education', value: 'education' },
    { label: 'Manufacturing', value: 'manufacturing' },
  ];
  const [showMapModal, setShowMapModal] = useState(false);
  const [location, setLocation] = useState({
    latitude: 31.963158,
    longitude: 35.930359,
  });
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleTermsPress = () => {
    // Navigate to Terms of Use page
    console.log('Terms of Use pressed');
  };


  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} style={{ fontSize: 18 }}>
          New Account
        </Text>
        <View style={{ marginHorizontal: '3%' }} />
      </TouchableOpacity>
      {/* Header */}
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <Text style={styles.title}>Contact Details</Text>
        <Text style={styles.subtitle}>
          How can we connect with you?
        </Text>
      </View>
      <DotIndicator total={6} activeIndex={1} />
      <View style={{ marginVertical: 10 }} />

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
      />
      <TextInputComp
        label={'Phone Number'}
        placeholder={'Phone Number'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        onRightLabelPress={() => {
          console.log('eeee');
        }}
        iconType="image"
        iconSource={<Email />}
      />


      <DropdownComponent
        data={industryData as never}
        label="City"
        placeholder="City"
        leftIcon={<City />}
      />


      <TextInputComp
        label={'Address'}
        placeholder={'Address'}
        value={numberOfBranches}
        onChangeText={setNumberOfBranches}
        keyboardType="default"
        iconType=""
      />

      <View
        style={[
          styles.containerTerms,
          I18nManager.isRTL && { flexDirection: 'row-reverse' },
        ]}>
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={styles.checkboxContainer}>
          {isChecked ? <CheckboxEmpty /> : <Checkbox />}
        </TouchableOpacity>

        <Text
          style={[styles.text, I18nManager.isRTL && { textAlign: 'right' }]}>
          I have read & agree with CX Shield platform’s{' '}
          <Text style={styles.link} >
            TERMS OF USE &{' '}
          </Text>
          <Text style={styles.link} >
            PRIVACY POLICY
          </Text>
        </Text>
      </View>


      <Button
        title="Next"
        icon={<Next />}
        onPress={async () => {
          // props.navigation.navigate('BusinessRepresentative');
          props.navigation.navigate('AccountConfirmation');

        }}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#2EC4B6',
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    // lineHeight: 22,
  },
  checkboxContainer: {
    marginRight: 10,
    marginLeft: 5,
  },
  containerTerms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    flexWrap: 'wrap', // allow multi-line support
  },
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
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginVertical: 5,
  },
  cardContainer: {
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEEC',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2EC4B6',
    marginTop: 12,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: '#333',
  },
});

export default BusinessDetails;

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import DotIndicator from '../../../../components/DotIndicator';
import {TextInputComp} from '../../../../components/TextInput';
import BusinessInfoPic from '../../../../assets/svg/NewAccount/BusinessLogo.svg';
import DropdownComponent from '../../../../components/DropDown';
import Next from '../../../../assets/svg/NewAccount/next.svg';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import Back from '../../../../assets/svg/Common/Back.svg';
import {tbColors} from '../../../../config/appConfig';

interface BusinessInfoProps {
  navigation: any;
}

const NewBusiness = (props: BusinessInfoProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');
  const industryData = [
    {label: 'Technology', value: 'tech'},
    {label: 'Healthcare', value: 'healthcare'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'education'},
    {label: 'Manufacturing', value: 'manufacturing'},
  ];
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />

        <Text color={tbColors.grey} fontSize={18}>
          New Account
        </Text>
        <View style={{marginHorizontal: '3%'}} />
      </TouchableOpacity>
      {/* Header */}
      <View style={{marginTop: 20, marginBottom: 10}}>
        <Text style={styles.title}>Business Info</Text>
        <Text style={styles.subtitle}>Tell us about your business.</Text>
      </View>
      <DotIndicator total={2} activeIndex={0} />
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 12,
          marginVertical: 20,
          borderColor: '#DEDEEC',
          backgroundColor: 'white',
        }}>
        <BusinessInfoPic style={{marginHorizontal: 5}} />
        <Text
          style={{
            color: '#2EC4B6',
            fontSize: 16,
            fontWeight: 'bold',
            marginHorizontal: 10,
          }}>
          {' '}
          + ADD BUSINESS LOGO
        </Text>
      </View>
      <TextInputComp
        label={'Business Name'}
        placeholder={'Business Name'}
        value={numberOfBranches}
        onChangeText={setNumberOfBranches}
        keyboardType="default"
      />
      <DropdownComponent
        data={industryData as never}
        label="Industry / Sector"
      />
      <TextInputComp
        label={'Tell us about your target'}
        placeholder={'Tell us about your target'}
        value={numberOfBranches}
        onChangeText={setNumberOfBranches}
        keyboardType="default"
      />
      <Button
        title="Next"
        icon={<Next />}
        onPress={async () => {
          props.navigation.navigate('BusinessDetails');
        }}
      />
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
    // position: 'absolute',
    // top: 50,
    // left: 24,
    // zIndex: 10,
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
    shadowOffset: {width: 0, height: 3},
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

export default NewBusiness;

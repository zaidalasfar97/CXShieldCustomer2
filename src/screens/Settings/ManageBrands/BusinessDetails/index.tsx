/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import DotIndicator from '../../../../components/DotIndicator';
import {TextInputComp} from '../../../../components/TextInput';
import DropdownComponent from '../../../../components/DropDown';
import Button from '../../../../components/Button';
import Next from '../../../../assets/svg/NewAccount/next.svg';
import Text from '../../../../components/Text';
import {tbColors} from '../../../../config/appConfig';
import Back from '../../../../assets/svg/Common/Back.svg';

interface BusinessDetailsProps {
  navigation: any;
}

const BusinessDetails = (props: BusinessDetailsProps) => {
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
        <Text style={styles.title}>Business Details</Text>
        <Text style={styles.subtitle}>
          Provide details about your business.
        </Text>
      </View>
      <DotIndicator total={2} activeIndex={1} />
      <View style={{marginVertical: 10}} />
      <TextInputComp
        label={'Number of branches'}
        placeholder={'Number of branches'}
        value={numberOfBranches}
        onChangeText={setNumberOfBranches}
        keyboardType="default"
      />
      <DropdownComponent
        data={industryData as never}
        label="Number of employees"
        placeholder="Number of employees"
      />
      <TextInputComp
        label={'Website'}
        placeholder={'Website'}
        value={numberOfBranches}
        onChangeText={setNumberOfBranches}
        keyboardType="default"
      />
      <TouchableOpacity style={{marginTop: 10, marginBottom: 20}}>
        <Text style={{color: '#2EC4B6', fontSize: 16, fontWeight: 'bold'}}>
          + ADD SOCIAL MEDIA LINKS
        </Text>
      </TouchableOpacity>
      <Button
        title="Add Business"
        icon={<Next />}
        onPress={async () => {
          props.navigation.navigate('BusinessRepresentative');
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

export default BusinessDetails;

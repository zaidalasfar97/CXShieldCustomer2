/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import DotIndicator from '../../../components/DotIndicator';
import {TextInputComp} from '../../../components/TextInput';
import DropdownComponent from '../../../components/DropDown';
import Button from '../../../components/Button';
import Next from '../../../assets/svg/NewAccount/next.svg';

interface AddNewBranchProps {
  navigation: any;
}

const AddNewBranch = (props: AddNewBranchProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');
  const industryData = [
    {label: 'Technology', value: 'tech'},
    {label: 'Healthcare', value: 'healthcare'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'education'},
    {label: 'Manufacturing', value: 'manufacturing'},
  ];
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={{fontSize: 18}}>New Account</Text>
        <View style={{marginHorizontal: '3%'}} />
      </TouchableOpacity>
      {/* Header */}

      <View style={{marginVertical: 10}} />
      <TextInputComp
        label={'Branch Name'}
        placeholder={'Branch Name'}
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
        label={'Contact Number'}
        placeholder={'Contact Number'}
        value={numberOfBranches}
        onChangeText={setNumberOfBranches}
        keyboardType="default"
      />

      <Button
        title="Next"
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

export default AddNewBranch;

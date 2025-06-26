/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import DotIndicator from '../../../components/DotIndicator';
import { TextInputComp } from '../../../components/TextInput';
import Button from '../../../components/Button';
import Next from '../../../assets/svg/NewAccount/next.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '../../../components/Text';
import Back from '../../../assets/svg/NewAccount/BackBlack.svg';
import { ScrollView } from 'moti';
import { moderateScale } from 'react-native-size-matters';
import { tbColors } from '../../../config/appConfig';
import Checkbox from '../../../assets/svg/Tasks/checkbox.svg';
import FacilityAvailabilitySheet from '../../../components/FacilityAvailabilityBottomSheet';
import CheckboxEmpty from '../../../assets/svg/Tasks/checkboxEmpty.svg';
import DownIcon from '../../../assets/svg/NewAccount/DownIcon.svg';

interface BusinessRepresentativeProps {
  navigation: any;
}

const BusinessRepresentative = (props: BusinessRepresentativeProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleTermsPress = () => {
    // Navigate to Terms of Use page
    console.log('Terms of Use pressed');
  };

  const handlePrivacyPress = () => {
    // Navigate to Privacy Policy page
    console.log('Privacy Policy pressed');
  };


  const [showFacilitySheet, setShowFacilitySheet] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const facilityOptions = [
    { label: 'Onsite', value: 'onsite' },
    { label: 'Delivery', value: 'delivery' },
    { label: 'qweeeq', value: 'onqeqwesite' },
    { label: 'qweqwe', value: 'qwesad' },
    { label: 'qeasdqe', value: 'eqwesde' },
    { label: 'wqesde', value: 'qeqe' },
    { label: 'qwesdqwe', value: 'qweqe' },
    { label: '123qse', value: 'qweqwe2' },
    { label: 'qe123123', value: '312wqe' },

    { label: '13asd', value: 'dfe123qsdqewrwe' },
    { label: 'easdqwe', value: 'dasdasdfewrwe' },
    { label: 'zxczxc', value: 'qwesad' },
    { label: 'weqwasd', value: 'dfasdqweewrwe' },
    { label: 'qwesxzx', value: 'qwe213' },
    { label: 'asdqwe', value: 'eqwefwer' },
    { label: 'asdqwe', value: 'qwe13123sff' },
    { label: 'sadzxc', value: 'qweasf23' },
    { label: 'asdzxce', value: 'qwe1231' },
    { label: 'qweasd', value: 'qwe123' },
    { label: 'qweaxc', value: 'qweqwrq2' },
    { label: 'sadqwsad', value: 'sdqerr' },
    { label: 'e123qweasdr3', value: 'qwe' },
    { label: 'qwesadqwe12', value: 'qeqw' },

    // ...add more options as needed
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.title}>Professional Details</Text>
          <Text style={styles.subtitle}>
            What you’re good at.
          </Text>
        </View>
        <DotIndicator total={6} activeIndex={3} />
        <View style={{ marginVertical: 10 }} />

        <TextInputComp
          label={'Education'}
          placeholder={'Education'}
          value={selectedFacilities}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType=""
          onPressIn={() => {
            setShowFacilitySheet(true);
          }}
          rightIconName={<DownIcon />}
        />
        <TextInputComp
          label={'Profession'}
          placeholder={'Profession'}
          value={selectedFacilities}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType=""
          onPressIn={() => {
            setShowFacilitySheet(true);
          }}
          rightIconName={<DownIcon />}
        />

        <TextInputComp
          label={'Languages'}
          placeholder={'Languages'}
          value={selectedFacilities}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType=""
          onPressIn={() => {
            setShowFacilitySheet(true);
          }}
          rightIconName={<DownIcon />}
        />


        <TextInputComp
          label={'LinkedIn Profile Link'}
          placeholder={'LinkedIn Profile Link'}
          value={''}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType=""
          rightLabel='OR UPLOAD CV'
          onRightLabelPress={() => console.log('eee')}
        />

        <FacilityAvailabilitySheet
          visible={showFacilitySheet}
          onClose={() => setShowFacilitySheet(false)}
          options={facilityOptions}
          selected={selectedFacilities}
          onSelect={value =>
            setSelectedFacilities(prev =>
              prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value],
            )
          }
          onConfirm={() => setShowFacilitySheet(false)}
        />


        <View style={{ marginVertical: moderateScale(10) }}>
          <Button
            title="Next"
            icon={<Next />}
            onPress={async () => {
              // props.navigation.navigate('AccountConfirmation');
              props.navigation.navigate('CitizenshipDetails');

            }}
          />
        </View>
      </View>
      <View style={{ height: moderateScale(100) }} />
    </ScrollView>
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
  containerTerms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    flexWrap: 'wrap', // allow multi-line support
  },
  checkboxContainer: {
    marginRight: 10,
    marginLeft: 5,
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    // lineHeight: 22,
  },
  link: {
    color: '#2EC4B6',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default BusinessRepresentative;

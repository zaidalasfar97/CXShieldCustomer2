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
interface HelpCenterProps {
  navigation: any;
}

const HelpCenter = (props: HelpCenterProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          Help Center
        </Text>
        <View style={{marginHorizontal: '3%'}} />
      </TouchableOpacity>
      <View style={{marginVertical: moderateScale(30)}}>
        <TextInputComp
          label={'Representative Full Name'}
          placeholder={'Representative Full Name'}
          value={numberOfBranches}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType={'image'}
          iconSource={<FullName />}
        />
        <TextInputComp
          label={'Phone Number'}
          placeholder={'Phone Number'}
          value={numberOfBranches}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType={'image'}
          iconSource={<Phone />}
        />
        <TextInputComp
          label={'Email Address'}
          placeholder={'Email Address'}
          value={numberOfBranches}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType={'image'}
          iconSource={<EmailAddress />}
        />
        <View style={{marginTop: moderateScale(24)}}>
          <Button
            title="Save Changes"
            icon={<SaveChanges />}
            onPress={async () => {
              props.navigation.navigate('BusinessDetails');
            }}
          />
        </View>
      </View>
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

  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default HelpCenter;

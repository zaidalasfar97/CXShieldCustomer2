/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {t} from 'i18next';
import Text from '../../../components/Text';
import {ScreenHeight, ScreenWidth} from '../../../config/metrics';
import Close from '../../../assets/svg/Common/Close.svg';
import {tbColors} from '../../../config/appConfig';
import {TextInputComp} from '../../../components/TextInput';
import CurrentPasswordPic from '../../../assets/svg/Settings/CurrentPassword.svg';
import Eye from '../../../assets/svg/Settings/Eye.svg';
import Button from '../../../components/Button';
import SaveChanges from '../../../assets/svg/Common/SaveChanges.svg';

interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
  isIR?: boolean;
}

const ChangePassword = (props: SuccessPopProps) => {
  const [isAgree, setIsAgree] = useState(false);
  const [numberOfBranches, setNumberOfBranches] = useState('');

  const ConfrimTerms = () => {
    setIsAgree(!isAgree);
  };
  const TermsText = (
    <View style={{justifyContent: 'center'}}>
      <Text fontSize={16}>
        {t('profile.approve')}
        <Text color={'blue'} fontSize={16}>
          {' '}
          {t('profile.TermsAndConditions')}
        </Text>
      </Text>
    </View>
  );
  const disAgree = () => {
    props.toggleModal();
  };
  const onAgree = () => {
    props.toggleModal();
  };

  return (
    <Modal
      isVisible={props.isModalVisible ?? false}
      backdropColor={'#081E42'}
      backdropOpacity={0.4}
      statusBarTranslucent
      onBackdropPress={() => {
        disAgree();
      }}
      style={{
        justifyContent: 'flex-end',
        borderRadius: 0,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}
      deviceHeight={ScreenHeight + 50}
      deviceWidth={ScreenWidth}>
      <Animated.View style={styles.container}>
        <View style={{marginVertical: moderateScale(20)}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.backButton}>
            <Close />
            <Text fontSize={18} color={tbColors.grey}>
              CHANGE PASSWORD
            </Text>
            <TouchableOpacity>
              <View style={{marginHorizontal: moderateScale(15)}} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: moderateScale(24)}}>
          <TextInputComp
            label={'Current Password'}
            placeholder={'Current Password'}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
            iconType={'image'}
            iconSource={<CurrentPasswordPic />}
            rightIconName={<Eye />}
          />
          <TextInputComp
            label={'New Password'}
            placeholder={'New Password'}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
            iconType={'image'}
            iconSource={<CurrentPasswordPic />}
            rightIconName={<Eye />}
          />
          <TextInputComp
            label={'Confirm Password'}
            placeholder={'Confirm Password'}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
            iconType={'image'}
            iconSource={<CurrentPasswordPic />}
            rightIconName={<Eye />}
          />

          <View style={{marginTop: moderateScale(10)}}>
            <Button
              title="Update Password"
              icon={<SaveChanges />}
              onPress={async () => {
                props.navigation.navigate('BusinessDetails');
              }}
            />
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ScreenHeight * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: moderateScale(-20),
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

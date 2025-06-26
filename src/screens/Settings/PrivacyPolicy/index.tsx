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
import {ScrollView} from 'moti';

interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
  isIR?: boolean;
}

const PrivacyPolicy = (props: SuccessPopProps) => {
  const disAgree = () => {
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
        <ScrollView>
          <View style={{marginVertical: moderateScale(20)}}>
            <TouchableOpacity
              onPress={() => {
                props.toggleModal();
              }}
              style={styles.backButton}>
              <Close />
              <Text fontSize={18} color={tbColors.grey}>
                PRIVACY POLICY
              </Text>
              <TouchableOpacity>
                <View style={{marginHorizontal: moderateScale(15)}} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: moderateScale(24)}}>
            <Text fontSize={16}>
              Welcome to [App Name]! By using our services, you agree to the
              following Terms of Use. Please read them carefully.
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: moderateScale(24),
              marginVertical: moderateScale(10),
            }}>
            <Text fontSize={16} bold>
              1.Acceptance of Terms
            </Text>
            <Text style={{marginVertical: moderateScale(5)}} fontSize={16}>
              By accessing or using [App Name], you agree to comply with these
              Terms of Use. If you do not agree, do not use the app.
            </Text>
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default PrivacyPolicy;

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

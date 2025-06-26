/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DotIndicator from '../../../components/DotIndicator';
import Back from '../../../assets/svg/NewAccount/BackBlack.svg';
import Button from '../../../components/Button';
import Next from '../../../assets/svg/NewAccount/next.svg';
import OTPComp from '../../../components/OTP';
import { tbColors } from '../../../config/appConfig';
import Text from '../../../components/Text';
interface AccountConfirmationProps {
  navigation: any;
}

const AccountConfirmation = (props: AccountConfirmationProps) => {
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
        <Text style={styles.title}>Account Confirmation</Text>
        <Text style={styles.subtitle}>
          Enter verification code that was sent to your email address.
        </Text>
      </View>
      <DotIndicator total={6} activeIndex={2} />
      <View style={{ marginVertical: 10 }} />
      <View style={{ marginVertical: 20 }}>
        <OTPComp maxLength={4} isSecure />
      </View>

      <View style={{ marginVertical: 5 }}>
        <Button
          title="Verify Account"
          icon={<Next />}
          onPress={async () => {
            // props.navigation.navigate('AccountCreated');
            props.navigation.navigate('BusinessRepresentative');

          }}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          marginVertical: 20,
          borderColor: '#DEDEEC',
        }}
      />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#202B36', fontSize: 18 }}>
          Didn’t receive the verification code?
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('NewAccount');
          }}>
          <Text
            style={{
              color: '#2EC4B6',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 0,
            }}>
            RESEND CODE
          </Text>
        </TouchableOpacity>
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
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  link: {
    color: '#2EC4B6',
    fontWeight: 'bold',
  },
});

export default AccountConfirmation;

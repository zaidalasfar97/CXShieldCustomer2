/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IconBusiness from '../../../assets/svg/NewAccount/businessOwner.svg';
import Shielders from '../../../assets/svg/NewAccount/shielders.svg';
import Text from '../../../components/Text';
import Back from '../../../assets/svg/NewAccount/BackBlack.svg';

interface AccountTypeProps {
  navigation: any;
}

const AccountTypeScreen = (props: AccountTypeProps) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
      </TouchableOpacity>

      {/* Header */}
      <View style={{ marginVertical: 40 }}>
        <Text style={styles.title}>Account Type</Text>
        <Text style={styles.subtitle}>
          Select how’d you like to use the app.
        </Text>
      </View>

      {/* Options */}
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            props.navigation.navigate('BusinessInfo');
          }}>
          <IconBusiness />
          <Text style={styles.cardTitle}>Business Owner</Text>
          <Text style={styles.cardText}>
            Partner with CX Shield for growth, success, and continuous
            improvement.
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate('BusinessInfo');
        }} style={styles.card}>
          <Shielders />
          <Text style={styles.cardTitle}>Shielders</Text>
          <Text style={styles.cardText}>
            Join us and be part of something great! Register as a Shielder
            today.
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
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 24,
    zIndex: 10,
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

export default AccountTypeScreen;

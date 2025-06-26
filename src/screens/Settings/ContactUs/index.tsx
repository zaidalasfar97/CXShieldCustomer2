import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // or use SVGs
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';

interface ContactUsProps {
  navigation: any;
}
const ContactUs = (props: ContactUsProps) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          Contact Us
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text
          bold
          fontSize={18}
          style={{
            marginTop: moderateScale(16),
            marginBottom: moderateScale(12),
          }}>
          You can contact us on:
        </Text>

        <View style={styles.row}>
          <Icon name="call-outline" size={20} color="#000" />
          <Text color={tbColors.grey} style={styles.rowText}>
            Phone number
          </Text>
          <Text style={styles.value}>12345678</Text>
        </View>

        <View style={styles.row}>
          <Icon name="mail-outline" size={20} color="#000" />
          <Text color={tbColors.grey} style={styles.rowText}>
            Email
          </Text>
          <Text style={styles.value}>support@cxshield.com</Text>
        </View>

        <View style={styles.row}>
          <Icon name="location-outline" size={20} color="#000" />
          <Text color={tbColors.grey} style={styles.rowText}>
            Address
          </Text>
          <Text style={styles.value}>50 Side st. from Main st. Amman</Text>
        </View>

        <View style={styles.divider} />

        <Text bold fontSize={18} style={styles.subHeader}>
          Follow us on social media:
        </Text>
        <View style={styles.socialIcons}>
          <Icon name="logo-facebook" size={24} color={tbColors.grey} />
          <Icon name="logo-twitter" size={24} color={tbColors.grey} />
          <Icon name="logo-linkedin" size={24} color={tbColors.grey} />
          <Icon name="logo-instagram" size={24} color={tbColors.grey} />
          <Icon name="logo-youtube" size={24} color={tbColors.grey} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250, 250, 252, 1)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 12,
  },
  subHeader: {marginBottom: 12},
  card: {
    backgroundColor: '#FFFFFF',

    padding: 16,
    borderRadius: 12,
    elevation: 2,
    marginVertical: moderateScale(40),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(22),
    justifyContent: 'space-between',
  },
  rowText: {marginLeft: 8, fontWeight: '500', flex: 1},
  value: {marginLeft: 8, color: '#333'},
  divider: {height: 1, backgroundColor: '#ccc', marginVertical: 12},
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ContactUs;

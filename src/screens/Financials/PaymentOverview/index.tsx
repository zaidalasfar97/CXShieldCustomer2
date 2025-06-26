/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Back from '../../../assets/svg/Common/Back.svg';

import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';

import Info from '../../../assets/svg/Financials/Info.svg';
import Download from '../../../assets/svg/Financials/Download.svg';
import DownloadGreen from '../../../assets/svg/Financials/DownloadGreen.svg';
import OptionsHistory from '../../../assets/svg/Financials/OptionsHistory.svg';
import Phone from '../../../assets/svg/Financials/PhoneGreen.svg';
import {moderateScale} from 'react-native-size-matters';

interface PaymentOverviewProps {
  navigation: any;
}

const PaymentOverview = ({navigation}: PaymentOverviewProps) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text color={tbColors.grey} fontSize={18}>
          PAYMENT OVERVIEW
        </Text>
        <TouchableOpacity>
          <Download />
        </TouchableOpacity>
      </View>

      {/* Details */}
      <View style={styles.detailsSection}>
        <View style={styles.detailsHeader}>
          <Info width={16} height={16} />
          <Text bold fontSize={16} style={{marginLeft: 6}}>
            Details
          </Text>
        </View>

        <View style={styles.detailItem}>
          <Text fontSize={14} color={tbColors.grey} style={{width: '40%'}}>
            Reference #
          </Text>
          <Text fontSize={14}>123456</Text>
        </View>

        <View style={styles.detailItem}>
          <Text fontSize={14} color={tbColors.grey} style={{width: '40%'}}>
            Date
          </Text>
          <Text fontSize={14}>15 June 2024</Text>
        </View>

        <View style={styles.detailItem}>
          <Text fontSize={14} color={tbColors.grey} style={{width: '40%'}}>
            Time
          </Text>
          <Text fontSize={14}>04:16 pm</Text>
        </View>

        <View style={styles.detailItem}>
          <Text fontSize={14} color={tbColors.grey} style={{width: '40%'}}>
            Bill Payment
          </Text>
          <Text fontSize={14}>50 JOD</Text>
        </View>

        <View style={styles.detailItem}>
          <Text fontSize={14} color={tbColors.grey} style={{width: '40%'}}>
            Method
          </Text>
          <Text fontSize={14}>Bank Card</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsSection}>
        <View style={styles.optionsHeader}>
          <OptionsHistory />
          <Text bold fontSize={16} style={{marginHorizontal: moderateScale(6)}}>
            Options
          </Text>
        </View>

        <TouchableOpacity style={styles.optionRow}>
          <DownloadGreen />
          <Text
            style={{marginHorizontal: moderateScale(6)}}
            fontSize={14}
            bold
            color={tbColors.primary}>
            DOWNLOAD RECEIPT
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Phone />
          <Text
            style={{marginHorizontal: moderateScale(6)}}
            fontSize={14}
            bold
            color={tbColors.primary}>
            CONTACT SUPPORT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailsSection: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEEC',
  },
  detailsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 14,
  },
  optionsSection: {
    marginTop: 20,
  },
  optionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

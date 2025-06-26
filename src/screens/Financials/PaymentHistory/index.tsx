/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import DashV from '../../../assets/svg/Home/dashV.svg';
import {moderateScale} from 'react-native-size-matters';

interface PaymentHistoryProps {
  navigation: any;
}

const paymentData = [
  {
    date: '25 September 2024',
    time: '03:30 pm',
    type: 'Balance Top Up',
    amount: '40 JOD',
    details: {
      id: '#BS-BR-123456',
      survey: 'Full Survey',
      place: 'Yaseen Restaurant',
      location: 'Amman',
    },
  },
  {
    date: '18 August 2024',
    time: '11:30 am',
    type: 'Bill Payment',
    amount: '30 JOD',
  },
  {
    date: '25 September 2024',
    time: '03:30 pm',
    type: 'Balance Top Up',
    amount: '40 JOD',
    details: {
      id: '#BS-BR-123456',
      survey: 'Full Survey',
      place: 'Yaseen Restaurant',
      location: 'Amman',
    },
  },
];

const PaymentHistory = (props: PaymentHistoryProps) => {
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('PaymentOverview');
      }}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text color={tbColors.grey}>{item.date}</Text>
          <DashV style={{marginHorizontal: moderateScale(12)}} />
          <Text color={tbColors.grey}>{item.time}</Text>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text bold fontSize={18}>
            {item.type}
          </Text>
          <View style={styles.amountPill}>
            <Text bold color="#066D49">
              {item.amount}
            </Text>
          </View>
        </View>

        {item.details && (
          <View style={styles.detailsBox}>
            <Text
              bold
              fontSize={14}
              color={tbColors.grey}
              style={{marginBottom: 4}}>
              {item.details.id}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text fontSize={14}>{item.details.survey}</Text>
              <DashV />
              <Text fontSize={14}>{item.details.place}</Text>
              <DashV />
              <Text fontSize={14}>{item.details.location}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.header}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          PAYMENT HISTORY
        </Text>
        <View style={{width: 24}} />
      </TouchableOpacity>

      <FlatList
        data={paymentData}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PaymentHistory;

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
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  amountPill: {
    backgroundColor: '#E9F7F1',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  detailsBox: {
    backgroundColor: '#F4F4F9',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    borderColor: tbColors.greyBorder,
    borderWidth: 1,
  },
});

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
import {Calendar} from 'react-native-calendars';
import {tbColors} from '../../../config/appConfig';
import Button from '../../../components/Button';
import SaveChanges from '../../../assets/svg/Common/SaveChanges.svg';

interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
}

const DatePopup = (props: SuccessPopProps) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined,
  );

  const disAgree = () => {
    props.toggleModal();
  };

  const handleShowResults = () => {
    // You can add your logic here
    props.toggleModal();
  };

  const handleClearFilter = () => {
    setSelectedDate(undefined);
  };

  return (
    <Modal
      isVisible={props.isModalVisible ?? false}
      backdropColor={'#081E42'}
      backdropOpacity={0.4}
      statusBarTranslucent
      onBackdropPress={disAgree}
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}
      deviceHeight={ScreenHeight + 50}
      deviceWidth={ScreenWidth}>
      <Animated.View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={disAgree}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
          <Text fontSize={18} color={tbColors.grey}>
            DATE
          </Text>
          <View style={{width: 24}} />
        </View>
        {/* Calendar */}
        <View style={styles.calendarWrapper}>
          <Calendar
            current={selectedDate}
            onDayPress={day => {
              console.log(day, 'qweqweq');
              setSelectedDate(day.dateString);
            }}
            markedDates={
              selectedDate
                ? {[selectedDate]: {selected: true, selectedColor: '#53C3BC'}}
                : {}
            }
            theme={{
              selectedDayBackgroundColor: '#53C3BC',
              todayTextColor: '#53C3BC',
              arrowColor: '#53C3BC',
              textSectionTitleColor: '#8A8F9E',
              monthTextColor: '#222',
              textMonthFontWeight: 'bold',
              textMonthFontSize: 20,
              textDayFontWeight: '500',
              textDayFontSize: 16,
              textDayHeaderFontWeight: 'bold',
              textDayHeaderFontSize: 13,
            }}
            style={{borderRadius: 16}}
          />
        </View>
        {/* Show Results Button */}
        {/* <TouchableOpacity
          style={styles.showResultsBtn}
          onPress={handleShowResults}>
          <Text style={styles.showResultsText}>
            Show Results <Text style={{fontSize: 18}}>✓</Text>
          </Text>
        </TouchableOpacity> */}
        {/* Clear Filter */}

        <View
          style={{
            marginTop: moderateScale(24),
            marginHorizontal: moderateScale(20),
          }}>
          <Button
            title="Change Language"
            icon={<SaveChanges />}
            BKColor={tbColors.primary}
            onPress={async () => {
              props.toggleModal();
              // props.navigation.navigate('BusinessDetails');
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.clearFilterBtn}
          onPress={handleClearFilter}>
          <Text style={styles.clearFilterText}>CLEAR FILTER</Text>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
};

export default DatePopup;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F8F9FB',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 30,
    height: ScreenHeight * 0.9,
    marginBottom: moderateScale(-20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
  close: {
    fontSize: 28,
    color: '#888',
    fontWeight: 'bold',
  },

  calendarWrapper: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 32,
    padding: 8,
    width: '92%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
  },
  showResultsBtn: {
    backgroundColor: '#53C3BC',
    borderRadius: 12,
    paddingVertical: 16,
    width: '90%',
    alignItems: 'center',
    marginTop: 8,
  },
  showResultsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  clearFilterBtn: {
    marginTop: 24,
    alignItems: 'center',
    width: '100%',
  },
  clearFilterText: {
    color: '#8A8F9E',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

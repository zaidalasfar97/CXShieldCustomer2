/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Text from '../../../components/Text';
import {ScreenHeight, ScreenWidth} from '../../../config/metrics';
import {tbColors} from '../../../config/appConfig';
import Button from '../../../components/Button';
import SaveChanges from '../../../assets/svg/Common/SaveChanges.svg';
import CheckBox from '../../../assets/svg/Tasks/checkbox.svg';
import CheckBoxEmpty from '../../../assets/svg/Tasks/checkboxEmpty.svg';

interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
}

const TypePopup = (props: SuccessPopProps) => {
  const [selectedDate, setSelectedDate] = useState('');

  const disAgree = () => {
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
            SURVEY TYPE
          </Text>
          <View style={{width: 24}} />
        </View>

        <View style={{marginHorizontal: moderateScale(20)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: moderateScale(20),
            }}>
            <CheckBox />
            <Text fontSize={18} style={{marginHorizontal: moderateScale(8)}}>
              All Types
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBoxEmpty />
            <Text fontSize={18} style={{marginHorizontal: moderateScale(8)}}>
              Full Surveys
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelectedDate('qwe');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: moderateScale(20),
              }}>
              {selectedDate === '' ? <CheckBoxEmpty /> : <CheckBox />}
              <Text fontSize={18} style={{marginHorizontal: moderateScale(8)}}>
                Custom Surveys
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: moderateScale(24),
            marginHorizontal: moderateScale(20),
          }}>
          <Button
            title="Show Results"
            icon={<SaveChanges />}
            BKColor={tbColors.primary}
            onPress={async () => {
              props.toggleModal();
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

export default TypePopup;

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

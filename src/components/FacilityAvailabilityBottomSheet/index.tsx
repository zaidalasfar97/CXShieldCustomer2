import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../Text';
import {ScreenHeight, ScreenWidth} from '../../config/metrics';
import {moderateScale} from 'react-native-size-matters';
import Button from '../Button';
import {tbColors} from '../../config/appConfig';
import SaveChanges from '../../assets/svg/Common/SaveChanges.svg';
import Checkbox from '../../assets/svg/Tasks/checkbox.svg';
import CheckboxEmpty from '../../assets/svg/Tasks/checkboxEmpty.svg';
interface Option {
  label: string;
  value: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  options: Option[];
  selected: string[];
  onSelect: (value: string) => void;
  title?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

const FacilityAvailabilitySheet = ({
  visible,
  onClose,
  options,
  selected,
  onSelect,
  title = 'FACILITY AVAILABILITY',
  confirmText = 'Confirm',
  onConfirm,
}: Props) => (
  <Modal
    isVisible={visible}
    backdropColor={'#081E42'}
    backdropOpacity={0.4}
    statusBarTranslucent
    onBackdropPress={onClose}
    style={{
      justifyContent: 'flex-end',
      alignItems: 'center',
      alignSelf: 'center',
      width: '100%',
    }}
    deviceHeight={ScreenHeight + 50}
    deviceWidth={ScreenWidth}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={{width: 24}} />
      </View>
      <ScrollView>
        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={styles.optionRow}
            onPress={() => onSelect(option.value)}>
            {selected.includes(option.value) ? (
              <Checkbox width={24} height={24} style={{marginRight: 12}} />
            ) : (
              <CheckboxEmpty width={24} height={24} style={{marginRight: 12}} />
            )}
            <Text fontSize={18}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{marginBottom: moderateScale(15)}}>
        <Button
          title="Confirm"
          BKColor={tbColors.primary}
          icon={<SaveChanges />}
          onPress={() => {
            onClose();
          }}
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    // maxHeight: ScreenHeight * 0.,
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: ScreenHeight * 0.9,
    marginBottom: moderateScale(-20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(30),
  },
  close: {fontSize: 24, color: '#888'},
  title: {fontSize: 16, fontWeight: 'bold', color: '#888', letterSpacing: 1},
  optionRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 12},
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 6,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checked: {backgroundColor: '#2EC4B6', borderColor: '#2EC4B6'},
  checkmark: {color: '#fff', fontWeight: 'bold', fontSize: 16},
  optionText: {fontSize: 16, color: '#222'},
  confirmBtn: {
    backgroundColor: '#2EC4B6',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmText: {color: 'white', fontWeight: 'bold', fontSize: 16},
});

export default FacilityAvailabilitySheet;

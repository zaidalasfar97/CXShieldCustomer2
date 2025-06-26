import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Arrow from '../../assets/svg/Home/ArrowDown.svg';
import { moderateScale } from 'react-native-size-matters';

const CustomDropdown = ({
  label = '',
  data = [],
  defaultValue = null,
  placeholder = 'Select option',
  leftIcon = <></>,
  onValueChange = (value: any) => { },
}: {
  label?: string;
  data: { label: string; value: any }[];
  defaultValue?: any;
  placeholder?: string;
  leftIcon?: React.ReactElement;
  onValueChange?: (value: any) => void;
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <Dropdown
        style={[styles.dropdown, isFocus && styles.dropdownFocus]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={value}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          onValueChange(item.value);
        }}
        renderLeftIcon={() => leftIcon}
        renderRightIcon={() => <Arrow />}
        containerStyle={styles.dropdownContainer}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.itemText}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#111',
    fontWeight: '600',
    marginBottom: 8,
  },
  dropdown: {
    height: 56,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  dropdownFocus: {
    borderColor: '#2EC4B6',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
    marginHorizontal: moderateScale(5)
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  dropdownContainer: {
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginTop: 4,
    backgroundColor: '#fff',
    paddingVertical: 4,
    elevation: 3,
  },
  itemContainer: {
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
});

export default CustomDropdown;

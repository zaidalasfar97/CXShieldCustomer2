import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Text from '../Text';

type TextInputCompProps = {
  label?: string;
  rightLabel?: string;
  onRightLabelPress?: () => void;
  placeholder: string;
  value: any;
  onChangeText: (text: string) => void;
  iconType?: 'material' | 'image' | ''; // allow empty string
  iconName?: string;
  iconSource?: React.ReactElement;
  rightIconName?: any;
  onRightIconPress?: () => void;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  onPressIn?: () => void;
};

const getDisplayValue = (
  value: string | string[],
  options?: {label: string; value: string}[],
) => {
  if (Array.isArray(value)) {
    // If you want to show labels instead of raw values:
    if (options) {
      return value
        .map(val => options.find(opt => opt.value === val)?.label || val)
        .join(', ');
    }
    // Otherwise, just join the values
    return value.join(', ');
  }
  return value;
};

export const TextInputComp: React.FC<TextInputCompProps> = ({
  label,
  rightLabel,
  onRightLabelPress,
  placeholder,
  value,
  onChangeText,
  iconType = '',
  iconName,
  iconSource,
  rightIconName,
  onRightIconPress,
  keyboardType = 'default',
  autoCapitalize = 'none',
  onPressIn,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const showLeftIcon = iconType === 'material' || iconType === 'image';
  console.log(showLeftIcon, iconType, 'qwe');
  return (
    <View style={styles.container}>
      {/* Label rendering */}

      {label && !rightLabel && (
        <View style={styles.labelSingle}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}

      {label && rightLabel && (
        <View style={styles.labelRow}>
          <Text style={styles.label}>{label}</Text>

          <TouchableOpacity onPress={onRightLabelPress}>
            <Text style={styles.rightLabel}>{rightLabel}</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.inputContainer}>
        {/* Left Icon */}
        {iconType === 'material' && iconName && (
          <Icon
            name={iconName}
            size={20}
            color="black"
            style={styles.leftIcon}
          />
        )}
        {iconType === 'image' && iconSource && (
          <View style={styles.leftIcon}>{iconSource}</View>
        )}

        {/* Input Field */}
        <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            {
              paddingLeft: showLeftIcon ? 45 : 15,
              paddingRight: rightIconName ? 45 : 15,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={getDisplayValue(value)}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onPressIn={() => {
            onPressIn ? onPressIn() : null;
          }}
        />

        {/* Right Icon (optional) */}
        {rightIconName && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIconContainer}>
            <View>{rightIconName}</View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  labelSingle: {
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    color: '#333',
    fontWeight: '400',
  },
  rightLabel: {
    fontSize: 16,
    color: '#2EC4B6',
    fontWeight: 'bold',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: moderateScale(10),
    // paddingLeft: 45, //here zaid alasfar
    // paddingRight: 45, //here zaid alasfar
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  inputFocused: {
    borderColor: '#1a73e8',
    backgroundColor: '#fff',
  },
  leftIcon: {
    position: 'absolute',
    left: 15,
    top: 12,
    zIndex: 1,
  },
  leftIconImage: {
    position: 'absolute',
    left: 15,
    top: 13,
    width: 24,
    height: 24,
    zIndex: 1,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 15,
    top: 13,
    zIndex: 1,
  },
});

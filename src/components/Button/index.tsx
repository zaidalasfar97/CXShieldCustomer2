/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../Text'; // make sure your Text is customized
import {SvgXml} from 'react-native-svg';
import {moderateScale} from 'react-native-size-matters';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  isLoading?: boolean;
  icon?: React.ReactElement;
  titleColor?: string;
  BKColor?: string;
  hasError?: boolean;
  borderColorData?: any;
}

const Button = ({
  title,
  onPress,
  isLoading,
  icon,
  titleColor = 'white',
  BKColor = '#202B36', // Default background color here
  hasError = false,
  borderColorData,
}: ButtonProps) => {
  const backgroundColor = hasError ? '#FF4C4C' : BKColor;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress && !isLoading ? onPress : () => {}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          styles.button,
          borderColorData && {
            borderColor: borderColorData,
            borderWidth: 1,
          },
        ]}
        colors={[backgroundColor, backgroundColor, backgroundColor]}>
        {isLoading ? (
          <ActivityIndicator color={titleColor} />
        ) : (
          <View style={styles.content}>
            <Text bold style={{color: titleColor, fontSize: 16}}>
              {title ?? ''}
            </Text>
            {icon && <View style={styles.icon}>{icon}</View>}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    borderRadius: moderateScale(12),

    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: '#202B36',
    shadowOffset: {
      height: 0,
      width: 2,
    },
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
});

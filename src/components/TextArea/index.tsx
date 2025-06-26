/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import {t} from 'i18next';
import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {GetNormalFont, tbColors} from '../../config/appConfig';
import Text from '../Text';
import {moderateScale} from 'react-native-size-matters';
interface TextInputProps {
  style?: ViewStyle;
  name?: string;
  labelStyle?: TextStyle;
  label?: string;
  placeHolder?: string;
  onChangeText?: (name: any, text: any) => void;
  onPress?: () => void;
  value?: string;
  marginV20?: boolean;
  isPassword?: boolean;
  rightInput?: React.ReactElement;
  keyboardType?: 'phone-pad' | 'email-address' | 'default';
  isPicker?: boolean;
  hasError?: boolean;
}
export default function index(props: TextInputProps) {
  const {
    style,
    name,
    labelStyle,
    label,
    placeHolder,
    onChangeText,
    value,
    marginV20,
    rightInput,
    keyboardType,
    isPicker,
    onPress,
    hasError,
  } = props;
  let textStyle = StyleSheet.flatten([marginV20 && styles.txtMarginV20]);
  const onChange = (text: string) => {
    onChangeText ? onChangeText(name, text) : null;
  };
  return (
    <View style={{}}>
      <Text style={{color: 'black', marginBottom: moderateScale(8)}}>
        {label}
      </Text>

      <TouchableWithoutFeedback onPress={isPicker ? onPress : () => {}}>
        <View
          style={[
            styles.container,
            style,
            textStyle,
            {
              borderColor: hasError ? 'red' : tbColors.greyBorder,
              borderWidth: 1,
            },
          ]}>
          <View style={{flex: 1, flexGrow: 1}}>
            <View style={{flexDirection: 'row'}}>
              {rightInput}
              <TextInput
                value={value}
                placeholder={placeHolder}
                placeholderTextColor={'lightgrey'}
                style={
                  (styles.inputText,
                  {
                    textAlign: t('lang') === 'ar' ? 'right' : 'left',
                    fontFamily: GetNormalFont(),
                    color: 'black',
                    textAlignVertical: 'top',
                    width: '100%',
                    height: 200,
                  })
                }
                maxLength={150}
                editable={isPicker ? false : true}
                multiline={true}
                numberOfLines={6}
                onChangeText={onChange}
                keyboardType={keyboardType ?? 'default'}
                onPress={isPicker ? onPress : () => {}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width: '90%',
    height: 150,
    flexDirection: 'row',
    borderRadius: 8,
    // marginHorizontal: 20,
    alignSelf: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowColor: 'grey',
    backgroundColor: 'white',
    shadowOffset: {
      height: 0,
      width: 2,
    },
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  inputText: {
    height: 200,
    fontFamily: GetNormalFont(),
    color: 'black',
    justifyContent: 'center',
  },
  txtMarginV20: {
    marginVertical: 20,
  },
});

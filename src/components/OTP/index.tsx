import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
// import {ScreenWidth} from 'react-native-elements/dist/helpers';
import {TextInput} from 'react-native-gesture-handler';
import Text from '../Text';
import {moderateScale} from 'react-native-size-matters';
// import {toEnglishNumber} from '../../utils/helper';
// import Text from '@shared/components/Text';
// import {numberReplaceRegEx} from '@shared/utils/config/regex';

interface OTPCompProps {
  maxLength: 5 | 4 | 3;
  onChange?: (value: string) => void;
  isSecure?: boolean;
  clearInput?: boolean;
}
const OTPComp = (props: OTPCompProps) => {
  const [inputs, setInputs] = useState('');
  const onChangeText = (value: string) => {
    // value = toEnglishNumber(value);
    // value = numberReplaceRegEx(value);
    setInputs(value);
    props.onChange ? props.onChange(value) : null;
  };
  useEffect(() => {
    if (props.clearInput && props.clearInput === true) {
      setInputs('');
    }
  }, [props.clearInput]);
  console.log(inputs, 'inputs');
  return (
    <View style={styles.container}>
      <View style={styles.BoxContainer}>
        {Array.from(new Array(props.maxLength), (_, i) => (
          <View
            key={i}
            style={[
              styles.digitBox,
              {
                borderColor: '#0000001A',
              },
            ]}>
            {inputs.length === 0 && (
              <Text
                style={{
                  alignContent: 'center',
                  marginTop: 14,
                  color: 'black',
                }}>
                -
              </Text>
            )}
            <Text>{props.isSecure ? (inputs[i] ? '*' : '') : inputs[i]}</Text>
          </View>
        ))}
      </View>

      <TextInput
        style={styles.textInput}
        onFocus={() => {
          setInputs('');
        }}
        placeholder="-"
        value={inputs}
        maxLength={props.maxLength}
        onChangeText={onChangeText}
        keyboardType="phone-pad"
        // caretHidden
        // placeholder="-"
        selectTextOnFocus
      />
    </View>
  );
};
export default OTPComp;
const styles = StyleSheet.create({
  container: {},
  textInput: {
    height: 60,
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    opacity: 0,
  },
  digitBox: {
    borderWidth: 1,
    borderRadius: 15,
    height: moderateScale(75),
    borderColor: '#DEDEEC',
    backgroundColor: '#FFFFFF',
    width: moderateScale(75),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '98%',
    alignSelf: 'center',
  },
});

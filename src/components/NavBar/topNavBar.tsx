/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import {AppStatusBar} from '../StatusBar/AppStatusBar';
// import ZcColors from '../../utils/themes/colors';
const winHeight = Dimensions.get('window').height;
// import Text from '@shared/components/Text';
import {useSelector} from 'react-redux';
// import {RootState} from '@shared/redux/store';
import {useEffect, useState} from 'react';
interface TobNavBarProps {
  backgroundColor?: string;
  title?: string;
  navigation: any;
  icon?: React.ReactElement;
  secondIcon?: React.ReactElement;
  screenName?: String;
  secondScreenName?: String;
  onSecondScreenName?: () => void;
  onRightPress?: () => void;
  onBack?: any;
  showArrow?: boolean;
  type?: any;
}

const TobNavBar = (props: TobNavBarProps) => {
  const navigation = useNavigation();
  const [disableButton, setDisableButton] = useState(false);
  // const {AppSettings} = useSelector((state: RootState) => state.appSettings);

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('focus');
      setDisableButton(false);
    });
    // navigation.addListener('blur' , ()=>{
    //   console.log('blur')
    //   setDisableButton(false);
    // });
  }, []);

  return (
    <View
      style={{
        zIndex: 2100,
        direction: 'ltr',
      }}>
      {/* <AppStatusBar backgroundColor={ZcColors.white} /> */}
      <View
        style={[
          styles.container,
          {
            backgroundColor: props.backgroundColor ?? 'white',
            direction: 'ltr',
            flexDirection: 'row',
          },
        ]}>
        <TouchableOpacity
          style={{flex: 0.2, paddingHorizontal: 5}}
          disabled={disableButton}
          onPress={() => {
            setDisableButton(true);
            if (props.onBack) {
              props.onBack();
            } else {
              navigation.canGoBack() ? navigation.goBack() : '';
            }
          }}>
          {props.type != 'arrow' && (
            <Icon
              name="arrow-left"
              size={24}
              color={'black'}
              style={{transform: [{rotateY: '0deg'}]}}
            />
          )}
        </TouchableOpacity>
        <View style={styles.box1}>
          <Text
            // caption bold textAlign="center"
            style={{textAlign: 'center'}}>
            {props.title ?? ''}
          </Text>
        </View>
        <View style={styles.box2}>
          {props.screenName !== '' && (
            <TouchableOpacity
              style={{marginHorizontal: 5}}
              onPress={() => {
                if (props.onRightPress) {
                  props.onRightPress();
                } else {
                  props.navigation.navigate(props.screenName);
                }
              }}>
              {props.icon}
            </TouchableOpacity>
          )}
          {(props.secondScreenName !== '' ||
            (props.secondIcon && props.secondIcon !== undefined)) && (
            <TouchableOpacity
              style={{marginHorizontal: 5}}
              onPress={() => {
                if (props.onSecondScreenName) {
                  props.onSecondScreenName();
                } else if (props.onRightPress) {
                  props.onRightPress();
                } else {
                  props.navigation.navigate(props.secondScreenName);
                }
              }}>
              {props.secondIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#F0F0F0',
          borderBottomWidth: 2,
        }}
      />
    </View>
  );
};

export default TobNavBar;

const styles = StyleSheet.create({
  box2: {
    flex: 0.2,
    paddingHorizontal: 5,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  box1: {
    justifyContent: 'center',
    flexGrow: 1,
    flex: 0.5,
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 2,
  },
  container: {
    height: Platform.OS === 'ios' ? winHeight * 0.06 : winHeight * 0.07,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    zIndex: 2000,
  },
});

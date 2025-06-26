/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View, StyleSheet, Dimensions, I18nManager} from 'react-native';
import Text from '../../components/Text';
import {useEffect} from 'react';
import Logo from '../../assets/svg/Welcome/logo.svg';
import {t} from 'i18next';
import {getData} from '../../config/storage';
import {moderateScale} from 'react-native-size-matters';
interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen = (props: WelcomeScreenProps) => {
  const windowWidth = Dimensions.get('window').width;
  // props.navigation.navigate('UserScreens');

  const getDataLogin = async () => {
    var token = await getData('access_token');
    console.log(token, 'qweqweqweqw');
  };

  useEffect(() => {
    var tokenData = getDataLogin();
    if (tokenData === undefined) {
      // props.navigation.navigate('HomeTabs');
      props.navigation.navigate('UserScreens');
    } else {
      // props.navigation.navigate('HomeTabs');
      props.navigation.navigate('UserScreens'); //11
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={{top: -50}}>
        <Logo width={windowWidth / 2} />
        <Text
          fontSize={48}
          center
          color={'#202B36'}
          bold
          style={{marginTop: moderateScale(10)}}>
          CX Shield
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

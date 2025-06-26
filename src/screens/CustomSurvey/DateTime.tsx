/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import {TextInputComp} from '../../components/TextInput';
import Button from '../../components/Button';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import Close from '../../assets/svg/Home/Close.svg';
import DotIndicator from '../../components/DotIndicator';
import DownIcon from '../../assets/svg/Home/ArrowDown.svg';
import {ScrollView} from 'moti';
import Next from '../../assets/svg/NewAccount/next.svg';
import Date from '../../assets/svg/Home/Date.svg';

interface DateTimeProps {
  navigation: any;
}

const DateTime = (props: DateTimeProps) => {
  const [shoppingOption, setShoppingOption] = useState('');
  const [business, setBusiness] = useState('');

  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: 'rgba(250, 250, 252, 1)',
      }}>
      <TobNavBar
        title={'New Custom Survey'}
        navigation={props.navigation}
        rightIcon={<Close />}
      />
      <ScrollView
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: 'rgba(250, 250, 252, 1)',
        }}>
        <Text
          fontSize={22}
          bold
          style={{
            textAlign: 'center',
            marginVertical: 8,
            marginTop: moderateScale(22),
          }}>
          Date and Time
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 24}}>
          Select the date and time that you need the survey to take place.
        </Text>
        <DotIndicator total={6} activeIndex={1} />
        <View style={{marginTop: moderateScale(20)}}>
          <TextInputComp
            label="Date"
            placeholder="Date"
            value={shoppingOption}
            onChangeText={setShoppingOption}
            rightIconName={<Date />}
          />
          <TextInputComp
            label="Time"
            placeholder="Time"
            value={business}
            onChangeText={setBusiness}
            rightIconName={<DownIcon />}
          />
        </View>

        <View style={{marginVertical: moderateScale(20)}}>
          <Button
            title="Next"
            onPress={() => props.navigation.navigate('BillLimit')}
            icon={<Next />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DateTime;

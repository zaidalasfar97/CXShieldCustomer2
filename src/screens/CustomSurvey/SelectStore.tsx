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
import ContactNumber from '../../assets/svg/NewAccount/ContactNumber.svg';
import MapPic from '../../assets/svg/NewAccount/map.svg';
import {tbColors} from '../../config/appConfig';
import {ScrollView} from 'moti';
import Next from '../../assets/svg/NewAccount/next.svg';

interface SelectStoreProps {
  navigation: any;
}

const SelectStore = (props: SelectStoreProps) => {
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
        backArrow
        title={'New Custom Survey'}
        navigation={props.navigation}
        rightIcon={<Close />}
        onRightIconPress={() => {
          props.navigation.goBack();
        }}
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
          Select Store
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 24}}>
          Select the branch that will be surveyed.
        </Text>
        <DotIndicator total={6} activeIndex={0} />
        <View style={{marginTop: moderateScale(20)}}>
          <TextInputComp
            label="Shopping Option"
            placeholder="Shopping Option"
            value={shoppingOption}
            onChangeText={setShoppingOption}
            rightIconName={<DownIcon />}
          />
          <TextInputComp
            label="Business"
            placeholder="Business"
            value={business}
            onChangeText={setBusiness}
            rightIconName={<DownIcon />}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: tbColors.greyBorder,
            borderRadius: 16,
            paddingVertical: 20,
          }}>
          <Text style={{color: '#202B36', marginHorizontal: 20}}>
            Head Office
          </Text>
          <Text style={{color: '#798086', marginHorizontal: 20}}>
            62 Side st. from Main Street.
          </Text>
          <MapPic
            width={'90%'}
            style={{
              marginHorizontal: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <View
              style={{
                backgroundColor: '#F4F4F9',
                flexDirection: 'row',
                padding: 5,
                alignItems: 'center',
                paddingHorizontal: moderateScale(10),
                borderRadius: 50,
                width: '48%',
              }}>
              <ContactNumber width={18} height={18} />
              <Text>+962 123 45 67</Text>
            </View>
          </View>
        </View>
        <View style={{marginVertical: moderateScale(20)}}>
          <Button
            title="Next"
            onPress={() => props.navigation.navigate('DateTime')}
            icon={<Next />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SelectStore;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {t} from 'i18next';
import Text from '../../components/Text';
import {ScreenHeight, ScreenWidth} from '../../config/metrics';
import Close from '../../assets/svg/Common/Close.svg';
import {tbColors} from '../../config/appConfig';
import {TextInputComp} from '../../components/TextInput';
import Button from '../../components/Button';
import SaveChanges from '../../assets/svg/Common/SaveChanges.svg';
import FillCircle from '../../assets/svg/Common/FillCircle.svg';
import EmptyCircle from '../../assets/svg/Common/EmptyCircle.svg';
import RadioButton from '../../components/RadioButton';
import {ScrollView} from 'moti';
import CheckboxEmpty from '../../assets/svg/Tasks/checkboxEmpty.svg';

interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
  isIR?: boolean;
}

const NewQuestion = (props: SuccessPopProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');

  const disAgree = () => {
    props.toggleModal();
  };
  const onAgree = () => {
    props.toggleModal();
  };

  const handleGenderSelect = (gender: string) => {
    console.log('Selected gender:', gender);
  };

  return (
    <Modal
      isVisible={props.isModalVisible ?? false}
      backdropColor={'#081E42'}
      backdropOpacity={0.4}
      statusBarTranslucent
      onBackdropPress={() => {
        disAgree();
      }}
      style={{
        justifyContent: 'flex-end',
        borderRadius: 0,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}
      deviceHeight={ScreenHeight + 50}
      deviceWidth={ScreenWidth}>
      <Animated.View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: moderateScale(20)}}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.backButton}>
              <Close />
              <Text fontSize={18} color={tbColors.grey}>
                ADD CUSTOM QUESTION
              </Text>
              <TouchableOpacity>
                <View style={{marginHorizontal: moderateScale(15)}} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: moderateScale(20)}}>
            <TextInputComp
              placeholder={'Category'}
              label="Category"
              value={undefined}
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.');
              }}
            />
            <TextInputComp
              placeholder={'Question title'}
              label="Question title"
              value={undefined}
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.');
              }}
            />

            <TextInputComp
              placeholder={'Score Type'}
              label="Score Type"
              value={undefined}
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.');
              }}
            />

            <RadioButton
              label1="Yes, Critical"
              label2="Non Critical"
              value1="critical"
              value2="non_critical"
              defaultValue=""
              title="Is This a critical question?"
              onSelect={val => console.log(val)}
            />
            <RadioButton
              label1="Yes, Scored"
              label2="Not Scored"
              value1="1"
              value2="2"
              defaultValue=""
              title="Is This a scored question??"
              onSelect={val => console.log(val)}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckboxEmpty />
              <Text style={{marginHorizontal: moderateScale(6)}} fontSize={16}>
                Require photo attachment
              </Text>
            </View>
            <View style={{marginVertical: moderateScale(30)}}>
              <Button
                title="Add Question"
                icon={<SaveChanges />}
                onPress={() => {
                  props.toggleModal();
                  props.navigation.navigate('AllQuestions');
                }}
              />
            </View>
            <View style={{height: moderateScale(100)}} />
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default NewQuestion;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ScreenHeight * 0.9,
    backgroundColor: '#FAFAFC',
    borderRadius: 20,
    marginBottom: moderateScale(-20),
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

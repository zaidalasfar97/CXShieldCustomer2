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

import SelectableQuestionList, {
  Question,
} from '../../components/SelectableQuestionList';

interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
}

const QuestionsLibrary = (props: SuccessPopProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');

  const initialQuestions: Question[] = [
    {
      id: '1',
      text: 'Politeness of the staff',
      tags: [
        {label: 'Critical', type: 'critical'},
        {label: 'Scored', type: 'scored'},
        {label: '', type: 'stars', value: '5'},
      ],
      checked: true,
    },
    {
      id: '2',
      text: 'Staff greeted upon arrival',
      tags: [
        {label: 'Not Scored', type: 'scored'},
        {label: 'Open', type: 'open'},
      ],
      checked: true,
    },
    // ...add more questions as needed
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const handleToggle = (id: string) => {
    setQuestions(qs =>
      qs.map(q => (q.id === id ? {...q, checked: !q.checked} : q)),
    );
  };

  const handleSelectAll = () => {
    setQuestions(qs => qs.map(q => ({...q, checked: true})));
  };

  const handleAddToList = () => {
    // Do something with selected questions
    const selected = questions.filter(q => q.checked);
    console.log('Selected:', selected);
    props.navigation.navigate('DefaultQuestions');
  };

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
                QUESTIONS LIBRARY
              </Text>
              <TouchableOpacity>
                <View style={{marginHorizontal: moderateScale(15)}} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: moderateScale(20)}}>
            <SelectableQuestionList
              questions={questions}
              onToggle={handleToggle}
              onSelectAll={handleSelectAll}
              selectedCount={questions.filter(q => q.checked).length}
              onAddToList={handleAddToList}
              buttonTitle="Add Question"
              buttonBKColor={tbColors.black}
              icon={<SaveChanges />}
            />
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default QuestionsLibrary;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ScreenHeight * 0.9,
    backgroundColor: '#FFF',
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

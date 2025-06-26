/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import {tbColors} from '../../config/appConfig';
import {Image, ScrollView} from 'moti';
import ArrowGreen from '../../assets/svg/Financials/ArrowGreen.svg';
import SelectableQuestionList, {
  Question,
} from '../../components/SelectableQuestionList';

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

interface QualityOfProductProps {
  navigation: any;
}

const QualityOfProduct = (props: QualityOfProductProps) => {
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
  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: '#fff',
      }}>
      <TobNavBar
        BackGroundColor={'#FFF'}
        title={'QUALITY OF PRODUCT'}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: '#fff',
        }}>
        <View style={{height: moderateScale(10)}} />
        <SelectableQuestionList
          questions={questions}
          onToggle={handleToggle}
          onSelectAll={handleSelectAll}
          selectedCount={questions.filter(q => q.checked).length}
          onAddToList={handleAddToList}
        />
      </ScrollView>
    </View>
  );
};

export default QualityOfProduct;

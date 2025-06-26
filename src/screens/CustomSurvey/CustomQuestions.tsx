/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import Plus from '../../assets/svg/Common/Plus.svg';

import {ScrollView} from 'moti';
import Text from '../../components/Text';
import Button from '../../components/Button';
import AddCustomQuestionPopup from '../../components/AddCustomQuestionPopup';
import NewQuestion from './NewQuestion';
import QuestionsLibrary from './QuestionsLibrary';
import UploadExcel from './UploadExcel';
interface CustomQuestionsProps {
  navigation: any;
}

const CustomQuestions = (props: CustomQuestionsProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    show: false,
  });
  const [questionsLib, setQuestionsLib] = useState({
    show: false,
  });

  const [uploadExcelPopup, setUploadExcelPopup] = useState({
    show: false,
  });

  const handleSelect = option => {
    setShowPopup(false);
    // Handle navigation or logic for each option
    if (option === 'new') {
      // navigate to new question screen
      setTimeout(() => {
        setNewQuestion({show: true});
      }, 1000);
    } else if (option === 'library') {
      setTimeout(() => {
        setQuestionsLib({show: true});
      }, 1000);

      // navigate to library
    } else if (option === 'excel') {
      // navigate to import
      setTimeout(() => {
        setUploadExcelPopup({show: true});
      }, 1000);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: 'rgba(250, 250, 252, 1)',
      }}>
      <TobNavBar title={'CUSTOM QUESTIONS'} navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: 'rgba(250, 250, 252, 1)',
        }}>
        <View style={{height: moderateScale(70)}} />
        <View>
          <Text textAlign bold fontSize={16}>
            ADD YOUR OWN QUESTIONS
          </Text>

          <Text
            textAlign
            fontSize={14}
            style={{marginVertical: moderateScale(20)}}>
            You can add custom questions for the Shielder to ask or look for and
            report for the survey.
          </Text>
          <View style={{marginVertical: moderateScale(10)}}>
            <Button
              title="Add Custom Questions"
              onPress={() => setShowPopup(true)}
            />
          </View>
        </View>
      </ScrollView>
      <AddCustomQuestionPopup
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        onSelect={handleSelect}
      />

      {newQuestion.show && (
        <NewQuestion
          isModalVisible={newQuestion.show}
          toggleModal={() => {
            setNewQuestion({show: false});
          }}
          navigation={props.navigation}
        />
      )}

      {questionsLib.show && (
        <QuestionsLibrary
          isModalVisible={questionsLib.show}
          toggleModal={() => {
            setQuestionsLib({show: false});
          }}
          navigation={props.navigation}
        />
      )}

      {uploadExcelPopup.show && (
        <UploadExcel
          isModalVisible={uploadExcelPopup.show}
          toggleModal={() => {
            setUploadExcelPopup({show: false});
          }}
          navigation={props.navigation}
        />
      )}
    </View>
  );
};

export default CustomQuestions;

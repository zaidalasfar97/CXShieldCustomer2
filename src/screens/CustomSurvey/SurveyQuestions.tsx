/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../../components/Text';
import Button from '../../components/Button';
import TobNavBar from '../../components/TobNavBar';
import {moderateScale} from 'react-native-size-matters';
import Close from '../../assets/svg/Home/Close.svg';
import DotIndicator from '../../components/DotIndicator';
import {ScrollView} from 'moti';
import {tbColors} from '../../config/appConfig';
import SaveChanges from '../../assets/svg/Common/SaveChanges.svg';

interface SurveyQuestionsProps {
  navigation: any;
}

const SurveyQuestions = (props: SurveyQuestionsProps) => {
  const [shoppingOption, setShoppingOption] = useState('');
  const [business, setBusiness] = useState('');

  const QuestionCard = ({
    count,
    title,
    description,
  }: {
    count: number;
    title: string;
    description: string;
  }) => {
    return (
      <View
        style={{
          // flexDirection: 'row',
          // alignItems: 'center',
          padding: moderateScale(16),
          marginBottom: moderateScale(12),
          backgroundColor: 'white',
          borderRadius: moderateScale(12),
          borderWidth: 1,
          borderColor: '#DEDEEC',
        }}>
        <View
          style={{
            width: moderateScale(80),
            height: moderateScale(80),
            borderRadius: 12,
            backgroundColor: '#F4F4F9',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: moderateScale(16),
            borderColor: '#DEDEEC',
            borderWidth: 2,
          }}>
          <Text bold fontSize={18}>
            {count}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            bold
            fontSize={22}
            style={{color: tbColors.primary, marginTop: moderateScale(10)}}>
            {title}
          </Text>
          <Text fontSize={14} color={tbColors.grey} style={{marginTop: 4}}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

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
        showsVerticalScrollIndicator={false}
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
          Survey Questions
        </Text>
        <Text style={{textAlign: 'center', marginBottom: 24}}>
          Add and manage survey questions.
        </Text>
        <DotIndicator total={6} activeIndex={4} />

        <View style={{marginTop: 16}}>
          <QuestionCard
            count={23}
            title="Default Questions"
            description="Pre-set, standard questions for key survey topics."
          />
          <QuestionCard
            count={10}
            title="Custom Questions"
            description="Your own personalized survey questions."
          />
          <QuestionCard
            count={5}
            title="Archived Questions"
            description="Questions you've previously removed or hidden."
          />
        </View>

        <View
          style={{
            marginVertical: moderateScale(10),
          }}>
          <Button
            title="Publish Survey"
            onPress={() => props.navigation.navigate('DefaultQuestions')}
            icon={<SaveChanges />}
            BKColor={tbColors.primary}
          />
        </View>
        <View style={{height: moderateScale(75)}} />
      </ScrollView>
    </View>
  );
};

export default SurveyQuestions;

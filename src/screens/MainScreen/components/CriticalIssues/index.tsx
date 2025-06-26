/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../../../components/Text';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {tbColors} from '../../../../config/appConfig';
import CriticalIssueCard from '../CriticalIssueCard';

interface CriticalIssuesProps {
  title?: any;
  numberOfTitle?: any;
  icon?: React.ReactElement;
  navigation: any;
}

const CriticalIssues = (props: CriticalIssuesProps) => {
  const criticalData = [
    {
      id: '1',
      question: 'The dining area is clean and pleasant',
      answer: 'No',
    },
    {
      id: '2',
      question: 'Proper hand washing before food handling',
      answer: 'No',
    },
    {
      id: '3',
      question: 'Food is stored at the correct temperature',
      answer: 'Yes',
    },
    {
      id: '4',
      question: 'Overall star rating',
      answer: 'Yes',
      starRating: 4,
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
        <Text color={tbColors.primary} style={{fontSize: 18}}>
          Critical Issues
        </Text>
        <View style={{marginHorizontal: '3%'}} />
      </TouchableOpacity>
      {/* <View style={{alignItems: 'center'}}> */}
      <FlatList
        // horizontal
        showsHorizontalScrollIndicator={false}
        data={criticalData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CriticalIssueCard
            question={item.question}
            answer={item.answer}
            width={'100%'}
            starRating={item.starRating}
          />
        )}
        // style={{alignSelf: 'center'}}
        // contentContainerStyle={{paddingVertical: 8}}
      />
      {/* </View> */}
    </View>
  );
};

export default CriticalIssues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {I18nManager, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

interface FeedBackHighlightsProps {
  question: string;
  answer: string;
  comment?: string;
}

const FeedBackHighlights = ({
  question,
  answer,
  comment,
}: FeedBackHighlightsProps) => {
  const isRTL = I18nManager.isRTL;

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.separator} />
      <Text style={styles.answer}>{answer}</Text>
      <View
        style={{
          marginHorizontal: moderateScale(15),
          marginVertical: moderateScale(16),
          backgroundColor: '#FAFAFC',
          paddingHorizontal: moderateScale(14),
          borderRadius: moderateScale(8),
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginVertical: moderateScale(8),
          }}>
          Comment:
        </Text>
        <Text style={{marginBottom: moderateScale(8)}}>{comment}</Text>
      </View>
    </View>
  );
};

export default FeedBackHighlights;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(12),
    marginVertical: moderateScale(10),
    marginRight: moderateScale(10),
    width: moderateScale(280),
    borderWidth: 1,
    borderColor: '#FBEAEA',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FBEAEA',
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(8),
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    marginBottom: moderateScale(10),
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#E8685C',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202B36',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
    marginHorizontal: moderateScale(15),
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(15),
    // padding: moderateScale(10),
  },
  answer: {
    fontSize: 18,
    color: '#202B36',
    fontWeight: 'bold',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(10),
  },
});

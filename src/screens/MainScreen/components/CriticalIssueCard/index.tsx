import React from 'react';
import {I18nManager, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import Text from '../../../../components/Text';
import EmptyStar from '../../../../assets/svg/Home/emptyStar.svg';
import Start from '../../../../assets/svg/Home/Start.svg';

interface CriticalIssueCardProps {
  question: string;
  answer: string;
  width?: any;
  starRating?: number;
}

const CriticalIssueCard = ({
  question,
  answer,
  width,
  starRating,
}: CriticalIssueCardProps) => {
  const isRTL = I18nManager.isRTL;

  return (
    <View style={[styles.card, width && {width}]}>
      <View style={styles.header}>
        <Icon
          name="alert-triangle"
          size={16}
          color="#E8685C"
          style={{marginEnd: moderateScale(4)}}
        />
        <Text style={styles.headerText}>CRITICAL</Text>
      </View>

      <Text style={styles.question}>{question}</Text>
      {typeof starRating === 'number' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginBottom: 4,
          }}>
          {[...Array(5)].map((_, i) =>
            i < starRating ? (
              <Start
                key={i}
                width={20}
                height={20}
                style={{marginHorizontal: 2}}
              />
            ) : (
              <EmptyStar
                key={i}
                width={20}
                height={20}
                style={{marginHorizontal: 2}}
              />
            ),
          )}
          <Text bold fontSize={16} style={{marginLeft: 6}}>
            ({starRating} stars)
          </Text>
        </View>
      )}
      <View style={styles.separator} />
      <Text style={styles.answer}>{answer}</Text>
    </View>
  );
};

export default CriticalIssueCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(12),
    marginVertical: moderateScale(10),
    marginRight: moderateScale(10),
    width: moderateScale(260),
    borderWidth: 1,
    borderColor: '#FBEAEA',
    alignSelf: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202B36',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    padding: moderateScale(10),
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(10),
    // padding: moderateScale(10),
  },
  answer: {
    fontSize: 15,
    color: '#202B36',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    marginHorizontal: moderateScale(10),
    // paddingVertical: moderateScale(20),
    marginVertical: moderateScale(10),
    marginBottom: moderateScale(30),
  },
});

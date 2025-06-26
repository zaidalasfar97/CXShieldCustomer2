/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface ScoresSummaryProps {
  percentage?: any;
  label?: any;
  backgroundColor?: any;
  height?: any;
}

const ScoreCard = (props: ScoresSummaryProps) => {
  console.log(props);
  return (
    <View
      style={{
        height: props.height,
        borderRadius: moderateScale(16),
        backgroundColor: '#F4F4F9',
        overflow: 'hidden',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
      }}>
      {/* Background fill */}
      <View
        style={[
          styles.fill,
          {
            width: `${props.percentage}%`,
            backgroundColor: props.backgroundColor,
          },
        ]}
      />
      {/* Overlay text */}
      <View style={styles.overlay}>
        <Text style={styles.percentageText}>{props.percentage}%</Text>
        <Text style={styles.labelBox}>{props.label}</Text>
      </View>
    </View>
  );
};

export default ScoreCard;
const styles = StyleSheet.create({
  containerTwo: {
    height: 120,
    borderRadius: moderateScale(16),
    backgroundColor: '#F4F4F8',
    overflow: 'hidden',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  fill: {
    position: 'absolute',
    height: '100%',
    borderRadius: moderateScale(16),

    left: 0,
    top: 0,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  labelBox: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

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

const ScoreCardSmall = (props: ScoresSummaryProps) => {
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

export default ScoreCardSmall;
const styles = StyleSheet.create({
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
    flexDirection: 'row',
  },
  percentageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  labelBox: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

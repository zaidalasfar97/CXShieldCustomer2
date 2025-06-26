import React from 'react';
import {View, StyleSheet} from 'react-native';

const DotIndicator = ({total = 4, activeIndex = 0}) => {
  return (
    <View style={styles.container}>
      {Array.from({length: total}).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            i <= activeIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginVertical: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: '#2EC4B6',
  },
  inactiveDot: {
    backgroundColor: '#DEDEEC',
  },
});

export default DotIndicator;

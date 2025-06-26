/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';
import Plus from '../../../assets/svg/Common/Plus.svg';

interface QuestionsLibProps {
  navigation: any;
}

const Notifications = (props: QuestionsLibProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          Notifications
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Plus />
        </TouchableOpacity>
      </TouchableOpacity>
      <View
        style={{
          marginHorizontal: moderateScale(5),
          marginVertical: moderateScale(10),
        }}>
        <Text bold fontSize={16}>
          Audit Report Ready
        </Text>
        <Text fontSize={16} style={{marginVertical: moderateScale(6)}}>
          Your audit report is complete! Access the detailed report now to
          review the results and recommendations.
        </Text>
        <Text
          color={tbColors.grey}
          fontSize={16}
          style={{marginVertical: moderateScale(1)}}>
          Just now
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          borderColor: '#DEDEEC',
          borderWidth: 1,
          marginVertical: moderateScale(10),
        }}
      />
      <View
        style={{
          marginHorizontal: moderateScale(5),
          marginVertical: moderateScale(5),
        }}>
        <Text bold fontSize={16}>
          Audit Report Ready
        </Text>
        <Text fontSize={16} style={{marginVertical: moderateScale(6)}}>
          Your audit report is complete! Access the detailed report now to
          review the results and recommendations.
        </Text>
        <Text
          color={tbColors.grey}
          fontSize={16}
          style={{marginVertical: moderateScale(1)}}>
          Just now
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          borderColor: '#DEDEEC',
          borderWidth: 1,
          marginVertical: moderateScale(10),
        }}
      />
      <View
        style={{
          marginHorizontal: moderateScale(5),
          marginVertical: moderateScale(5),
        }}>
        <Text bold color={'#798086'} fontSize={16}>
          Audit Report Ready
        </Text>
        <Text
          fontSize={16}
          color={'#798086'}
          style={{marginVertical: moderateScale(6)}}>
          Your audit report is complete! Access the detailed report now to
          review the results and recommendations.
        </Text>
        <Text
          color={tbColors.grey}
          fontSize={16}
          style={{marginVertical: moderateScale(1)}}>
          3 days ago
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          borderColor: '#DEDEEC',
          borderWidth: 1,
          marginVertical: moderateScale(10),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(20),
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 5,
  },

  //   containerTwo: {flex: 1, padding: 16, backgroundColor: '#fff'},
  //   searchInput: {
  //     borderWidth: 1,
  //     borderColor: '#ccc',
  //     borderRadius: 8,
  //     paddingHorizontal: 12,
  //     paddingVertical: 8,
  //     marginBottom: 12,
  //   },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterChip: {
    borderWidth: 1,
    borderColor: '#ccc',

    borderRadius: 20,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(14),
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: tbColors.primary,
    borderColor: '#00B7B2',
  },
  filterText: {color: '#333'},
  activeFilterText: {color: '#FFFFFF', fontWeight: 'bold'},
  questionCount: {marginBottom: 8},
  questionItem: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  questionText: {fontSize: moderateScale(16), marginBottom: 8},
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  badge: {
    backgroundColor: '#E6EAF0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 6,
    borderWidth: 1,
    borderColor: 'transparent',

    justifyContent: 'center',
  },
  badgeText: {fontSize: 12, color: '#333'},
  actions: {
    position: 'absolute',
    right: 10,
    // top: 10,
    flexDirection: 'row',
    gap: 10,
  },
  icon: {fontSize: 16},
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: tbColors.grey,
    borderRadius: moderateScale(12),
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: moderateScale(14),
  },
  badgeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Notifications;

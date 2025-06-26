/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';
import Plus from '../../../assets/svg/Common/Plus.svg';
import NewBranchPic from '../../../assets/svg/NewAccount/NewBranch.svg';
import EditDetails from '../../../assets/svg/NewAccount/EditDetails.svg';

interface ManageBrandsProps {
  navigation: any;
}

const ManageBrands = (props: ManageBrandsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          MANAGE BRANDS
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('NewBusiness');
          }}>
          <Plus />
        </TouchableOpacity>
      </TouchableOpacity>

      <View
        style={{
          borderRadius: 10,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          paddingVertical: 12,
          marginVertical: moderateScale(40),
          backgroundColor: '#FFFFFF',
          borderColor: '#DEDEEC',
          borderWidth: 1,
          paddingHorizontal: moderateScale(16),
        }}>
        <NewBranchPic style={{marginHorizontal: 5}} />
        <View>
          <Text
            style={{
              color: '#2EC4B6',
              fontSize: 18,
              fontWeight: 'bold',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            Yaseen Restaurant
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 5,
            }}>
            <EditDetails />

            <Text
              style={{
                color: '#798086',
                fontSize: 14,
                fontWeight: 'bold',
                marginHorizontal: 5,
                marginVertical: 10,
              }}>
              Edit Details
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250, 250, 252, 1)',
    paddingTop: moderateScale(60),
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default ManageBrands;

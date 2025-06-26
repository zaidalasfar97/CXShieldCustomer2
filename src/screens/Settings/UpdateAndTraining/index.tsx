/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';
import Plus from '../../../assets/svg/Common/Plus.svg';
import Search from '../../../assets/svg/Common/search.svg';
import {Image, ScrollView} from 'moti';
import CriticalIcon from '../../../assets/svg/Settings/CriticalIcon.svg';
import Edit from '../../../assets/svg/Settings/Edit.svg';
import Delete from '../../../assets/svg/Settings/Delete.svg';
import NewQuestion from '../NewQuestions';
interface QuestionsLibProps {
  navigation: any;
}

const UpdateAndTraining = (props: QuestionsLibProps) => {
  const [search, setSearch] = useState('');
  const [selectedData, setSelectedData] = useState('1');
  console.log(selectedData, 'selectedData', selectedData === '');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          UPDATES AND TRAINING
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </TouchableOpacity>
      <View style={{marginVertical: moderateScale(24)}}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Search updates and training..."
            style={styles.searchInput}
            value={search}
            placeholderTextColor={'#798086'}
            onChangeText={setSearch}
          />
          <Search />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              setSelectedData('1');
            }}>
            <Image
              style={{
                alignItems: 'center',
                width: '100%',
                borderRadius: moderateScale(18),
              }}
              source={require('../../../assets/svg/Settings/Update&Training.png')}
            />
            <Text
              bold
              fontSize={18}
              color="#202B36"
              style={{marginTop: moderateScale(24)}}>
              Streamlining Audits: How Automation Cuts Time in Half
            </Text>
            <Text
              fontSize={16}
              color="#202B36"
              style={{marginTop: moderateScale(8)}}>
              Discover how using automated auditing software can reduce the time
              spent on audits, allowing your business to focus on growth.
            </Text>
          </TouchableOpacity>

          <Image
            style={{
              alignItems: 'center',
              width: '100%',
              borderRadius: moderateScale(18),
              marginVertical: moderateScale(22),
            }}
            source={require('../../../assets/svg/Settings/Update&Training.png')}
          />
          <Text
            bold
            fontSize={18}
            color="#202B36"
            style={{marginTop: moderateScale(24)}}>
            Streamlining Audits: How Automation Cuts Time in Half
          </Text>
          <Text
            fontSize={16}
            color="#202B36"
            style={{marginTop: moderateScale(8)}}>
            Discover how using automated auditing software can reduce the time
            spent on audits, allowing your business to focus on growth.
          </Text>
          <View style={{height: moderateScale(200)}} />
        </ScrollView>
      </View>
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

export default UpdateAndTraining;

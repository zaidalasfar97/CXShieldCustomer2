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
import {ScrollView} from 'moti';
import CriticalIcon from '../../../assets/svg/Settings/CriticalIcon.svg';
import Edit from '../../../assets/svg/Settings/Edit.svg';
import Delete from '../../../assets/svg/Settings/Delete.svg';
import NewQuestion from '../NewQuestions';
interface QuestionsLibProps {
  navigation: any;
}

const QuestionsLib = (props: QuestionsLibProps) => {
  const [newQuestionPopup, setNewQuestionPopup] = useState({
    show: false,
  });
  const filters = ['All', 'Quality of Product', 'Quality of Service'];

  const questions = [
    {
      id: '1',
      text: 'Politeness of the staff',
      tags: ['Critical', 'Scored', '5 Stars'],
    },
    {
      id: '2',
      text: 'Proper use of face masks by staff',
      tags: ['Scored', 'Yes/No'],
    },
    {
      id: '3',
      text: 'The meal includes additional sauces like ketchup and mayonnaise',
      tags: ['Scored', 'Open'],
    },
    {
      id: '4',
      text: 'Overall satisfaction with the visit',
      tags: ['Critical', 'Scored', '5 Stars'],
    },
  ];

  const Badge = ({
    label,
    type,
  }: {
    label: string;
    type?: 'critical' | 'default';
  }) => (
    <View
      style={[
        styles.badge,
        type === 'critical' && {
          backgroundColor: '#FFE6E6',
          borderColor: '#FF5A5F',
        },
      ]}>
      <View style={styles.badgeContent}>
        {type === 'critical' && (
          <CriticalIcon style={{marginRight: moderateScale(6)}} />
        )}
        <Text
          style={[styles.badgeText, type === 'critical' && {color: '#F25F5C'}]}>
          {label}
        </Text>
      </View>
    </View>
  );

  const QuestionItem = ({item}: {item: (typeof questions)[0]}) => (
    <View style={styles.questionItem}>
      <Text style={styles.questionText}>{item.text}</Text>
      <View style={styles.badgeContainer}>
        {item.tags.map(tag => (
          <Badge
            key={tag}
            label={tag}
            type={tag === 'Critical' ? 'critical' : 'default'}
          />
        ))}
        <View style={styles.actions}>
          <TouchableOpacity>
            <Edit style={{marginHorizontal: moderateScale(2)}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Delete style={{marginHorizontal: moderateScale(2)}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          Questions Library
        </Text>
        <TouchableOpacity
          onPress={() => {
            setNewQuestionPopup({show: true});
          }}>
          <Plus />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={{marginVertical: moderateScale(30)}}>
        <View>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Search questions"
              style={styles.searchInput}
              value={search}
              placeholderTextColor={'#798086'}
              onChangeText={setSearch}
            />
            <Search />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterContainer}>
              {filters.map(filter => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterChip,
                    selectedFilter === filter && styles.activeFilterChip,
                  ]}
                  onPress={() => setSelectedFilter(filter)}>
                  <Text
                    bold
                    style={[
                      styles.filterText,
                      selectedFilter === filter && styles.activeFilterText,
                    ]}>
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <Text bold fontSize={18} style={styles.questionCount}>
            4 Questions
          </Text>

          <FlatList
            data={questions}
            keyExtractor={item => item.id}
            renderItem={({item}) => <QuestionItem item={item} />}
            contentContainerStyle={{paddingBottom: 40}}
          />
        </View>
      </View>
      {newQuestionPopup.show && (
        <NewQuestion
          isModalVisible={newQuestionPopup.show}
          toggleModal={() => {
            setNewQuestionPopup({show: false});
          }}
          navigation={props.navigation}
        />
      )}
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

export default QuestionsLib;

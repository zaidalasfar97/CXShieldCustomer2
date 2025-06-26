import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // for chevron and search
import Back from '../../../assets/svg/Common/Back.svg';
import {tbColors} from '../../../config/appConfig';
import Text from '../../../components/Text';
import {moderateScale} from 'react-native-size-matters';

const faqData = [
  {
    id: '1',
    question: 'How do I add a payment method?',
    answer: 'To add a payment method, go to "Payment Setup"...',
  },
  {
    id: '2',
    question: 'Is my payment information secure?',
    answer:
      'To add a payment method, go to "Payment Setup" in the app. Choose from Debit/Credit Card, Phone Wallet, or CliQ Payment, and follow the prompts.',
  },
  {
    id: '3',
    question: 'Can I view my payment history?',
    answer: 'Yes, go to Settings > Payment History...',
  },
  {
    id: '4',
    question: 'How do I top up my balance?',
    answer: 'You can top up using your preferred payment method...',
  },
  {
    id: '5',
    question: 'What should I do if a payment fails?',
    answer: 'Check your internet connection and payment details...',
  },
];

interface FAQsProps {
  navigation: any;
}

const FAQScreen = (props: FAQsProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          FAQs
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search FAQs"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filteredFaqs}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          const isExpanded = item.id === expandedId;
          return (
            <TouchableOpacity
              onPress={() => toggleExpand(item.id)}
              activeOpacity={0.8}
              style={[styles.card, isExpanded && styles.expandedCard]}>
              <View style={styles.cardHeader}>
                <Text
                  style={[
                    styles.question,
                    isExpanded && {fontWeight: 'bold'},
                    isExpanded && {color: '#2EC4B6'},
                  ]}>
                  {item.question}
                </Text>
                <Icon
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#333"
                />
              </View>
              {isExpanded && <Text style={styles.answer}>{item.answer}</Text>}
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(250, 250, 252, 1)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    marginTop: moderateScale(10),
  },
  searchIcon: {marginRight: 8},
  searchInput: {flex: 1, paddingVertical: 10},
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: moderateScale(16),
    marginBottom: 12,
  },
  expandedCard: {
    borderWidth: 1,
    borderColor: '#DEDEEC',
    backgroundColor: '#FFFFFF',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    flexWrap: 'wrap',
  },
  answer: {
    marginTop: 10,
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FAQScreen;

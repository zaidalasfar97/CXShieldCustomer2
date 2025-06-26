import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';

// Import your local SVGs
import NewAccountSvg from '../../assets/svg/NewAccount/NewAccount.svg';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Back from '../../assets/svg/NewAccount/BackBlack.svg';

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: <NewAccountSvg />,
    title: 'Ensure Quality',
    description:
      'CX Shield helps business adhere to the standards of health and quality',
  },
  {
    id: '2',
    image: <NewAccountSvg />,
    title: 'Ensure Safety',
    description:
      'Keep your business environment safe and reliable for customers and staff.',
  },
  {
    id: '3',
    image: <NewAccountSvg />,
    title: 'Build Trust',
    description: 'Gain customer trust by following consistent, high standards.',
  },
];
interface CreateAccountScreenProps {
  navigation: any;
}
const CreateAccountScreen = (props: CreateAccountScreenProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={[
        '#2EC4B6',
        '#3CC8BB',
        '#46CBBE',
        '#59D0C5',
        // '#69D5CB',
        '#7CDAD1',
        // '#8DDFD7',
        '#A4E6DF',
        '#BCEDE8',
        '#D4F3F0',
        '#EBFAF8',
        '#EBFAF8',
        '#EBFAF8',
        '#EBFAF8',
      ]}>
      {/* Back Arrow */}
      <Back style={styles.backArrow} />

      {/* Carousel */}
      <View>
        <FlatList
          ref={flatListRef}
          data={slides}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({item}) => (
            <View style={styles.slide}>
              <View style={styles.imageWrapper}>{item.image}</View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={i === activeIndex ? styles.dotActive : styles.dotInactive}
            />
          ))}
        </View>
      </View>

      {/* Dot Indicators */}

      {/* Bottom Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>New Account</Text>
        <Text style={styles.cardText}>
          Thank you for taking interest in CX Shield. In case you’re a business
          owner, you’ll have to provide information about your business, and
          assign a representative or a contact to manage your account.
        </Text>
        <Button
          title="Create New Account"
          onPress={async () => {
            // await storeData('access_token', 'login');

            props.navigation.navigate('AccountTypeScreen');
            // props.navigation.navigate('AddNewBranch');
          }}
          // icon={<BidLogo />}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85E3D0',
    paddingTop: 50,
  },
  backArrow: {
    fontSize: 28,
    marginLeft: 20,
    marginBottom: 10,
  },
  slide: {
    width: width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageWrapper: {
    // width: 230,
    // height: 230,
    // borderRadius: 90,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#202B36',
  },
  description: {
    fontSize: 18,
    color: '#202B36',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
  card: {
    height: 350,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24,
    paddingBottom: 40,
    marginVertical: '10%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#42B69E',
    textAlign: 'center',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1B1F27',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CreateAccountScreen;

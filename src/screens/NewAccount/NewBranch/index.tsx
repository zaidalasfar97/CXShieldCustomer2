/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// const {width} = Dimensions.get('window');
import AccountCreatedPic from '../../../assets/svg/NewAccount/AccountCreated.svg';
import NewBranchPic from '../../../assets/svg/NewAccount/NewBranch.svg';
import EditDetails from '../../../assets/svg/NewAccount/EditDetails.svg';
import LinearGradient from 'react-native-linear-gradient';
import MapPic from '../../../assets/svg/NewAccount/map.svg';
import ContactPerson from '../../../assets/svg/NewAccount/ContactPerson.svg';
import ContactNumber from '../../../assets/svg/NewAccount/ContactNumber.svg';
import {moderateScale} from 'react-native-size-matters';
import Back from '../../../assets/svg/NewAccount/BackBlack.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
// import FacilityAvailabilityBottomSheet, {
//   FacilityOption,
// } from '../../../components/FacilityAvailabilityBottomSheet';

interface NewBranchProps {
  navigation: any;
}

const NewBranch = (props: NewBranchProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');
  const [showFacilitySheet, setShowFacilitySheet] = useState(false);
  // const [selectedFacilities, setSelectedFacilities] = useState<
  //   FacilityOption[]
  // >([]);
  const facilitySheetRef = useRef(null);

  const industryData = [
    {label: 'Technology', value: 'tech'},
    {label: 'Healthcare', value: 'healthcare'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'education'},
    {label: 'Manufacturing', value: 'manufacturing'},
  ];

  // const handleSelectFacility = (option: FacilityOption) => {
  //   setSelectedFacilities(prev =>
  //     prev.includes(option)
  //       ? prev.filter(o => o !== option)
  //       : [...prev, option],
  //   );
  // };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[
          '#DEDEEC00', // 0%
          '#DEDEEC42', // 26%
          '#DEDEECE6', // 90%
          '#DEDEECE6', // 90%
          '#DEDEECFF', // 100%
          '#DEDEECFF', // 100%
        ]}>
        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}>
          <Back />
          <Text color={tbColors.grey} style={{fontSize: 18}}>
            NEW BRANCH
          </Text>
          <TouchableOpacity>
            <AccountCreatedPic height={25} width={25} />
          </TouchableOpacity>
        </TouchableOpacity>

        <View
          style={{
            borderRadius: 10,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 12,
            marginVertical: 20,
            backgroundColor: 'white',
            marginHorizontal: 20,
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
        <View
          style={{alignItems: 'center', marginVertical: 20, marginBottom: 30}}>
          <Text style={{fontSize: 18, color: '#202B36'}}>
            Got other business to manage?
          </Text>
          <Text style={{fontSize: 18, color: '#2EC4B6', fontWeight: 'bold'}}>
            Add NEW BUSINESS/BRAND
          </Text>
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 10}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('AddNewBranch');
            }}
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text fontSize={18} bold>
              Branches
            </Text>
            <Text fontSize={16} bold color={tbColors.primary}>
              + ADD NEW BRANCH
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#DEDEEC',
              marginHorizontal: 20,
              borderRadius: 16,
              paddingVertical: 20,
            }}>
            <Text style={{color: '#202B36', marginHorizontal: 20}}>
              Head Office
            </Text>
            <Text style={{color: '#798086', marginHorizontal: 20}}>
              62 Side st. from Main Street.
            </Text>
            <MapPic
              width={'90%'}
              style={{
                marginHorizontal: 20,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#F4F4F9',
                  flexDirection: 'row',
                  padding: 5,
                  alignItems: 'center',
                  borderRadius: 50,
                  paddingHorizontal: moderateScale(10),

                  width: '48%',
                }}>
                <ContactPerson width={22} height={22} />
                <Text>Ahmad Hassan</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F4F4F9',
                  flexDirection: 'row',
                  padding: 5,
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10),
                  borderRadius: 50,
                  width: '48%',
                }}>
                <ContactNumber width={18} height={18} />
                <Text>+962 123 45 67</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Facility Availability Bottom Sheet */}
      {/* <FacilityAvailabilityBottomSheet
        ref={facilitySheetRef}
        visible={showFacilitySheet}
        selected={selectedFacilities}
        onSelect={handleSelectFacility}
        onConfirm={() => setShowFacilitySheet(false)}
        onClose={() => setShowFacilitySheet(false)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingTop: 60,
    // paddingHorizontal: 20,
  },
  backButton: {
    // position: 'absolute',
    // top: 50,
    // left: 24,
    // zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: moderateScale(5),
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginVertical: 5,
  },
  cardContainer: {
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEEC',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2EC4B6',
    marginTop: 12,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: '#333',
  },
});

export default NewBranch;

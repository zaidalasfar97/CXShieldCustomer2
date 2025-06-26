/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Back from '../../../assets/svg/Common/Back.svg';
import Text from '../../../components/Text';
import {tbColors} from '../../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';
import Money from '../../../assets/svg/Home/Money.svg';
import {ScrollView} from 'moti';
import CurrentPlan from '../../../assets/svg/Financials/CurrentPlan.svg';
import TasksDone from '../../../assets/svg/Financials/TasksDone.svg';
import Months from '../../../assets/svg/Financials/Months.svg';
import SubDetails from '../../../assets/svg/Financials/SubDetails.svg';
import StartDate from '../../../assets/svg/Financials/StartDate.svg';
import Duration from '../../../assets/svg/Financials/Duration.svg';
import ExpDate from '../../../assets/svg/Financials/ExpDate.svg';
import TasksFin from '../../../assets/svg/Financials/TasksFin.svg';
import Options from '../../../assets/svg/Financials/Options.svg';
import ContactSupport from '../../../assets/svg/Financials/ContactSupport.svg';
import SubscriptionWhite from '../../../assets/svg/Financials/Subscription.svg';
import ArrowGreen from '../../../assets/svg/Financials/ArrowGreen.svg';
import NewPlan from '../NewPlan';

interface ManageSubscriptionProps {
  navigation: any;
}

const ManageSubscription = (props: ManageSubscriptionProps) => {
  const [newPlan, setNewPlan] = useState({
    show: false,
  });
  const SubscriptionDetailsComp = ({
    icon,
    title,
    data,
    isFirst,
  }: {
    icon: any;
    title: string;
    data: string;
    isFirst?: boolean;
  }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: isFirst ? moderateScale(16) : 0,
          marginHorizontal: moderateScale(20),
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '55%'}}>
          {icon}
          <Text
            fontSize={14}
            color={tbColors.grey}
            style={{marginHorizontal: moderateScale(12)}}>
            {title}
          </Text>
        </View>
        <Text fontSize={14} style={{marginHorizontal: moderateScale(5)}}>
          {data}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}>
          <Back />
          <Text color={tbColors.grey} fontSize={18}>
            MANAGE SUBSCRIPTION
          </Text>
          <View />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DEDEEC',
            backgroundColor: '#FFFFFF',
            borderRadius: moderateScale(12),
            marginVertical: moderateScale(30),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: moderateScale(20),
              marginHorizontal: moderateScale(20),
            }}>
            <CurrentPlan />
            <Text
              bold
              fontSize={18}
              style={{marginHorizontal: moderateScale(8)}}>
              Current Plan
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   marginTop: 20,
              // alignSelf: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                backgroundColor: '#F4F4F9',
                paddingVertical: moderateScale(14),
                paddingHorizontal: moderateScale(10),
                borderRadius: moderateScale(16),
                width: '45%',
              }}>
              <Months style={{alignSelf: 'center'}} />
              <Text
                style={{marginVertical: moderateScale(8), alignSelf: 'center'}}
                bold
                fontSize={moderateScale(22)}>
                3 MONTHS
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#F4F4F9',
                paddingVertical: moderateScale(14),
                paddingHorizontal: moderateScale(8),
                borderRadius: moderateScale(16),
                width: '45%',
              }}>
              <TasksDone style={{alignSelf: 'center'}} />
              <Text
                style={{marginVertical: moderateScale(8), alignSelf: 'center'}}
                bold
                fontSize={moderateScale(22)}>
                40 TASKS
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#DEDEEC',
              marginVertical: moderateScale(14),
              marginHorizontal: moderateScale(15),
            }}
          />
          <View
            style={{
              marginHorizontal: moderateScale(15),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SubDetails />
            <Text
              bold
              fontSize={18}
              style={{marginHorizontal: moderateScale(6)}}>
              Subscription Details
            </Text>
          </View>
          <SubscriptionDetailsComp
            icon={<StartDate />}
            title={'Start Date'}
            data="15 June 2022"
            isFirst
          />

          <SubscriptionDetailsComp
            icon={<Duration />}
            title={'Duration'}
            data="3 Months"
          />

          <SubscriptionDetailsComp
            icon={<TasksFin />}
            title={'Tasks Balance'}
            data="40 Tasks"
            isFirst
          />
          <SubscriptionDetailsComp
            icon={<Money />}
            title={'Amount'}
            data="50 JOD"
          />
          <SubscriptionDetailsComp
            icon={<ExpDate />}
            title={'Expiration Date'}
            data="15 September 2024"
            isFirst
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Options />
          <Text bold fontSize={16} style={{marginHorizontal: moderateScale(6)}}>
            Options
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setNewPlan({show: true});
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 12,
              borderWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              marginVertical: 16,
              borderColor: tbColors.greyBorder,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SubscriptionWhite width={30} height={30} />
              <Text style={{marginHorizontal: 6}} bold fontSize={16}>
                More Offers And Packages
              </Text>
            </View>
            <ArrowGreen />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 12,
            borderWidth: 1,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderColor: tbColors.greyBorder,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ContactSupport />
            <Text style={{marginHorizontal: 6}} bold fontSize={16}>
              Contact Support
            </Text>
          </View>
          <ArrowGreen />
        </View>
        <View style={{height: moderateScale(100)}} />
      </ScrollView>
      {newPlan.show && (
        <NewPlan
          isModalVisible={newPlan.show}
          toggleModal={() => {
            setNewPlan({show: false});
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
    backgroundColor: '#rgba(250, 250, 252, 1)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ManageSubscription;

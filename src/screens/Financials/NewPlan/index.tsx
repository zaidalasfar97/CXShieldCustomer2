/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {t} from 'i18next';
import Text from '../../../components/Text';
import {ScreenHeight, ScreenWidth} from '../../../config/metrics';
import Close from '../../../assets/svg/Common/Close.svg';
import {tbColors} from '../../../config/appConfig';
import DesPlan from '../../../assets/svg/Financials/DesPlan.svg';
import Button from '../../../components/Button';
interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
  isIR?: boolean;
}

const planData = [
  {
    tasks: 10,
    price: '30 JOD',
    expires: '20 Feb 2025',
    benefits: [
      'Description and benefit of this plan',
      'Description and benefit of this plan',
    ],
  },
  {
    tasks: 20,
    price: '45 JOD',
    expires: '20 Feb 2025',
    benefits: [
      'Description and benefit of this plan',
      'Description and benefit of this plan',
      'Description and benefit of this plan',
    ],
  },
  {
    tasks: 40,
    price: '60 JOD',
    expires: '20 Feb 2025',
    benefits: [
      'Description and benefit of this plan',
      'Description and benefit of this plan',
      'Description and benefit of this plan',
      'Description and benefit of this plan',
    ],
  },
];

const PlanBox = ({
  tasks,
  price,
  expires,
  benefits,
  navigation,
  toggleModal,
}: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text bold fontSize={moderateScale(44)}>
          {tasks}
          <Text fontSize={moderateScale(18)}> Tasks/mo</Text>
        </Text>
        <View style={{alignSelf: 'flex-end', marginBottom: moderateScale(9)}}>
          <Text fontSize={14} color={tbColors.grey}>
            Expires:
          </Text>
          <Text fontSize={14} color={tbColors.grey}>
            {expires}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.benefitsList}>
        {benefits.map((benefit: string, index: number) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 14,
            }}>
            <DesPlan />

            <Text key={index} style={styles.benefitText}>
              {benefit}
            </Text>
          </View>
        ))}
      </View>

      <Button
        title={price}
        BKColor={tbColors.primary}
        onPress={() => {
          toggleModal();

          navigation.navigate('PlanPayment'); // <-- Now works
        }}
      />
    </View>
  );
};

const NewPlan = (props: SuccessPopProps) => {
  return (
    <Modal
      isVisible={props.isModalVisible ?? false}
      backdropColor={'#081E42'}
      backdropOpacity={0.4}
      statusBarTranslucent
      onBackdropPress={() => {
        props.toggleModal();
      }}
      style={{
        justifyContent: 'flex-end',
        borderRadius: 0,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}
      deviceHeight={ScreenHeight + 50}
      deviceWidth={ScreenWidth}>
      <Animated.View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.backButton}>
            <Close />
            <Text fontSize={18} color={tbColors.grey}>
              New Plan
            </Text>
            <View style={{width: 24}} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabRow}>
          {['30 DAYS', '90 Days', '180 Days'].map((tab, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.tab, idx === 0 && styles.activeTab]}>
              <Text style={idx === 0 ? styles.activeTabText : styles.tabText}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.planList}>
          {planData.map((plan, idx) => (
            <PlanBox
              key={idx}
              {...plan}
              navigation={props.navigation}
              toggleModal={props.toggleModal}
            />
          ))}
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default NewPlan;

const styles = StyleSheet.create({
  modalStyle: {
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // width: '100%',
  },
  container: {
    width: '100%',
    height: ScreenHeight * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: moderateScale(-20),
  },
  headerSection: {
    marginVertical: moderateScale(20),
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {
    borderWidth: 1,
    borderColor: tbColors.border,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
  },
  activeTab: {
    backgroundColor: tbColors.primary,
    borderColor: tbColors.primary,
  },
  tabText: {
    color: tbColors.grey,
    fontSize: 14,
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  planList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    marginLeft: 8,
    marginTop: moderateScale(12),
  },
  expiryText: {
    fontSize: 12,
    color: tbColors.grey,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: tbColors.greyBorder,
    marginVertical: 12,
  },
  benefitsList: {
    marginBottom: 16,
  },
  benefitText: {
    fontSize: 14,
    marginHorizontal: 6,
  },
  priceButton: {
    backgroundColor: tbColors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

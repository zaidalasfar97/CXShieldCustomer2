/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from "../../../assets/svg/Common/Back.svg";
import Text from "../../../components/Text";
import { tbColors } from "../../../config/appConfig";
import { moderateScale } from "react-native-size-matters";
import CardNumber from "../../../assets/svg/Financials/CardNumber.svg";
import Money from "../../../assets/svg/Home/Money.svg";
import { TextInputComp } from "../../../components/TextInput";
import ExpiryDate from "../../../assets/svg/Financials/ExpiryDate.svg";
import CVV from "../../../assets/svg/Financials/CVV.svg";
import Button from "../../../components/Button";
import SaveChanges from "../../../assets/svg/Common/SaveChanges.svg";
import DataNotSaved from "../../../assets/svg/Financials/DataNotSaved.svg";
import { ScrollView } from "moti";

interface PlanPaymentProps {
  navigation: any;
}

const PlanPayment = (props: PlanPaymentProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}
        >
          <Back />
          <Text color={tbColors.grey} fontSize={18}>
            PREFERRED METHOD
          </Text>
          <View />
        </TouchableOpacity>

        <View style={{ alignItems: "center" }}>
          <Text bold fontSize={22}>
            Bank Account
          </Text>
          <Text
            textAlign
            style={{ marginTop: moderateScale(10) }}
            fontSize={16}
          >
            Receive payments directly to your bank account.
          </Text>
        </View>
        <View style={{ marginVertical: moderateScale(40) }}>
          <TextInputComp
            placeholder={"Select Bank"}
            label="Select Bank"
            value={""}
            iconType=""
            onChangeText={() => {}}
          />
          <TextInputComp
            placeholder={"Account Name"}
            label="Account Name"
            value={""}
            iconType=""
            onChangeText={() => {}}
          />

          <TextInputComp
            placeholder={"Account Number"}
            label="Account Number"
            value={""}
            iconType=""
            onChangeText={() => {}}
          />

          <Button
            title="Update Payment Method"
            BKColor={tbColors.primary}
            icon={<SaveChanges />}
            onPress={() => {
              // props.navigation.navigate("NewPlanPaymentSucc");
            }}
          />
          <View>
            <DataNotSaved
              style={{ alignSelf: "center", marginTop: moderateScale(24) }}
            />
            <Text
              fontSize={14}
              color={tbColors.grey}
              style={{ textAlign: "center", marginTop: moderateScale(8) }}
            >
              KINDLY NOTE THAT ALL TRANSACTIONS ARE PROCESSED THROUGH SECURED
              CHANNELS.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default PlanPayment;

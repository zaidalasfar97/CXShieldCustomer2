/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInputComp } from "../../../components/TextInput";
import Button from "../../../components/Button";
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from "../../../assets/svg/Common/Back.svg";
import Text from "../../../components/Text";
import { tbColors } from "../../../config/appConfig";
import { moderateScale } from "react-native-size-matters";
import FullName from "../../../assets/svg/Settings/FullName.svg";
import Phone from "../../../assets/svg/Settings/Phone.svg";
import EmailAddress from "../../../assets/svg/Settings/EmailAddress.svg";
import SaveChanges from "../../../assets/svg/Common/SaveChanges.svg";
import BoxSettings from "../BoxOfSettings";
import Arrow from "../../../assets/svg/Settings/Arrow.svg";
import AccountSettings from "../../../assets/svg/Settings/AccountSettings.svg";
import LinearGradient from "react-native-linear-gradient";
import ChangePassword from "../ChangePassword";

interface AccountDetailsProps {
  navigation: any;
}

const AccountDetails = (props: AccountDetailsProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState("");
  const [ChangePasswordPopup, setChangePasswordPopup] = useState({
    show: false,
  });
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#FAFAFC", tbColors.white]}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}
      >
        <Back />
        <Text color={tbColors.grey} fontSize={18}>
          ACCOUNT DETAILS
        </Text>
        <View style={{ marginHorizontal: "3%" }} />
      </TouchableOpacity>
      <View style={{ marginVertical: moderateScale(30) }}>
        <BoxSettings
          title={"Personal Info"}
          icon={<Arrow />}
          navigation={props.navigation}
          onPress={() => {
            props.navigation.navigate("PersonalInfo");
          }}
        />
        <BoxSettings
          title={"Change Password"}
          icon={<Arrow />}
          navigation={props.navigation}
          onPress={() => {
            setChangePasswordPopup({ show: true });
          }}
        />
        <BoxSettings
          title={"Contact Details"}
          icon={<Arrow />}
          navigation={props.navigation}
          onPress={() => {
            props.navigation.navigate("ContactDetails");
          }}
        />
        <BoxSettings
          title={"Professional Info"}
          icon={<Arrow />}
          navigation={props.navigation}
          onPress={() => {
            props.navigation.navigate("ProfessionalInfo");
          }}
        />
        <BoxSettings
          title={"Update Preferences"}
          icon={<Arrow />}
          navigation={props.navigation}
          onPress={() => {
            props.navigation.navigate("UpdatePreferences");
          }}
        />
      </View>
      {ChangePasswordPopup.show && (
        <ChangePassword
          isModalVisible={ChangePasswordPopup.show}
          toggleModal={() => {
            setChangePasswordPopup({ show: false });
          }}
          navigation={props.navigation}
        />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tbColors.white,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 5,
  },
});

export default AccountDetails;

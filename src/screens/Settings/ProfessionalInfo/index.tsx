/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
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
import BusinessInfoPic from "../../../assets/svg/NewAccount/BusinessLogo.svg";
import { launchImageLibrary } from "react-native-image-picker";
import ReplaceImg from "../../../assets/svg/Settings/ReplaceImg.svg";
import DatePickerComponent from "../../../components/DatePicker";
import Date from "../../../assets/svg/Home/Date.svg";
import RadioButton from "../../../components/RadioButton";
import { ScrollView } from "moti";
import City from "../../../assets/svg/NewAccount/city.svg";

interface ProfessionalInfoProps {
  navigation: any;
}

const ProfessionalInfo = (props: ProfessionalInfoProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState("");

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#FAFAFC", tbColors.white]}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}
        >
          <Back />
          <Text color={tbColors.grey} fontSize={18}>
            CONTACT DETAILS
          </Text>
          <View style={{ marginHorizontal: "3%" }} />
        </TouchableOpacity>
        <View style={{ marginVertical: moderateScale(30) }}>
          <TextInputComp
            label={"Education"}
            placeholder={"Education"}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
          />
          <TextInputComp
            label={"Profession"}
            placeholder={"Profession"}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
          />
          <TextInputComp
            label={"Languages"}
            placeholder={"Languages"}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
          />

          <TextInputComp
            label={"LinkedIn Profile Link"}
            placeholder={"LinkedIn Profile Link"}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
            rightLabel="OR UPLOAD CV"
          />

          <View style={{ marginVertical: moderateScale(5) }}>
            <Button title="Save Changes" icon={<SaveChanges />} />
          </View>
        </View>
        <View style={{ height: moderateScale(100) }} />
      </ScrollView>
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

export default ProfessionalInfo;

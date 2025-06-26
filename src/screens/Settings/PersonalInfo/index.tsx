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

interface PersonalInfoProps {
  navigation: any;
}

const PersonalInfo = (props: PersonalInfoProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState("");

  const [logoUri, setLogoUri] = useState<string | null>(null);
  const [datePicked, setDatePicked] = useState("");

  const pickLogo = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setLogoUri(response.assets[0].uri || null);
      }
    });
  };

  const handleDateChange = (selectedDate: any) => {
    setDatePicked(selectedDate);
    console.log("Selected Date:", selectedDate);
  };

  const handleGenderSelect = (gender: string) => {
    console.log("Selected gender:", gender);
  };

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
            ACCOUNT DETAILS
          </Text>
          <View style={{ marginHorizontal: "3%" }} />
        </TouchableOpacity>
        <View style={{ marginVertical: moderateScale(30) }}>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 12,
              marginVertical: 20,
              borderColor: "#DEDEEC",
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              onPress={pickLogo}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              {logoUri ? (
                <Image
                  source={{ uri: logoUri }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    marginHorizontal: 5,
                  }}
                />
              ) : (
                <BusinessInfoPic style={{ marginHorizontal: 5 }} />
              )}
              <View
                style={{
                  marginHorizontal: moderateScale(14),
                }}
              >
                <ReplaceImg />
                <Text
                  style={{
                    color: tbColors.primary,
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: moderateScale(7),
                  }}
                >
                  REPLACE IMAGE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TextInputComp
            label={"First Name"}
            placeholder={"First Name"}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
            iconType=""
          />
          <TextInputComp
            label={"Last Name"}
            placeholder={"Last Name"}
            value={numberOfBranches}
            onChangeText={setNumberOfBranches}
            keyboardType="default"
            iconType=""
          />
          <DatePickerComponent
            onChange={handleDateChange}
            title="Birthday"
            placeholder="Birthday"
            value={datePicked}
            right={<Date />}
          />

          <RadioButton
            onSelect={handleGenderSelect}
            label1={"Male"}
            label2={"Female"}
            value1={"1"}
            value2={"2"}
            title="Gender"
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

export default PersonalInfo;

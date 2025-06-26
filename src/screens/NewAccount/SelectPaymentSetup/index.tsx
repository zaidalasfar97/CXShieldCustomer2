/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import DotIndicator from "../../../components/DotIndicator";
import { TextInputComp } from "../../../components/TextInput";
import BusinessInfoPic from "../../../assets/svg/NewAccount/BusinessLogo.svg";
import Button from "../../../components/Button";
import Next from "../../../assets/svg/NewAccount/next.svg";
import Text from "../../../components/Text";
import Back from "../../../assets/svg/NewAccount/BackBlack.svg";
import { tbColors } from "../../../config/appConfig";
import { launchImageLibrary } from "react-native-image-picker";
import DownIcon from "../../../assets/svg/NewAccount/DownIcon.svg";
import FacilityAvailabilitySheet from "../../../components/FacilityAvailabilityBottomSheet";
import { ScrollView } from "moti";
import { moderateScale } from "react-native-size-matters";
import DatePickerComponent from "../../../components/DatePicker";
import RadioButton from "../../../components/RadioButton";
import Money from "../../../assets/svg/Home/Money.svg";
import NameIcon from "../../../assets/svg/NewAccount/name.svg";
import Phone from "../../../assets/svg/Settings/Phone.svg";
import SaveChanges from "../../../assets/svg/Common/SaveChanges.svg";

interface SelectPaymentSetupProps {
  navigation: any;
}

const SelectPaymentSetup = (props: SelectPaymentSetupProps) => {
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

  const handleGenderSelect = (gender: string) => {
    console.log("Selected gender:", gender);
  };

  const handleDateChange = (selectedDate: any) => {
    setDatePicked(selectedDate);
    console.log("Selected Date:", selectedDate);
  };
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}
      >
        <Back />
        <Text color={tbColors.grey} style={{ fontSize: 18 }}>
          PAYMENT SETUP
        </Text>
        <View style={{ marginHorizontal: "3%" }} />
      </TouchableOpacity>
      {/* Header */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: moderateScale(10) }}
      >
        <TextInputComp
          label={"Select Wallet"}
          placeholder={"Select Wallet"}
          value={numberOfBranches}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType="image"
          iconSource={<Money />}
        />

        <TextInputComp
          label={"Name"}
          placeholder={"Name"}
          value={numberOfBranches}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType="image"
          iconSource={<NameIcon />}
        />

        <TextInputComp
          label={"Wallet Number"}
          placeholder={"Wallet Number"}
          value={numberOfBranches}
          onChangeText={setNumberOfBranches}
          keyboardType="default"
          iconType="image"
          iconSource={<Phone />}
        />

        <View style={{ marginVertical: moderateScale(20) }}>
          <Button
            title="Finish"
            icon={<SaveChanges />}
            BKColor={tbColors.primary}
            onPress={async () => {
              props.navigation.navigate("AccountFinish");
            }}
          />
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
    // position: 'absolute',
    // top: 50,
    // left: 24,
    // zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backArrow: {
    fontSize: 24,
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginVertical: 5,
  },
  cardContainer: {
    marginVertical: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DEDEEC",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2EC4B6",
    marginTop: 12,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: "#333",
  },
});

export default SelectPaymentSetup;

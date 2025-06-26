/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// import Next from '../../../assets/svg/NewAccount/next.svg';
import Back from "../../../assets/svg/Common/Back.svg";
import Text from "../../../components/Text";
import { tbColors } from "../../../config/appConfig";
import { moderateScale } from "react-native-size-matters";
import ArrowGreen from "../../../assets/svg/Financials/ArrowGreen.svg";

interface QuestionsLibProps {
  navigation: any;
}

const PaymentSetup = (props: QuestionsLibProps) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text bold fontSize={24}>
          Payment Setup
        </Text>
        <Text textAlign style={{ marginTop: moderateScale(10) }} fontSize={16}>
          Congratulation on joining CX Shield. Select preferred payment method.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SelectPaymentSetup");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: tbColors.greyBorder,
            paddingVertical: moderateScale(14),
            paddingHorizontal: moderateScale(20),
            borderRadius: moderateScale(14),
            justifyContent: "space-between",
            marginTop: moderateScale(30),
            alignItems: "center",
            backgroundColor: "#FFFFFF",
          }}
        >
          <View>
            <Text fontSize={18} bold>
              Bank Account
            </Text>
            <Text
              style={{ marginVertical: moderateScale(4) }}
              fontSize={14}
              color={tbColors.grey}
            >
              Receive payments directly to your bank account.
            </Text>
          </View>
          <ArrowGreen />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: tbColors.greyBorder,
          paddingVertical: moderateScale(14),
          paddingHorizontal: moderateScale(20),
          borderRadius: moderateScale(14),
          justifyContent: "space-between",
          marginTop: moderateScale(16),
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <View>
          <Text fontSize={18} bold>
            CliQ Payment
          </Text>
          <Text
            style={{ marginVertical: moderateScale(4) }}
            fontSize={14}
            color={tbColors.grey}
          >
            Receive payments via CliQ.
          </Text>
        </View>
        <ArrowGreen />
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: tbColors.greyBorder,
          paddingVertical: moderateScale(14),
          paddingHorizontal: moderateScale(20),
          borderRadius: moderateScale(14),
          justifyContent: "space-between",
          marginTop: moderateScale(16),
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <View>
          <Text fontSize={18} bold>
            Wallets
          </Text>
          <Text
            style={{ marginVertical: moderateScale(4) }}
            fontSize={14}
            color={tbColors.grey}
          >
            Use your mobile wallet to pay.
          </Text>
        </View>
        <ArrowGreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250, 250, 252, 1)",
    paddingTop: moderateScale(70),
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScale(20),
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 5,
  },

  //   containerTwo: {flex: 1, padding: 16, backgroundColor: '#fff'},
  //   searchInput: {
  //     borderWidth: 1,
  //     borderColor: '#ccc',
  //     borderRadius: 8,
  //     paddingHorizontal: 12,
  //     paddingVertical: 8,
  //     marginBottom: 12,
  //   },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  filterChip: {
    borderWidth: 1,
    borderColor: "#ccc",

    borderRadius: 20,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(14),
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: tbColors.primary,
    borderColor: "#00B7B2",
  },
  filterText: { color: "#333" },
  activeFilterText: { color: "#FFFFFF", fontWeight: "bold" },
  questionCount: { marginBottom: 8 },
  questionItem: {
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  questionText: { fontSize: moderateScale(16), marginBottom: 8 },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  badge: {
    backgroundColor: "#E6EAF0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 6,
    borderWidth: 1,
    borderColor: "transparent",

    justifyContent: "center",
  },
  badgeText: { fontSize: 12, color: "#333" },
  actions: {
    position: "absolute",
    right: 10,
    // top: 10,
    flexDirection: "row",
    gap: 10,
  },
  icon: { fontSize: 16 },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: tbColors.grey,
    borderRadius: moderateScale(12),
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: moderateScale(14),
  },
  badgeContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PaymentSetup;

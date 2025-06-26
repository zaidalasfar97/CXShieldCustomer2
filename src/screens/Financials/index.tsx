/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Search from "../../assets/svg/Home/search.svg";
import Notifications from "../../assets/svg/Home/notifications.svg";
import { ScrollView } from "moti";
import { moderateScale } from "react-native-size-matters";
import Text from "../../components/Text";
import { tbColors } from "../../config/appConfig";
import Completed from "../../assets/svg/Home/Completed.svg";
import Button from "../../components/Button";
import Money from "../../assets/svg/Home/Money.svg";
import MoneyWhite from "../../assets/svg/Financials/MoneyWhite.svg";
import Subscription from "../../assets/svg/Financials/Subscription.svg";
import SubscriptionWhite from "../../assets/svg/Financials/SubscriptionWhite.svg";
import TasksDone from "../../assets/svg/Financials/TasksDone.svg";
import Months from "../../assets/svg/Financials/Months.svg";
import ArrowGreen from "../../assets/svg/Financials/ArrowGreen.svg";
import DatePic from "../../assets/svg/Home/Date.svg";
import History from "../../assets/svg/Financials/History.svg";
import PaymentHistory from "./PaymentHistory";
import DashV from "../../assets/svg/Home/dashV.svg";

interface SettingsProps {
  navigation: any;
}

const Settings = (props: SettingsProps) => {
  const paymentData = [
    {
      date: "25 September 2024",
      time: "03:30 pm",
      type: "Balance Top Up",
      amount: "40",
      wallet: "Wallet",
      details: {
        id: "#BS-BR-123456",
        survey: "Full Survey",
        place: "Yaseen Restaurant",
      },
    },
    {
      date: "25 September 2024",
      time: "03:30 pm",
      type: "Balance Top Up",
      amount: "40",
      wallet: "Wallet",

      details: {
        id: "#BS-BR-123456",
        survey: "Full Survey",
        place: "Yaseen Restaurant",
      },
    },
    {
      date: "25 September 2024",
      time: "03:30 pm",
      type: "Balance Top Up",
      amount: "40",
      wallet: "Wallet",

      details: {
        id: "#BS-BR-123456",
        survey: "Full Survey",
        place: "Yaseen Restaurant",
      },
    },
  ];

  const renderItem = ({ item }: any) => (
    <View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text color={tbColors.grey}>{item.date}</Text>
          <DashV style={{ marginHorizontal: moderateScale(12) }} />
          <Text color={tbColors.grey}>{item.time}</Text>
          <DashV style={{ marginHorizontal: moderateScale(12) }} />
          <Text color={tbColors.grey}>{item.wallet}</Text>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text bold fontSize={18}>
            {item.type}
          </Text>
          <View style={styles.amountPill}>
            <Text bold fontSize={16} color={tbColors.black}>
              {item.amount}{" "}
              <Text fontSize={12} color={tbColors.grey}>
                JOD
              </Text>
            </Text>
          </View>
        </View>

        {item.details && (
          <View style={styles.detailsBox}>
            <Text
              bold
              fontSize={14}
              color={tbColors.grey}
              style={{ marginBottom: 4 }}
            >
              {item.details.id}
            </Text>
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text fontSize={14}>{item.details.survey}</Text>
              <DashV style={{ marginHorizontal: moderateScale(7) }} />
              <Text fontSize={14}>{item.details.place}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
  return (
    <ScrollView
      style={{ backgroundColor: "#FFFFFF" }}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[tbColors.white, tbColors.white, "#A4E6DF", "#A4E6DF"]}
      >
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <Text color="#202B36" fontSize={24} bold>
              FINANCIALS
            </Text>
          </View>
          <View style={styles.rightSection}>
            <TouchableOpacity style={styles.iconCircle}>
              <Search />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Notifications");
              }}
              style={styles.iconCircle}
            >
              <Notifications />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: moderateScale(100) }} />
      </LinearGradient>
      <View
        style={{
          borderWidth: 1,
          paddingHorizontal: 16,
          marginHorizontal: 16,
          backgroundColor: "#EBFAF8",
          borderColor: "#DEDEEC",
          borderRadius: moderateScale(16),
          marginVertical: moderateScale(-80),
        }}
      >
        <View
          style={{ flexDirection: "row", marginVertical: moderateScale(10) }}
        >
          <Money style={{ marginHorizontal: moderateScale(5) }} />
          <Text fontSize={17} style={{ fontWeight: "700" }}>
            Pending Balance
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            fontSize={moderateScale(40)}
            bold
            // style={{fontWeight: '700'}}
            color={tbColors.black}
          >
            480
          </Text>
          <Text
            fontSize={moderateScale(20)}
            bold
            style={{
              marginTop: moderateScale(10),
              marginHorizontal: moderateScale(10),
            }}
            color={tbColors.grey}
          >
            JOD
          </Text>
        </View>
        <View style={{ marginVertical: moderateScale(16) }}>
          <Button
            title="Preferred Method"
            BKColor={tbColors.white}
            borderColorData={tbColors.black}
            titleColor={tbColors.black}
            onPress={() => {
              props.navigation.navigate("PreferredMethod");
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 16,
          marginTop: moderateScale(100),
          flexDirection: "row",
        }}
      >
        <History />
        <Text fontSize={16} bold style={{ marginHorizontal: moderateScale(5) }}>
          Payment History
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 16,
          marginTop: 16,
        }}
      >
        <FlatList
          data={paymentData}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={{ height: moderateScale(100) }} />
    </ScrollView>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: moderateScale(60),
    paddingBottom: 20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightSection: {
    flexDirection: "row",
    gap: 10,
  },
  iconCircle: {
    width: 44,
    height: 44,
    backgroundColor: "#ffffff",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(12),
  },
  settingBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    marginVertical: moderateScale(8),
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    // justifyContent: 'space-between',
  },

  amountPill: {
    backgroundColor: "#EBFAF8",
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  detailsBox: {
    backgroundColor: "#F4F4F9",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    borderColor: tbColors.greyBorder,
    borderWidth: 1,
  },
});

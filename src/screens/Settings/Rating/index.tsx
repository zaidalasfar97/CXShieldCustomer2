/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

// import {t} from 'i18next';
import LinearGradient from "react-native-linear-gradient";
import NameOfBrand from "../../../assets/svg/Home/NameOfBrand.svg";
import Search from "../../../assets/svg/Home/search.svg";
import Notifications from "../../../assets/svg/Home/notifications.svg";
import Remaining from "../../../assets/svg/Home/Remaining.svg";
import Completed from "../../../assets/svg/Home/Completed.svg";
import LastTask from "../../../assets/svg/Home/LastTask.svg";
import DashV from "../../../assets/svg/Home/dashV.svg";
import PDF from "../../../assets/svg/Home/PDF.svg";
import { ScrollView } from "moti";
import DatePic from "../../../assets/svg/Home/Date.svg";
import Money from "../../../assets/svg/Home/Money.svg";
import { moderateScale } from "react-native-size-matters";
import CustomSurvey from "../../../assets/svg/Home/CustomSurvey.svg";
import ProfileIcon from "../../../assets/svg/Home/ProfileIcon.svg";
import NewUpdates from "../../../assets/svg/Home/NewUpdates.svg";
import UpdateImage from "../../../assets/svg/Home/UpdateImage.svg";
import Text from "../../../components/Text";
import { tbColors } from "../../../config/appConfig";
import SmallBox from "../../MainScreen/components/SmallBox";
import TobNavBar from "../../../components/TobNavBar";
import WhiteArrow from "../../../assets/svg/Settings/whiteArrow.svg";
import Level from "../../../assets/svg/Settings/level.svg";
interface RatingProps {
  navigation: any;
}

const Rating = (props: RatingProps) => {
  const { width } = useWindowDimensions();

  const paymentData = [
    {
      date: "25 September 2024",
      time: "03:30 pm",
      type: "Balance Top Up",
      amount: "40 JOD",
      details: {
        id: "#BS-BR-123456",
        survey: "Full Survey",
        place: "Yaseen Restaurant",
        location: "Amman",
      },
    },
    {
      date: "18 August 2024",
      time: "11:30 am",
      type: "Bill Payment",
      amount: "30 JOD",
    },
    {
      date: "25 September 2024",
      time: "03:30 pm",
      type: "Balance Top Up",
      amount: "40 JOD",
      details: {
        id: "#BS-BR-123456",
        survey: "Full Survey",
        place: "Yaseen Restaurant",
        location: "Amman",
      },
    },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("PaymentOverview");
      }}
    >
      <View style={styles.card}>
        <View style={styles.row}>
          <Text color={tbColors.grey}>{item.date}</Text>
          <DashV style={{ marginHorizontal: moderateScale(12) }} />
          <Text color={tbColors.grey}>{item.time}</Text>
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
            <Text bold color="#066D49">
              {item.amount}
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
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text fontSize={14}>{item.details.survey}</Text>
              <DashV />
              <Text fontSize={14}>{item.details.place}</Text>
              <DashV />
              <Text fontSize={14}>{item.details.location}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: tbColors.white }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[
          "#2EC4B6",
          "#3CC8BB",
          "#46CBBE",
          "#59D0C5",
          // '#69D5CB',
          // '#7CDAD1',
          "#8DDFD7",
          "#A4E6DF",
          "#BCEDE8",
          "#D4F3F0",
          "#EBFAF8",
        ]}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <WhiteArrow />
          </TouchableOpacity>

          <Text
            color={tbColors.white}
            fontSize={18}
            style={{ paddingRight: 15 }}
          >
            RATING & FEEDBACK
          </Text>
          <View />
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
        >
          <SmallBox
            title={"Level"}
            numberOfTitle={"2"}
            description={""}
            icon={<Level />}
          />
          <SmallBox
            title={"Completed"}
            numberOfTitle={"1"}
            description={""}
            icon={<Completed />}
          />
        </View>

        <View style={{ height: moderateScale(80) }} />
      </LinearGradient>

      <View style={{ paddingHorizontal: 16 ,marginTop:moderateScale(-40)}}>
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

export default Rating;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    // marginHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 14,
    color: "#1E1E2D",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    maxWidth: 160,
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
    // marginLeft: 8,
    marginHorizontal: 10,
  },

  profileContainer: {
    position: "relative",
    width: 60, // adjust to match image size
    height: 60,
    // paddingTop: 15,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30, // circle
  },
  levelBadge: {
    position: "absolute",
    bottom: 0,
    left: -5,
    backgroundColor: "#FFD166",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 4,
    zIndex: 1,
  },
  levelText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    backgroundColor: "#E9F7F1",
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

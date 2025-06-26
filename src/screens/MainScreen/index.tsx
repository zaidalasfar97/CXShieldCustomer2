/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

// import {t} from 'i18next';
import LinearGradient from "react-native-linear-gradient";
import NameOfBrand from "../../assets/svg/Home/NameOfBrand.svg";
import Search from "../../assets/svg/Home/search.svg";
import Notifications from "../../assets/svg/Home/notifications.svg";
import Remaining from "../../assets/svg/Home/Remaining.svg";
import Completed from "../../assets/svg/Home/Completed.svg";
import ScoresSummary from "./components/ScoresSummary";
import SmallBox from "./components/SmallBox";
import LastTask from "../../assets/svg/Home/LastTask.svg";
import DashV from "../../assets/svg/Home/dashV.svg";
import PDF from "../../assets/svg/Home/PDF.svg";
import { ScrollView } from "moti";
import DatePic from "../../assets/svg/Home/Date.svg";
import Money from "../../assets/svg/Home/Money.svg";
import { moderateScale } from "react-native-size-matters";
import CustomSurvey from "../../assets/svg/Home/CustomSurvey.svg";
import ProfileIcon from "../../assets/svg/Home/ProfileIcon.svg";
import Text from "../../components/Text";
import { tbColors } from "../../config/appConfig";
import NewUpdates from "../../assets/svg/Home/NewUpdates.svg";
import UpdateImage from "../../assets/svg/Home/UpdateImage.svg";
interface MainScreenProps {
  navigation: any;
}

const MainScreen = (props: MainScreenProps) => {
  const { width } = useWindowDimensions();

  const userName = "EMAD AL SAADE"; // Assume name fetched from API
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
          <View style={styles.leftSection}>
            {/* <View>

              <ProfileIcon style={styles.logo} />
              <View style={styles.levelBadgeContainer}>
                <Text style={styles.levelBadgeText}>LEVEL 1</Text>
              </View>
            </View> */}

            <View style={styles.profileContainer}>
              <ProfileIcon style={styles.logo} />
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>LEVEL 1</Text>
              </View>
            </View>

            <View>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.userName} numberOfLines={1}>
                {userName}
              </Text>
            </View>
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
        <View
          style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
        >
          <SmallBox
            title={"Available Tasks"}
            numberOfTitle={"2"}
            description={"Tasks"}
            // icon={<Remaining />}
          />
          <SmallBox
            title={"Running Tasks"}
            numberOfTitle={"1"}
            description={"Tasks"}
            // icon={<Remaining />}
          />
        </View>

        <View
          style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
        >
          <SmallBox
            title={"Upcoming Tasks"}
            numberOfTitle={"7"}
            description={"Tasks"}
            // icon={<Remaining />}
          />
          <SmallBox
            title={"Completed Tasks"}
            numberOfTitle={"23"}
            description={"Tasks"}
            // icon={<Remaining />}
          />
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("TaskDetails")}
          style={{
            marginTop: 20,
            marginHorizontal: 20,
            // borderWidth: 1,
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(16),
            backgroundColor: tbColors.white,
            borderRadius: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text fontSize={32} bold>
              480
            </Text>
            <Text
              style={{
                marginHorizontal: moderateScale(5),
                marginTop: moderateScale(7),
              }}
              fontSize={18}
              color="#798086"
            >
              JOD
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: moderateScale(10),
              alignItems: "center",
            }}
          >
            <Remaining />
            <Text
              style={{ marginHorizontal: moderateScale(3) }}
              bold
              fontSize={12}
              color={tbColors.black}
            >
              Pending Balance
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: moderateScale(50) }} />

        {/* <ScoresSummary /> */}
      </LinearGradient>

      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <NewUpdates />
          <Text
            fontSize={16}
            bold
            style={{ marginHorizontal: moderateScale(5) }}
          >
            New Updates & Training
          </Text>
        </View>
        <View style={{ marginTop: moderateScale(10) }}>
          <UpdateImage width={"100%"} />
          <Text style={{ marginTop: moderateScale(10) }} fontSize={16} bold>
            5 Common Audit Mistakes and How to Avoid Them
          </Text>
          <Text style={{ marginTop: moderateScale(5) }} fontSize={14}>
            Learn about the most frequent errors businesses make during audits
            and how our app helps eliminate them for smoother operations.
          </Text>
        </View>
        <View style={{ marginTop: moderateScale(10) }}>
          <UpdateImage width={"100%"} />
          <Text style={{ marginTop: moderateScale(10) }} fontSize={16} bold>
            5 Common Audit Mistakes and How to Avoid Them
          </Text>
          <Text style={{ marginTop: moderateScale(5) }} fontSize={14}>
            Learn about the most frequent errors businesses make during audits
            and how our app helps eliminate them for smoother operations.
          </Text>
        </View>
      </View>

      <View style={{ height: moderateScale(100) }} />
    </ScrollView>
  );
};

export default MainScreen;
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
});

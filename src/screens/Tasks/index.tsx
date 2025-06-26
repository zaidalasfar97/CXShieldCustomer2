/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Search from "../../assets/svg/Home/search.svg";
import Notifications from "../../assets/svg/Home/notifications.svg";
import { ScrollView } from "moti";
import Text from "../../components/Text";
import { moderateScale } from "react-native-size-matters";
import { tbColors } from "../../config/appConfig";
import ContactNumber from "../../assets/svg/NewAccount/ContactNumber.svg";
import GoogleMaps from "../../assets/svg/Common/GoogleMaps.svg";
import Cafe from "../../assets/svg/Home/cafe.svg";
import DatePic from "../../assets/svg/Home/Date.svg";

interface TasksProps {
  navigation: any;
}

const Tasks = (props: TasksProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: tbColors.white }}
    >
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={[
          //   '#2EC4B6',
          //   '#3CC8BB',
          //   '#46CBBE',
          //   '#59D0C5',
          //   '#8DDFD7',
          //   '#A4E6DF',
          "#BCEDE8",
          "#D4F3F0",
          "#EBFAF8",
        ]}
      >
        <View
          style={{
            marginHorizontal: moderateScale(15),
            marginBottom: moderateScale(20),
          }}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.userName} numberOfLines={1}>
                TASKS
              </Text>
            </View>
            <View style={styles.rightSection}>
              <TouchableOpacity style={styles.iconCircle}>
                <Search />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.iconCircle, { marginRight: -10 }]}
              >
                <Notifications />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", paddingBottom: moderateScale(15) }}
          >
            <View
              style={{
                backgroundColor: "#2EC4B6",
                borderRadius: moderateScale(65),
                paddingVertical: moderateScale(14),
                paddingHorizontal: moderateScale(18),
                alignSelf: "flex-start",
                marginHorizontal: moderateScale(5),
              }}
            >
              <Text fontSize={14} color={tbColors.white} bold>
                Running (1)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: tbColors.white,
                borderRadius: moderateScale(65),
                paddingVertical: moderateScale(14),
                paddingHorizontal: moderateScale(18),
                alignSelf: "flex-start",
                marginHorizontal: moderateScale(5),
              }}
            >
              <Text fontSize={14} color={tbColors.black} bold>
                Available (2)
              </Text>
            </View>

            <View
              style={{
                backgroundColor: tbColors.white,
                borderRadius: moderateScale(65),
                paddingVertical: moderateScale(14),
                paddingHorizontal: moderateScale(18),
                alignSelf: "flex-start",
                marginHorizontal: moderateScale(5),
              }}
            >
              <Text fontSize={14} color={tbColors.black} bold>
                Upcoming (2)
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("TaskDetilsNew")}
      >
        <View
          style={{
            marginHorizontal: moderateScale(20),
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#F4F4F9",
            borderRadius: moderateScale(14),
            paddingHorizontal: moderateScale(10),
            marginVertical: moderateScale(-15),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: moderateScale(14),
              paddingBottom: moderateScale(10),
            }}
          >
            <Cafe />
            <View
              style={{
                marginHorizontal: moderateScale(5),
              }}
            >
              <Text
                color={tbColors.grey}
                fontSize={14}
                bold
                style={{ marginVertical: moderateScale(4) }}
              >
                #FR-SU-123456
              </Text>
              <Text fontSize={14}>
                Forsan Cafe <Text color={tbColors.grey}> | </Text> Sultans st.
              </Text>
            </View>
          </View>

          <GoogleMaps width={"100%"} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#DEDEEC",
                alignItems: "center",
                borderRadius: 8,
                padding: 5,
                marginVertical: 10,
                paddingVertical: 7,
                width: "48%",
              }}
            >
              <DatePic style={{ marginHorizontal: moderateScale(4) }} />
              <View>
                <Text
                  fontSize={14}
                  style={{ marginHorizontal: moderateScale(4) }}
                >
                  15 September
                </Text>
                <Text
                  fontSize={14}
                  style={{ marginHorizontal: moderateScale(4) }}
                >
                  06:00 PM
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#DEDEEC",
                alignItems: "center",
                borderRadius: 8,
                padding: 5,
                marginVertical: 10,
                paddingVertical: 7,
                width: "48%",
              }}
            >
              <DatePic style={{ marginHorizontal: moderateScale(4) }} />
              <View>
                <Text
                  fontSize={14}
                  style={{ marginHorizontal: moderateScale(4) }}
                >
                  20 JOD
                </Text>
                <Text
                  fontSize={14}
                  style={{ marginHorizontal: moderateScale(4) }}
                >
                  Bill Limit
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Tasks;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 40,
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
});

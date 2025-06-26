/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BusinessInfo from "../../../assets/svg/Home/BusinessInfo.svg";
import NameOfBrand from "../../../assets/svg/Home/NameOfBrand.svg";
import DashV from "../../../assets/svg/Home/dashV.svg";
import SurveyDetails from "../../../assets/svg/Home/SurveyDetails.svg";
import Date from "../../../assets/svg/Home/Date.svg";
import Time from "../../../assets/svg/Home/Time.svg";
import Type from "../../../assets/svg/Home/Type.svg";
import BillAmount from "../../../assets/svg/Home/BillAmount.svg";
import Survey from "../../../assets/svg/Home/survey.svg";
import { moderateScale } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "moti";
import MapImg from "../../../assets/svg/Home/map.svg";
import DetailedReportPic from "../../../assets/svg/Home/DetailedReport.svg";
import DetailedReport from "../../MainScreen/components/DetailedReport";
import { useState } from "react";
import Text from "../../../components/Text";
import SpecialRequestImg from "../../../assets/svg/Home/SpecialRequest.svg";
import { tbColors } from "../../../config/appConfig";
import Button from "../../../components/Button";
import SaveChanges from "../../../assets/svg/Common/SaveChanges.svg";
import DetailedReportWithPer from "../../MainScreen/components/DetailedReportWithPer";
import AttachBill from "../../../assets/svg/Tasks/AttachBill.svg";
interface TaskDetilsProps {
  title?: any;
  numberOfTitle?: any;
  icon?: React.ReactElement;
  navigation: any;
}

const TaskDetils = (props: TaskDetilsProps) => {
  console.log(props);
  //   #F4F4F9 Zaid Alasfar

  const criticalData = [
    {
      id: "1",
      question: "The dining area is clean and pleasant",
      answer: "No",
    },
    {
      id: "2",
      question: "Proper hand washing before food handling",
      answer: "No",
    },
    {
      id: "3",
      question: "Food is stored at the correct temperature",
      answer: "Yes",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [feedbackData, setFeedbackData] = useState([
    {
      id: "1",
      question:
        "The meal includes additional sauces like ketchup and mayonnaise",
      answer: "No",
      comment: "Perfect combination of sauces was served with the meal.",
    },
    {
      id: "2",
      question:
        "The meal includes additional sauces like ketchup and mayonnaise",
      answer: "No",
      comment: "Perfect combination of sauces was served with the meal.",
    },
    {
      id: "3",
      question:
        "The meal includes additional sauces like ketchup and mayonnaise",
      answer: "No",
      comment: "Perfect combination of sauces was served with the meal.",
    },
  ]);

  return (
    <LinearGradient colors={["#FAFAFC", "#FFFFFF"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={{ fontSize: 18 }}>Task Details</Text>
          <View style={{ marginHorizontal: "3%" }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 32, fontWeight: "bold", marginVertical: 20 }}>
          #BS-BR-123456123
        </Text>
        <MapImg style={{ marginBottom: moderateScale(15) }} />

        <View style={{ flexDirection: "row" }}>
          <BusinessInfo />
          <Text
            style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 5 }}
          >
            Business Info
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <NameOfBrand width={24} height={24} />
          <Text style={{ marginHorizontal: 5 }}>Forsan Cafe</Text>
          <DashV style={{ marginHorizontal: 5 }} />
          <Text style={{ marginHorizontal: 5 }}>Sultan st.</Text>
        </View>
        <View
          style={{
            borderColor: "#DEDEEC",
            borderWidth: 1,
            marginVertical: 5,
          }}
        />

        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <SurveyDetails />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 5 }}
            >
              Survey Details
            </Text>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <View style={styles.row}>
              <Survey style={styles.icon} />
              <Text style={styles.label}>Survey</Text>
              <Text style={styles.value}>Full Survey</Text>
            </View>

            <View style={styles.row}>
              <Type style={styles.icon} />
              <Text style={styles.label}>Type</Text>
              <Text style={styles.value}>Onsite Mystery Shopping</Text>
            </View>

            <View style={styles.row}>
              <BillAmount style={styles.icon} />
              <Text style={styles.label}>Bill Amount</Text>
              <Text style={styles.value}>20 JOD</Text>
              {/* <TouchableOpacity>
                <Eye />
              </TouchableOpacity> */}
            </View>

            <View style={styles.row}>
              <Date style={styles.icon} />
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>15 September</Text>
            </View>

            <View style={styles.row}>
              <Time style={styles.icon} />
              <Text style={styles.label}>Time</Text>
              <Text style={styles.value}>06:00 PM</Text>
            </View>
          </View>
          <View
            style={{
              borderColor: "#DEDEEC",
              borderWidth: 1,
              marginVertical: moderateScale(5),
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: moderateScale(25),
            }}
          >
            <SpecialRequestImg />
            <Text
              fontSize={16}
              bold
              style={{
                marginHorizontal: moderateScale(5),
                alignSelf: "flex-end",
              }}
            >
              Special Request
            </Text>
          </View>
          <Text fontSize={12} style={{ marginTop: moderateScale(10) }}>
            I need you to request multiple toppings and see how the employee
            would react to your order.
          </Text>
        </View>

        <View
          style={{
            borderColor: "#DEDEEC",
            borderWidth: 1,
            marginTop: moderateScale(12),
          }}
        />

        <View
          style={{
            marginTop: moderateScale(35),
            marginBottom: moderateScale(5),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <DetailedReportPic />
            <Text fontSize={16} bold>
              Survey Requirements
            </Text>
          </View>
        </View>
        <DetailedReportWithPer
          score={38}
          fullScore={100}
          color="#2EC4B6"
          title="Quality of Service"
          subtitle="Staff attitude, promptness"
          onPress={() => props.navigation.navigate("ListOfQuestions")}
        />

        <DetailedReportWithPer
          score={24}
          fullScore={100}
          color="#2EC4B6"
          title="Quality of Service"
          subtitle="Staff attitude, promptness"
          onPress={() => props.navigation.navigate("ListOfQuestions")}
        />
        <DetailedReportWithPer
          score={75}
          fullScore={100}
          color="#2EC4B6"
          title="Quality of Service"
          subtitle="Staff attitude, promptness"
          onPress={() => console.log("Pressed")}
        />

        <View style={{ marginTop: moderateScale(30) }}>
          <Button
            title="Attach Bill Receipt"
            BKColor={tbColors.white}
            titleColor={tbColors.black}
            borderColorData={tbColors.black}
            icon={<AttachBill />}
          />
        </View>
        <View style={{ marginTop: moderateScale(20) }}>
          <Button
            title="Submit Survey"
            BKColor={tbColors.primary}
            icon={<SaveChanges />}
            onPress={() => {
              props.navigation.navigate("NewTask");
            }}
          />
        </View>

        <View style={{ height: moderateScale(100) }} />
      </ScrollView>
    </LinearGradient>
  );
};

export default TaskDetils;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAFAFC',#FFFFFF
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

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    color: "#333",
  },
  label: {
    width: 100,
    marginLeft: 10,
    color: "#666",
  },
  value: {
    fontWeight: "500",
    flex: 1,
    color: "#111",
  },

  containerCardIssue: {
    // padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#202B36",
  },
  viewAll: {
    fontWeight: "bold",
    color: "#3AC8AA",
  },
});

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Image, ScrollView } from "moti";
import TobNavBar from "../../../components/TobNavBar";
import Text from "../../../components/Text";
import { tbColors } from "../../../config/appConfig";
import FeedbackQuestion from "../components/FeedbackQuestion";

interface ListOfQuestionsProps {
  navigation: any;
}

const ListOfQuestions = (props: ListOfQuestionsProps) => {
  const [selectedFilter, setSelectedFilter] = useState("NOT ANSWERED");
  const filters = ["NOT ANSWERED", "ANSWERED"];

  const questions = [
    {
      question: "Accuracy of the order",
      scored: true,
      scoreValue: "5",
      scoreType: "stars",
      scoreResponse: "Yes",
    },
    {
      question: "Wait time for receiving the meal",
      scored: false,
      scoreResponse: "Open",
      //   comment: "Perfect combination of sauces was served with the meal.",
    },
    {
      question: "Presentation quality",
      scored: true,
      scoreValue: "3",
      scoreType: "stars",
      //   comment: "I waited for 12 minutes.",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: "#fff",
      }}
    >
      <TobNavBar
        BackGroundColor={"#FFF"}
        title={"QUALITY OF PRODUCT"}
        navigation={props.navigation}
        // rightIcon={<Plus />}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: "#fff",
        }}
      >
        <View style={{ height: moderateScale(10) }} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterContainer}>
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterChip,
                  selectedFilter === filter && styles.activeFilterChip,
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  bold
                  style={[
                    styles.filterText,
                    selectedFilter === filter && styles.activeFilterText,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <FeedbackQuestion questions={questions} navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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

  searchInput: {
    flex: 1,
    paddingVertical: moderateScale(14),
  },
});

export default ListOfQuestions;

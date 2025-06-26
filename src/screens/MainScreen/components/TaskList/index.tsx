/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../../../../components/Text";
import TobNavBar from "../../../../components/TobNavBar";
import { moderateScale } from "react-native-size-matters";
import { tbColors } from "../../../../config/appConfig";
import { ScrollView } from "moti";
import ArrowGreen from "../../assets/svg/Financials/ArrowGreen.svg";

import SelectableQuestionList, {
  Question,
} from "../../../../components/SelectableQuestionList";
import Plus from "../../../../assets/svg/Common/Plus.svg";

const initialQuestions: Question[] = [
  {
    id: "1",
    text: "Politeness of the staff",
    tags: [
      { label: "Critical", type: "critical" },
      { label: "Scored", type: "scored" },
      { label: "", type: "stars", value: "5" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "2",
    text: "Staff greeted upon arrival",
    tags: [
      { label: "Not Scored", type: "scored" },
      { label: "Open", type: "open" },
    ],
    checked: true,
    editIcon: true,
  },

  {
    id: "3",
    text: "Politeness of the staff",
    tags: [
      { label: "Critical", type: "critical" },
      { label: "Scored", type: "scored" },
      { label: "", type: "stars", value: "5" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "4",
    text: "Staff greeted upon arrival",
    tags: [
      { label: "Not Scored", type: "scored" },
      { label: "Open", type: "open" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "5",
    text: "Politeness of the staff",
    tags: [
      { label: "Critical", type: "critical" },
      { label: "Scored", type: "scored" },
      { label: "", type: "stars", value: "5" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "6",
    text: "Staff greeted upon arrival",
    tags: [
      { label: "Not Scored", type: "scored" },
      { label: "Open", type: "open" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "7",
    text: "Politeness of the staff",
    tags: [
      { label: "Critical", type: "critical" },
      { label: "Scored", type: "scored" },
      { label: "", type: "stars", value: "5" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "8",
    text: "Staff greeted upon arrival",
    tags: [
      { label: "Not Scored", type: "scored" },
      { label: "Open", type: "open" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "9",
    text: "Politeness of the staff",
    tags: [
      { label: "Critical", type: "critical" },
      { label: "Scored", type: "scored" },
      { label: "", type: "stars", value: "5" },
    ],
    checked: true,
    editIcon: true,
  },
  {
    id: "10",
    text: "Staff greeted upon arrival",
    tags: [
      { label: "Not Scored", type: "scored" },
      { label: "Open", type: "open" },
    ],
    checked: true,
    editIcon: true,
  },
];

interface TaskListProps {
  navigation: any;
}

const TaskList = (props: TaskListProps) => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Quality of Product", "Quality of Service"];

  const handleToggle = (id: string) => {
    setQuestions((qs) =>
      qs.map((q) => (q.id === id ? { ...q, checked: !q.checked } : q))
    );
  };

  const handleSelectAll = () => {
    setQuestions((qs) => qs.map((q) => ({ ...q, checked: true })));
  };

  const handleAddToList = () => {
    // Do something with selected questions
    const selected = questions.filter((q) => q.checked);
    console.log("Selected:", selected);
    props.navigation.navigate("DefaultQuestions");
  };
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
        title={"Quality of Product"}
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

        <SelectableQuestionList
          questions={questions}
          onToggle={handleToggle}
          onSelectAll={handleSelectAll}
          selectedCount={questions.filter((q) => q.checked).length}
          onAddToList={handleAddToList}
        />
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

export default TaskList;

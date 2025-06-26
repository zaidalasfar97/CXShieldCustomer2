import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Text from "../Text";
import { moderateScale } from "react-native-size-matters";
import CriticalIcon from "../../assets/svg/Settings/CriticalIcon.svg";
import Button from "../Button";
type Tag = {
  label: string;
  type: "critical" | "scored" | "stars" | "open" | "yesno" | "custom";
  value?: string;
};

export type Question = {
  id: string;
  text: string;
  tags: Tag[];
  checked: boolean;
  editIcon?: boolean;
};

interface Props {
  questions: Question[];
  onToggle: (id: string) => void;
  onSelectAll: () => void;
  selectedCount: number;
  onAddToList: () => void;
  buttonTitle?: string;
  buttonBKColor?: string;
  icon?: any;
}

const tagColors = {
  critical: "#FFE6E6",
  scored: "#DEDEEC",
  stars: "#DEDEEC",
  open: "#DEDEEC",
  yesno: "#DEDEEC",
  custom: "#DEDEEC",
};

const tagTextColors = {
  critical: "#F25F5C",
  scored: "#202B36",
  stars: "#202B36",
  open: "#202B36",
  yesno: "#202B36",
  custom: "#202B36",
};

const SelectableQuestionList: React.FC<Props> = ({
  questions,
  onToggle,
  onSelectAll,
  selectedCount,
  onAddToList,
  buttonTitle,
  buttonBKColor,
  icon,
}) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ marginVertical: moderateScale(18) }}>
        <Text bold fontSize={16}>
          24 Questions
        </Text>
      </View>
      {/* List */}

      <FlatList
        data={questions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item, index }) => (
          <View
            style={[styles.questionRow]}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ flex: 1 }}>
                <Text fontSize={16}>{item.text}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginTop: 6,
                    alignItems: "center",
                  }}
                >
                  {item.tags.map((tag, idx) => (
                    <View
                      key={idx}
                      style={[styles.tag, { backgroundColor: "#DEDEEC" }]}
                    >
                      <Text style={[styles.tagText]}>
                        {tag.type === "stars"
                          ? `${tag.value} Stars`
                          : tag.label}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectAll: {
    color: "#2EC4B6",
    fontWeight: "bold",
    fontSize: 14,
  },
  questionRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#fff",
    // marginVertical: moderateScale(10),
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  tag: {
    borderRadius: moderateScale(70),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),
    marginHorizontal: 4,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  tagText: {
    fontSize: 12,
  },

  addBtn: {
    backgroundColor: "#2EC4B6",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: "center",
    width: "100%",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SelectableQuestionList;

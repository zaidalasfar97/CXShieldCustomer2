import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../../../components/Text";
import { moderateScale } from "react-native-size-matters";

interface Question {
  question: string;
  scored?: boolean;
  scoreValue?: string;
  scoreType?: "stars" | string;
  scoreResponse?: string;
  comment?: string;
}

interface FeedbackQuestionProps {
  navigation: any;
  questions: Question[];
}

const FeedbackQuestion: React.FC<FeedbackQuestionProps> = ({
  questions,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {questions.map((question, index) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AnswerQuestions");
          }}
        >
          <View key={index} style={styles.questionContainer}>
            <View style={styles.questionHeader}>
              <Text fontSize={18}>{question.question}</Text>
            </View>
            {question.scored !== undefined && (
              <View style={styles.scoreContainer}>
                <View style={styles.box}>
                  <Text style={styles.scoredText}>
                    {question.scored ? "Scored" : "Not Scored"}
                  </Text>
                </View>
                {question.scoreValue && (
                  <View style={styles.box}>
                    <Text style={styles.scoreValue}>
                      {question.scoreValue}{" "}
                      {question.scoreType === "stars" ? "Stars" : ""}
                    </Text>
                  </View>
                )}
                {question.scoreResponse && (
                  <View style={styles.box}>
                    <Text style={styles.scoreResponse}>
                      {question.scoreResponse}
                    </Text>
                  </View>
                )}
              </View>
            )}

            {question.comment && (
              <View style={styles.commentContainer}>
                <Text style={styles.commentLabel}>COMMENT:</Text>
                <Text style={styles.commentText}>{question.comment}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  questionContainer: {
    marginBottom: moderateScale(24),
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: moderateScale(16),
  },
  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  scoreContainer: {
    flexDirection: "row",
    flex: 1,
  },
  scoredText: {
    fontSize: 14,
    // color: "#666",
  },
  scoreValue: {
    fontSize: 14,
    // fontWeight: "bold",
  },
  scoreResponse: {
    fontSize: 14,
  },
  commentContainer: {
    marginTop: 8,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 5,
  },
  commentLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
  },
  box: {
    backgroundColor: "#DEDEEC",
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(70),
    marginHorizontal: moderateScale(3),
  },
});

export default FeedbackQuestion;

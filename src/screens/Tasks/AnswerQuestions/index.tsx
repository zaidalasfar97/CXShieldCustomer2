import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { ScrollView } from "moti";
import TobNavBar from "../../../components/TobNavBar";
import Text from "../../../components/Text";
import { tbColors } from "../../../config/appConfig";
import ReplaceImg from "../../../assets/svg/Settings/ReplaceImg.svg";
import StarIcon from "../../../assets/svg/Tasks/StarIcon.svg"; // You'll need a star icon SVG
import Button from "../../../components/Button";

interface QuestionProps {
  id: number;
  text: string;
  type: "stars" | "yesno";
  answer?: number | boolean;
  onAnswer: (id: number, answer: number | boolean) => void;
  totalQuestions: number;
  onNextQuestion: () => void; // Add this prop
  isLastQuestion: boolean; // Add this prop
}

const StarRating = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (rating: number) => void;
}) => {
  return (
    <View style={{ marginVertical: moderateScale(20) }}>
      {[5, 4, 3, 2, 1].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => setRating(star)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: moderateScale(8),
          }}
        >
          {/* Add the circle indicator */}
          <View
            style={[
              styles.answerIndicator,
              rating === star && styles.answerIndicatorSelected,
            ]}
          >
            {rating === star && <View style={styles.filledCircle} />}
          </View>

          <View
            style={{ flexDirection: "row", marginRight: moderateScale(10) }}
          >
            {[...Array(star)].map((_, i) => (
              <StarIcon
                key={i}
                width={moderateScale(20)}
                height={moderateScale(20)}
                fill={tbColors.primary}
              />
            ))}
          </View>
          <Text fontSize={16}>
            {star} {star === 1 ? "Star" : "Stars"}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const YesNoQuestion = ({
  answer,
  setAnswer,
}: {
  answer?: boolean;
  setAnswer: (answer: boolean) => void;
}) => {
  return (
    <View
      style={{
        marginVertical: moderateScale(20),
      }}
    >
      <TouchableOpacity
        onPress={() => setAnswer(true)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: moderateScale(15),
          borderRadius: moderateScale(8),
        }}
      >
        {/* Add the circle indicator */}
        <View
          style={[
            styles.answerIndicator,
            answer === true && styles.answerIndicatorSelected,
          ]}
        >
          {answer === true && <View style={styles.filledCircle} />}
        </View>
        <Text style={{ marginLeft: moderateScale(10) }}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setAnswer(false)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: moderateScale(15),
          borderRadius: moderateScale(8),
        }}
      >
        {/* Add the circle indicator */}
        <View
          style={[
            styles.answerIndicator,
            answer === false && styles.answerIndicatorSelected,
          ]}
        >
          {answer === false && <View style={styles.filledCircle} />}
        </View>
        <Text style={{ marginLeft: moderateScale(10) }}>No</Text>
      </TouchableOpacity>
    </View>
  );
};

const QuestionCard = ({
  id,
  text,
  type,
  answer,
  onAnswer,
  totalQuestions,
  onNextQuestion,
  isLastQuestion,
}: QuestionProps) => {
  return (
    <View
      style={{
        backgroundColor: tbColors.white,
        paddingHorizontal: moderateScale(22),
        paddingVertical: moderateScale(22),
        marginVertical: 20,
        borderRadius: moderateScale(14),
      }}
    >
      <Text color="#798086" fontSize={14}>
        {id}/{totalQuestions}
      </Text>

      <Text style={{ marginVertical: moderateScale(22) }} fontSize={24}>
        {text}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#DEDEEC",
            width: "48%",
            alignItems: "center",
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 8,
          }}
        >
          <ReplaceImg height={20} width={20} />
          <Text
            bold
            fontSize={12}
            style={{ marginHorizontal: moderateScale(6) }}
          >
            ATTACH PHOTO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#DEDEEC",
            width: "48%",
            alignItems: "center",
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 8,
          }}
        >
          <ReplaceImg height={20} width={20} />
          <Text
            bold
            fontSize={12}
            style={{ marginHorizontal: moderateScale(6) }}
          >
            ADD COMMENT
          </Text>
        </TouchableOpacity>
      </View>

      {type === "stars" ? (
        <StarRating
          rating={(answer as number) || 0}
          setRating={(rating) => onAnswer(id, rating)}
        />
      ) : (
        <YesNoQuestion
          answer={answer as boolean}
          setAnswer={(answer) => onAnswer(id, answer)}
        />
      )}

      {/* Updated Button with proper onPress */}
      <View style={{ marginBottom: moderateScale(22) }}>
        <Button
          title={isLastQuestion ? "Submit" : "Next Question →"}
          BKColor={tbColors.primary}
          onPress={onNextQuestion}
        />
      </View>
    </View>
  );
};

interface AnswerQuestionsProps {
  navigation: any;
}

const AnswerQuestions = (props: AnswerQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | boolean>>({});

  // Sample questions data
  const questions = [
    {
      id: 1,
      text: "How polite were the staff when were you giving the order?",
      type: "stars" as const,
    },
    {
      id: 2,
      text: "Did the staff greet you upon arrival to the counter?",
      type: "yesno" as const,
    },
    // Add more questions as needed
  ];

  const handleAnswer = (id: number, answer: number | boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Submit all answers
      console.log("All answers:", answers);
      // Navigate to next screen or show completion message
      props.navigation.goBack(); // or navigate to another screen
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: moderateScale(60),
        backgroundColor: tbColors.primary,
      }}
    >
      <TobNavBar
        BackGroundColor={tbColors.primary}
        title={""}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: moderateScale(20),
          backgroundColor: tbColors.primary,
        }}
      >
        <QuestionCard
          key={questions[currentQuestion].id}
          {...questions[currentQuestion]}
          answer={answers[questions[currentQuestion].id]}
          onAnswer={handleAnswer}
          totalQuestions={questions.length}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestion === questions.length - 1}
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

  answerIndicator: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: "#DEDEEC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(10),
  },
  answerIndicatorSelected: {
    borderColor: tbColors.primary,
  },
  filledCircle: {
    width: moderateScale(12),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
    backgroundColor: tbColors.primary,
  },
});

export default AnswerQuestions;

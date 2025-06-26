import React from "react";
import {
  I18nManager,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Svg, { Circle } from "react-native-svg";
import Text from "../../../../components/Text";
import Arrow from "../../../../assets/svg/Home/rightArrow.svg";

interface DetailedReportProps {
  score: number;
  fullScore?: number;
  color: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  scoreColor?: string;
}

const CIRCLE_RADIUS = 45;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const DetailedReportWithPer = ({
  score,
  fullScore = 100, // default to 100 if not provided
  color,
  scoreColor,
  title,
  subtitle,
  onPress,
}: DetailedReportProps) => {
  const isRTL = I18nManager.isRTL;

  const percentage = Math.min(score / fullScore, 1); // ensure max 100%
  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - percentage);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.circleWrapper}>
        <Svg width={moderateScale(50)} height={moderateScale(50)} viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            stroke="#E6E6E6"
            strokeWidth="10"
            fill="none"
          />
          <Circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            stroke={color}
            strokeWidth="10"
            fill="none"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin="50, 50"
          />
        </Svg>
        <View style={styles.scoreCenter}>
          <Text
            bold
            style={{
              color: scoreColor ? scoreColor : "#000",
              fontSize: 14,
            }}
          >
            {score}
          </Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Arrow />
    </TouchableOpacity>
  );
};

export default DetailedReportWithPer;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(8),
    borderColor: "#F4F4F9",
    padding: moderateScale(12),
    marginVertical: moderateScale(6),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 1,
  },
  circleWrapper: {
    width: moderateScale(50),
    height: moderateScale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  scoreCenter: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: moderateScale(12),
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#202B36",
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  subtitle: {
    fontSize: 14,
    color: "#7D7D7D",
    textAlign: I18nManager.isRTL ? "right" : "left",
    marginTop: moderateScale(5),
  },
});

import React from "react";
import { I18nManager, StyleSheet, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather"; // or any icon lib
import Text from "../../../../components/Text";
import Arrow from "../../../../assets/svg/Home/rightArrow.svg";

interface DetailedReportProps {
  score: number;
  color: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  scoreColor?: string;
}


interface DetailedReportProps {
  score: number;
  color: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  scoreColor?: string;
  fullScore?: number; // Add this
}


const DetailedReport = ({
  score,
  color,
  scoreColor,
  title,
  subtitle,
  onPress,
}: DetailedReportProps) => {
  const isRTL = I18nManager.isRTL;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text
          bold
          style={{
            color: scoreColor ? scoreColor : "#fff",
            fontSize: 16,
          }}
        >
          {score}
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Arrow />
    </TouchableOpacity>
  );
};

export default DetailedReport;

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
  circle: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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

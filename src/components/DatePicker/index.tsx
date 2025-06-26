import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Text from "../Text";
import DatePicker from "react-native-date-picker";
import moment from "moment";
// import WarningIcon from '../../../assets/svg/common/IconWarning.svg';
// import {useSelector} from 'react-redux';
// import {RootState} from '@reduxjs/toolkit';
import DownIcon from "../../assets/svg/Common/IconDown.svg";
import { tbColors } from "../../config/appConfig";
import { moderateScale } from "react-native-size-matters";
interface Props {
  title: string;
  value?: string | null;
  placeholder?: string;
  disabled?: boolean;
  left?: React.ReactElement;
  right?: React.ReactElement;
  onChange: any;
  hasError?: boolean;
  errorMessage?: string;
  setCalendarDate?: string;
  minDate?: string;
  maxDate?: string;
  selectedDate?: string;
}

const DatePickerComponent = (props: Props) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  //   const {AppSettings} = useSelector((state: RootState) => state.appSettings);

  return (
    <>
      <View style={{}}>
        <Text fontSize={moderateScale(16)} style={{ color: "black" }}>
          {props.title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsPickerShow(true);
          }}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor: tbColors.white,
                borderWidth: 1,
                borderColor: props.hasError ? "#EB434E" : "#DEDEEC",
                borderRadius: moderateScale(10),
              },
            ]}
          >
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {props.left ? props.left : null}
              <Text
                style={{ flex: 1, color: props.value ? "black" : "#A6A7B7" }}
              >
                {props.value && props.value !== ""
                  ? props.value
                  : props.placeholder ?? ""}
              </Text>
              {props.right ? props.right : <DownIcon />}
            </View>
          </View>
        </TouchableOpacity>
        {props.hasError ? (
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
            }}
          >
            {/* <WarningIcon /> */}
            <Text style={{ color: "#EB434E", marginHorizontal: 5 }}>
              {props.errorMessage ?? "Wrong Entry"}
            </Text>
          </View>
        ) : null}
      </View>
      {isPickerShow ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            paddingBottom: 40,
            zIndex: 1000,
          }}
        >
          <DatePicker
            modal
            open={isPickerShow}
            textColor={"black"}
            minimumDate={
              props.minDate
                ? moment(props.minDate).toDate()
                : moment("1920-10-01").toDate()
            }
            maximumDate={
              props.maxDate
                ? moment(props.maxDate).toDate()
                : moment("2050-10-01").toDate()
            }
            date={
              props.selectedDate
                ? moment(props.selectedDate, "DD/MM/yyyy").toDate()
                : props.minDate
                ? moment(props.minDate).toDate()
                : new Date()
            }
            mode={"date"}
            onConfirm={(date) => {
              props.onChange(moment(date).format("DD/MM/yyyy"));
              setIsPickerShow(false);
            }}
            onCancel={() => {
              setIsPickerShow(false);
            }}
          />
        </View>
      ) : null}
    </>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    alignSelf: "center",
    marginVertical: moderateScale(10),
    justifyContent: "center",
  },
});

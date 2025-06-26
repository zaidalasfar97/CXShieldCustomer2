/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Platform, StyleSheet, Text, TextStyle} from 'react-native';
import {GetBoldFont, GetNormalFont} from '../../config/appConfig';

interface TextProps {
  children: any;
  style?: TextStyle | [TextStyle];
  bold?: boolean;
  textAlign?: boolean;

  regular?: boolean;
  numberOfLines?: number;
  header?: boolean;
  caption?: boolean;
  marginV20?: boolean;
  marginH20?: boolean;
  center?: boolean;
  small?: boolean;
  medium?: boolean;
  color?: string;
  fontSize?: any;
}

export default function index(props: TextProps) {
  const {
    children,
    style,
    regular,
    bold,
    textAlign,
    numberOfLines,
    header,
    caption,
    medium,
    small,
    marginV20,
    marginH20,
    center,
    color,
    fontSize,
  } = props;
  let textStyle = StyleSheet.flatten([
    bold && styles.txtBold,
    textAlign && styles.textAlign,
    regular && styles.txtRegular,
    !bold && !regular && styles.txtRegular,
    numberOfLines && numberOfLines > 1 && styles.txtLineHeight,
    header && styles.txtHeader,
    caption && styles.txtCaption,
    center && styles.txtCenter,
    marginH20 && styles.txtMarginH20,
    marginV20 && styles.txtMarginV20,
    small && styles.txtSmall,
    medium && styles.txtMedium,
    fontSize ? {fontSize} : undefined,
    color ? {color} : undefined,
  ]);
  return (
    <Text
      style={[
        {textAlign: 'left'},
        textStyle === 0 ? {} : textStyle,
        style ?? {},
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {},
  textAlign: {
    textAlign: 'center',
  },
  txtBold: {
    fontFamily: GetBoldFont(),
  },
  txtRegular: {
    fontFamily: GetNormalFont(),
  },
  txtLineHeight: {
    lineHeight: 25,
  },
  txtHeader: {
    fontSize: Platform.OS === 'android' ? 18 : 22,
  },
  txtCaption: {
    fontSize: Platform.OS === 'android' ? 14 : 16,
  },
  txtMedium: {
    fontSize: Platform.OS === 'android' ? 10 : 12,
  },
  txtSmall: {
    fontSize: Platform.OS === 'android' ? 8 : 10,
  },
  txtCenter: {
    textAlign: 'center',
  },
  txtMarginV20: {
    marginVertical: Platform.OS === 'android' ? 18 : 20,
  },
  txtMarginH20: {
    marginHorizontal: Platform.OS === 'android' ? 18 : 20,
  },
});

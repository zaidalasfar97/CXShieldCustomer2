export default {
  apiUrl: '',
  webUrl: '',
};
export const tbColors = {
  primary: '#2EC4B6',
  grey: '#798086',
  white: '#FFFFFF',
  black: '#202B36',
  greyBorder: '#DEDEEC',
};

import {Platform} from 'react-native';
export const GetBoldFont = () => {
  if (Platform.OS === 'ios') {
    return 'ReadexPro-Bold';
  } else {
    return 'ReadexPro-Bold';
  }
};
export const GetNormalFont = () => {
  if (Platform.OS === 'ios') {
    return 'ReadexPro-Regular';
  } else {
    return 'ReadexPro-Regular';
  }
};
export const toEnglishNumber = (txt: string) => {
  txt = txt.replace('١', '1');
  txt = txt.replace('٢', '2');
  txt = txt.replace('٣', '3');
  txt = txt.replace('٤', '4');
  txt = txt.replace('٥', '5');
  txt = txt.replace('٦', '6');
  txt = txt.replace('٧', '7');
  txt = txt.replace('٨', '8');
  txt = txt.replace('٩', '9');
  txt = txt.replace('٠', '0');
  return txt;
};

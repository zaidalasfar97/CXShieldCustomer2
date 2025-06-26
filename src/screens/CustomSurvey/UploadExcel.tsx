/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Animated from 'react-native-reanimated';
import {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {t} from 'i18next';
import Text from '../../components/Text';
import {ScreenHeight, ScreenWidth} from '../../config/metrics';
import Close from '../../assets/svg/Common/Close.svg';
import {tbColors} from '../../config/appConfig';
import {ScrollView} from 'moti';
import DownloadGreen from '../../assets/svg/CustomSurvey/DownloadGreen.svg';
import Button from '../../components/Button';
import UploadExcelIcon from '../../assets/svg/CustomSurvey/UploadExcel.svg';
interface SuccessPopProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  navigation: any;
}

const UploadExcel = (props: SuccessPopProps) => {
  const [numberOfBranches, setNumberOfBranches] = useState('');

  const disAgree = () => {
    props.toggleModal();
  };

  return (
    <Modal
      isVisible={props.isModalVisible ?? false}
      backdropColor={'#081E42'}
      backdropOpacity={0.4}
      statusBarTranslucent
      onBackdropPress={() => {
        disAgree();
      }}
      style={{
        justifyContent: 'flex-end',
        borderRadius: 0,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}
      deviceHeight={ScreenHeight + 50}
      deviceWidth={ScreenWidth}>
      <Animated.View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: moderateScale(20)}}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.backButton}>
              <Close />
              <Text fontSize={18} color={tbColors.grey}>
                Note
              </Text>
              <TouchableOpacity>
                <View style={{marginHorizontal: moderateScale(15)}} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: moderateScale(20)}}>
            <View style={{width: '80%'}}>
              <Text bold fontSize={24}>
                Instructions to import questions from an Excel sheet...
              </Text>
            </View>
            <Text fontSize={18} style={{marginVertical: moderateScale(24)}}>
              We recommend using the following template to import your custom
              questions to the survey.
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <DownloadGreen />
              <Text
                fontSize={16}
                bold
                style={{marginHorizontal: moderateScale(6)}}>
                Download Template
              </Text>
            </View>
            <View
              style={{
                marginTop: moderateScale(350),
                marginBottom: moderateScale(75),
              }}>
              <Button title="Upload File" icon={<UploadExcelIcon />} />
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default UploadExcel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ScreenHeight * 0.9,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: moderateScale(-20),
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

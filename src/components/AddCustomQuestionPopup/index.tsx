import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../Text'; // Adjust import if your Text component is elsewhere

// Import your SVG icons
import NewQuestionIcon from '../../assets/svg/CustomSurvey/NewQuestionIcon.svg';
import LibraryIcon from '../../assets/svg/CustomSurvey/Library.svg';
import ExcelIcon from '../../assets/svg/CustomSurvey/Excel.svg';
import {moderateScale} from 'react-native-size-matters';
import {tbColors} from '../../config/appConfig';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (option: 'new' | 'library' | 'excel') => void;
}

const AddCustomQuestionPopup: React.FC<Props> = ({
  visible,
  onClose,
  onSelect,
}) => (
  <Modal
    isVisible={visible}
    onBackdropPress={onClose}
    style={{justifyContent: 'center', alignItems: 'center'}}
    backdropOpacity={0.4}>
    <View style={styles.popup}>
      <OptionCard
        icon={<NewQuestionIcon />}
        title="NEW QUESTION"
        desc="Industry standard questionnaire."
        onPress={() => onSelect('new')}
      />
      <OptionCard
        icon={<LibraryIcon />}
        title="ADD FROM QUESTION LIBRARY"
        desc="Add questions from previous survey."
        onPress={() => onSelect('library')}
      />
      <OptionCard
        icon={<ExcelIcon />}
        title="IMPORT FROM EXCEL SHEET"
        desc="Import from a template."
        onPress={() => onSelect('excel')}
      />
    </View>
  </Modal>
);

const OptionCard = ({icon, title, desc, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
    <View style={{alignItems: 'center', marginBottom: 8}}>{icon}</View>
    <Text fontSize={16} bold textAlign style={styles.cardTitle}>
      {title}
    </Text>
    <Text fontSize={12} color={tbColors.grey} style={styles.cardDesc}>
      {desc}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  popup: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(28),
    padding: 20,
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: '#F7F7FA',
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 8,
  },
  cardDesc: {
    marginTop: 4,
  },
});

export default AddCustomQuestionPopup;

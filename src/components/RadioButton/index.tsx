import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import SaveChanges from '../../assets/svg/Common/SaveChanges.svg';
import {tbColors} from '../../config/appConfig';
import Text from '../Text';

interface RadioButtonProps {
  title?: string;
  label1: string;
  label2: string;
  value1: string;
  value2: string;
  onSelect: (value: string) => void;
  defaultValue?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({title, label1, label2, value1, value2, onSelect, defaultValue}) => {
  const [selected, setSelected] = useState<string | null>(defaultValue || null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <View style={{marginVertical: 16}}>
      {title && <Text 
      fontSize={16}
        
        style={styles.title}>{title}</Text>}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, selected === value1 ? styles.selectedButton : styles.unselectedButton]}
          onPress={() => handleSelect(value1)}
          activeOpacity={0.85}
        >
          <Text style={selected === value1 ? styles.selectedText : styles.unselectedText}>{label1}</Text>
          {selected === value1 && <SaveChanges width={20} height={20} style={{marginLeft: 8}} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selected === value2 ? styles.selectedButton : styles.unselectedButton]}
          onPress={() => handleSelect(value2)}
          activeOpacity={0.85}
        >
          <Text style={selected === value2 ? styles.selectedText : styles.unselectedText}>{label2}</Text>
          {selected === value2 && <SaveChanges width={20} height={20} style={{marginLeft: 8}} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {

    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 0,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: tbColors.primary,
  },
  unselectedButton: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: tbColors.greyBorder,
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  unselectedText: {
    color: '#202B36',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default RadioButton;

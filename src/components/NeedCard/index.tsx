import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
import Text from '../Text';
import ArrowGreen from '../../assets/svg/Financials/ArrowGreen.svg';

interface NeedCardProps {
  image?: any; // Now optional
  title: string;
  description: string;
  onPress?: () => void;
}

const NeedCard: React.FC<NeedCardProps> = ({
  image,
  title,
  description,
  onPress,
}) => {
  const isRTL = I18nManager.isRTL;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.row}>
          {image && <Image source={image} style={styles.img} />}
          <View style={{flex: 1, marginHorizontal: image ? 12 : 0}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
          </View>
          <ArrowGreen style={isRTL ? {transform: [{scaleX: -1}]} : {}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEEC',
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 56,
    height: 56,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202B36',
  },
  desc: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
});

export default NeedCard;

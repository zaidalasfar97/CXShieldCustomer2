import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Modal from 'react-native-modal';
import MapView, {Marker, MapPressEvent} from 'react-native-maps';
import Text from '../../components/Text';
import Button from '../Button';
import {tbColors} from '../../config/appConfig';
import {moderateScale} from 'react-native-size-matters';

interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirm: (location: {latitude: number; longitude: number}) => void;
  initialLocation?: {latitude: number; longitude: number};
  title?: string;
}

const GOOGLE_API_KEY = 'AIzaSyC_QzNAR5SS9bm2Aw5ZAyTbswgjV-SCdRQ'; // <-- Replace with your API key

const LocationPickerModal: React.FC<Props> = ({
  visible,
  onClose,
  onConfirm,
  initialLocation = {latitude: 31.963158, longitude: 35.930359}, // Amman, Jordan as default
  title = 'SET LOCATION',
}) => {
  const [marker, setMarker] = useState(initialLocation);

  const handleMapPress = (e: MapPressEvent) => {
    setMarker(e.nativeEvent.coordinate);
  };

  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${marker.latitude},${marker.longitude}&key=${GOOGLE_API_KEY}`,
      );
      const data = await response.json();
      if (data.status === 'OK' && data.results.length > 0) {
        const address = data.results[0];
        let street = '';
        let city = '';
        let country = '';
        address.address_components.forEach((component: any) => {
          if (component.types.includes('route')) street = component.long_name;
          if (component.types.includes('locality')) city = component.long_name;
          if (component.types.includes('country'))
            country = component.long_name;
        });
        console.log('Street:', street);
        console.log('City:', city);
        console.log('Country:', country);
        onConfirm(marker);
      } else {
        Alert.alert('Error', 'Could not fetch address information.');
        onConfirm(marker);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch address.');
      onConfirm(marker);
    }
  };

  return (
    <Modal
      isVisible={visible}
      style={{margin: 0, justifyContent: 'flex-end'}}
      onBackdropPress={onClose}
      backdropOpacity={0.4}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <View style={{width: 24}} />
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            ...marker,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onPress={handleMapPress}>
          <Marker coordinate={marker} />
        </MapView>
        {/* <TouchableOpacity onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm Location ✓</Text>
        </TouchableOpacity> */}
        <View style={styles.confirmBtn}>
          <Button title="Confirm Location" BKColor={tbColors.primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '93%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
  close: {fontSize: 28, color: '#888', fontWeight: 'bold'},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    letterSpacing: 1,
    textAlign: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  confirmBtn: {
    // backgroundColor: 'black',
    borderRadius: 12,
    paddingVertical: 16,
    width: '90%',
    marginVertical: 16,
    marginHorizontal: moderateScale(20),
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LocationPickerModal;

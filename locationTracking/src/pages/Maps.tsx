import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
function Maps() {
  const [userLocation, setUserLocation] = useState<any>([]);
  console.log('userLoca', userLocation);
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        maxZoomLevel={20}
        showsUserLocation={true}
        followsUserLocation={true}
        showsPointsOfInterest={true}
        userLocationCalloutEnabled
        showsCompass={false}
        showsMyLocationButton={true}
        zoomControlEnabled={false}
        style={{width: '100%', height: '100%'}}
        camera={{
          center: {
            latitude: 37.783333,
            longitude: 29.094715,
          },
          pitch: 90,
          heading: 0,
          altitude: 500,
          zoom: 12,
        }}
      />
    </View>
  );
}
export default Maps;

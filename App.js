import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={{position:'absolute',top:0,bottom:0,left:0,right:0}}
    initialRegion={{
      latitude: -8.137393,
      longitude: 115.102671,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
<MapView.Marker
   coordinate={{
      latitude: -8.137393,
      longitude: 115.102671,
   }}
   title="Lokasi"
   description="Sukasada" />
</MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

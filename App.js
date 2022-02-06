import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import LocationUpdate from './src/Methods/LocationUpdate'
// import * as Location from 'expo-location';
import TransportPie from './src/Components/TransportPie'

const App = () => {
  // const [permissionGranted, setPermissionGranted] = useState(false)
  // const [errorMsg, setErrorMsg] = useState(null)

  // const checkPermission = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }
  //   setErrorMsg(null);
  //   setPermissionGranted(true);
  // };
  const d = [{ x: "Cats", y: 35 },{ x: "Dogs", y: 40 },{ x: "Birds", y: 55 }]

  return (
    <TransportPie distribution={d}/>
    // <View style={styles.page}>
    //   {errorMsg !== null && <Text>{errorMsg}</Text>}
    //   {permissionGranted ? <LocationUpdate/> : <Button title='Grant Permission' onPress={checkPermission}/>}
    // </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
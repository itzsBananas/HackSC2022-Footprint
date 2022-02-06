import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LocationUpdate from './src/Methods/LocationUpdate'
import * as Location from 'expo-location';
import Test from './src/Methods/Test'

const App = () => {
  const [permissionGranted, setPermissionGranted] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const checkPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    setErrorMsg(null);
    setPermissionGranted(true);
  };

  return (
    <View style={styles.page}>
      {errorMsg !== null && <Text>{errorMsg}</Text>}
      {permissionGranted ? <LocationUpdate/> : <Button title='Grant Permission' onPress={checkPermission}/>}
    </View>
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
import React, { useState, useEffect } from 'react';
import { Button, Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


export default function App() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    let l = await Location.getCurrentPositionAsync({});
    setLocation(l)
  }
  
  let text = JSON.stringify(location);

  return (
    <View>
      <Text>{text}</Text>
      <Button title='Refresh' onPress={getLocation}></Button>
    </View>

  );
}
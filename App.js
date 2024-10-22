import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import { TextInput } from 'react-native-gesture-handler';
import screen1 from './screens/screen1'
import screen2 from './screens/screen2'
const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer style={styles.container}>
  <Stack.Navigator initialRouteName='index2'>
  <Stack.Screen name='index' component={screen1}  options={({ navigation }) => ({
            headerStyle: {
              width: "0",
              height: 0,
            },
          })} />
  
  <Stack.Screen name='index2'component={screen2}  options={({ navigation }) => ({
            headerStyle: {
              width: "0",
              height: 0,
            },
          })}/>
  </Stack.Navigator>
  
  
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

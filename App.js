import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigator from './navigation/stack'
// import Drawer from './navigation/drawer'
// import { StatusBar } from 'expo-status-bar';

function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar style="light" /> */}
      <Stacknavigator/>
      {/* <Drawer/> */}
    </NavigationContainer>
  );
}

export default App;
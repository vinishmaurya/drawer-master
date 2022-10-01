import * as React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import Screen1 from '../Screen/Dashboard';
import Screen2 from '../Screen/ENotice';
import { StatusBar } from 'expo-status-bar';
const Drawer = createDrawerNavigator();

const DrawerNavigat = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor: '#002788',
        // drawerPosition: 'right',
        // headerLeft: false,
        // headerLeft: () => <>
        // {/* <Image
        // style={{ width: 'auto',}}
        // source={require('../assets/Logo/yojus.png')}
        // resizeMode='contain'
        // />, */}
        // <DrawerToggleButton tintColor='#002788' />
        // <Text>hghg</Text>
        // </>
        headerLeft: () => {
          return (
            <View style={{ marginRight: 0, flexDirection: 'row' }}>
              <Image
                style={{ width: 100, height: 50 }}
                source={require('../assets/Logo/yojus.png')}
                resizeMode='contain'
              />
              <View style={{marginTop:10,marginLeft:-20,marginRight:20}}>
                <DrawerToggleButton tintColor='#002788' />
              </View>
            </View>
          )
        },
      }}>
        <Drawer.Screen name="Yojus" component={Screen1} />
        <Drawer.Screen name="screen2" component={Screen2} />
      </Drawer.Navigator>
    </>
  );
}
export default DrawerNavigat
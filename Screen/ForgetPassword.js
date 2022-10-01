import { View, Text, Button, Pressable, TextInput,Image } from 'react-native'
import React from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
const ForgetPassword = ({ navigation }) => {
  return (
    // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
      <View style={{  justifyContent: 'center' }}>
        <View style={{marginTop:30}}>
            <Image
              style={{ width: 'auto',}}
              source={require('../assets/Logo/yojus.png')}
              resizeMode='contain'
            />
          </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5, color: '#000' }}>Your Email</Text>
          <TextInput placeholder='Enter Your Email' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} autoFocus={true} />
        </View>
        <View style={{ marginHorizontal: 20, justifyContent: 'center', marginTop: 0 }}>
          <View>
            <Pressable style={{ backgroundColor: colors.colors.primary500, padding: 6, marginTop: 50, borderRadius: 4, textAlign: 'center' }} onPress={() => navigation.navigate('Login')} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Get Password</Text></Pressable>
          </View>
        </View>
      </View>
    // </LinearGradient>
  )
}

export default ForgetPassword
import { View, Text, Button, Pressable, TextInput,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
const Password = ({ navigation, route  }) => {
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!Password) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
   
    
   // console.log('http://yojus.com/school/webservices/apiController/validate_password?input={"user_id":"'+route.params.user_id+'","token_id":"ZXNjaG9vbG9ubGluZQ","password":"'+userPassword+'"}');
    
    return fetch('http://yojus.com/school/webservices/apiController/validate_password?input={"user_id":"'+route.params.user_id+'","token_id":"ZXNjaG9vbG9ubGluZQ","password":"'+userPassword+'"}')
    .then((response) => response.json())
    .then((json) => {
      //return json.movies;
      console.log(json);
      
      if(json.status == 'success') {
        AsyncStorage.setItem('user_id',json.id);
        AsyncStorage.setItem('email',json.userEmail);
        AsyncStorage.setItem('token_id',"ZXNjaG9vbG9ubGluZQ");
        console.log('email_id', 'password');
        navigation.replace('Dashboard',{"email":json.userEmail,"token_id":"ZXNjaG9vbG9ubGluZQ"});
      }

    })
    .catch((error) => {
      console.error(error);
    });
  };  

  return (
    // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
      <View style={{  justifyContent: 'center' }}>
        <View style={{ paddingHorizontal: 20 }}>
        <View style={{marginTop:30}}>
            <Image
              style={{ width: 'auto',}}
              source={require('../assets/Logo/yojus.png')}
              resizeMode='contain'
            />
          </View>
          <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 5, color: '#000' }}>Password</Text>
          <TextInput placeholder='Password' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} autoFocus={true} onChangeText={(UserPassword) => setUserPassword(UserPassword)} />
        </View>
        <View style={{ marginHorizontal: 20, justifyContent: 'center', marginTop: 0 }}>
          <View>
            <Pressable style={{ backgroundColor: colors.colors.primary500, padding: 6, marginTop: 50, borderRadius: 4, textAlign: 'center' }} onPress={handleSubmitPress} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Login</Text></Pressable>
            <Pressable style={{marginTop:10}} onPress={() => navigation.navigate('ForgetPassword')}
            ><Text style={{ color: 'blue', fontSize: 16, textAlign: 'right', }}>Forget Password ?</Text></Pressable>
          </View>
        </View>
      </View>
    // </LinearGradient>
  )
}

export default Password
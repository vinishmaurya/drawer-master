import { View, Text, Button, Pressable, TextInput, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import Svg, { Path } from 'react-native-svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginEmail = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  //AsyncStorage.clear();
  let userId = AsyncStorage.getItem('user_id');
  let emailId = AsyncStorage.getItem('email');
  let tokenId = AsyncStorage.getItem('token_id');
  
  AsyncStorage.getItem('user_id').then((value) => {
        if(value !== null) {
          navigation.replace('Dashboard',{"user_id":userId,"email":emailId,"token_id":tokenId})
        } 
      }
  );
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail};
    let formBody = [];
   
    console.log(userEmail);
    console.log('http://yojus.com/school/webservices/apiController/validate?input={"email_id":"'+userEmail+'","token_id":"ZXNjaG9vbG9ubGluZQ"}');
    
    return fetch('http://yojus.com/school/webservices/apiController/validate?input={"email_id":"'+userEmail+'","token_id":"ZXNjaG9vbG9ubGluZQ"}')
    .then((response) => response.json())
    .then((json) => {
      //return json.movies;
      console.log(json);
      
      if(json.status == 'success') {
        navigation.replace('Login',{"user_id":json.user_id,"email":userEmail,"token_id":"ZXNjaG9vbG9ubGluZQ"});
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
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ width: '100%', backgroundColor: '#', height: '100%' }}>
        {/* <Svg height={300}
          width={'100%'}
          viewBox="0 0 1440 320"
        > */}
        {/* <Path
            fill=''
            d='M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,208C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            fillRule="evenodd"
          /> */}
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{marginTop:30}}>
            <Image
              style={{ width: 'auto',}}
              source={require('../assets/Logo/yojus.png')}
              resizeMode='contain'
            />
          </View>
          <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 10, color: '#000' }}>Email</Text>
          <TextInput placeholder='Email' keyboardType={'default'} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} autoFocus={true} onChangeText={(UserEmail) => setUserEmail(UserEmail)}/>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: '#000000', textAlign: 'center', fontSize: 20 }}>Or</Text>
          </View>
          <Text style={{ fontWeight: '400', fontSize: 20, marginTop: -20, color: '#000' }}>Mobile</Text>
          <TextInput placeholder='Mobile' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
        </View>
        <View style={{ marginHorizontal: 20, justifyContent: 'center', marginTop: 0 }}>
          <View>
            <Pressable style={{ backgroundColor: colors.colors.primary500, padding: 6, marginVertical: 50, borderRadius: 4, textAlign: 'center' }} onPress={handleSubmitPress} ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Login</Text></Pressable>
          </View>
        </View>
        {/* </Svg> */}
      </View>
    </View>
    // </LinearGradient>
  )
}

export default LoginEmail
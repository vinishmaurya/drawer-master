import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import axios from "axios";
const Profile = ({ navigation }) => {
  const [Data, setData] = useState('')
  useEffect(() => {
    try {
      axios.get(`http://yojus.com/school/webservices/apiController/validate_password?input={"user_id":"8079","token_id":"ZXNjaG9vbG9ubGluZQ","password":"wincom42"}`)
        .then(Response => {
          debugger;
          // console.log(Response.data);
          setData(Response.data);
        })
    }
    catch {
      console.log('kjhgf')
    }
  }, []);
// console.log(Data.mobile)
  return (
    // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
      // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a',]}
      //   style={{ flex: 0.5, }}
      //   start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }}>
      //   <View style={styles.container}>
      //     <View>
      //       <Image source={require('../assets/user.jpg')} style={styles.Image} />
      //     </View>
      //     <View style={styles.profile}>
      //       <Text style={styles.usertext}>{Data.id}</Text>
      //       {/* <Text style={styles.text}>View Profile</Text> */}
      //     </View>

      //   </View>

      // </LinearGradient>
      <View style={{ marginHorizontal: 20, marginVertical: 20, backgroundColor: '#FFFFFF', padding: 20, borderRadius: 8 }}>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Name :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>{Data.first_name+" "+Data.middle_name+" "+Data.last_name}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Mobile No :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>{Data.mobile}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Aadhar No :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>xxxx xxxx xxxx </Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Registration No :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>{Data.registration_no}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Roll No :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>{Data.roll_no}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Class/Section :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>{Data.class+"/"+Data.section}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ fontWeight: '500', fontSize: 17 }}>Email Id :</Text>
          <Text style={{ marginLeft: 10, marginTop: 3 }}>{Data.email_id}</Text>
          {/* <Button title='qqq' onPress={data}/> */}
        </View>
      </View>
    // </LinearGradient>
  )
}

export default Profile
const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  usertext: {
    color: 'white',
    fontSize: 22
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profile: {
    marginLeft: 10
  },
  // bottom:{
  //     borderBottomWidth:2,
  //     borderColor:'gray',
  // },


})
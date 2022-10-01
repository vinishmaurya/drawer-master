import { View, Text, Button, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import Datepickr from '../Component/datepicker'
import axios from "axios";
const StudentDiary = ({ navigation }) => {
  const [Data, setData] = useState('')
  useEffect(() => {
    // window.alert("asdasd");

    // Nothing in api

    
    // axios.get(`http://yojus.com/school/webservices/apiController/diary?input={"user_id":"8079","token_id":"ZXNjaG9vbG9ubGluZQ","role_type":"student","dates":"2022-09-23"}`)
    //   .then(Response => {
    //     setData(
    //       Response.data
    //     )
    //     console.log(Data.colorCode)
    //     debugger;
    //     // var i = 1
    //   })


  }, []);
  return (
    // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Datepickr /> */}

        <Text>data</Text>
        <Button title='submit' />
      </View>
    // </LinearGradient>
  )
}

export default StudentDiary
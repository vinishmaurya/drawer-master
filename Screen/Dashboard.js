import { View, Text, Button, Pressable, TextInput, Image } from 'react-native'
import React from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons1 from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import ImagedCarouselCard from "react-native-imaged-carousel-card";
import AsyncStorage from '@react-native-async-storage/async-storage'

const Dashboard = ({ navigation,route  }) => {
  AsyncStorage.getItem('user_id').then((value) =>
  console.log(value)
  );
  return (
    // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
    <View style={{ flex: 1, marginVertical: 30, marginHorizontal: 20, }}>
      

      
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, color: '#002788' }}>Education Management system</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>
          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('ApplyLeave')}>
            <View style={{ alignItems: 'center', }}>
              <Image source={require('../assets/50x50/unemployment.png')} />
              {/* <Ionicons name='home-city-outline' size={40} color={'#FFF'} /> */}
              <Text style={{ fontSize: 12 }}>Apply Leave</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('LeaveList')}>
            <View style={{ alignItems: 'center' }}>
              <Image source={require('../assets/50x50/to-do-list.png')} />
              {/* <Ionicons name='clipboard-outline' size={40} color={'#FFF'} /> */}
              <Text style={{ fontSize: 12 }}>Leave List</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('Profile')}>
            <View style={{ alignItems: 'center' }}>
              {/* <Ionicons name='card-account-details-star-outline' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/id-card.png')} />
              <Text style={{ fontSize: 12 }}>Profile</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 30, justifyContent: 'space-between' }}>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('timetable')}>
            <View style={{ alignItems: 'center' }}>
              {/* <Ionicons name='calendar-month-outline' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/calendar.png')} />
              <Text style={{ fontSize: 12 }}>Time Table</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('StudentDiary')}>
            <View style={{ alignItems: 'center' }}>
              {/* <Ionicons name='book-open-page-variant-outline' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/diary.png')} />
              <Text style={{ fontSize: 12 }}>Student Diary</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('ENotice')}>
            <View style={{ alignItems: 'center' }}>
              {/* <Ionicons1 name='computer' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/noticeboard.png')} />
              <Text style={{ fontSize: 12 }}>E-Noticeboard</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 0, justifyContent: 'space-between' }}>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20, }} onPress={() => navigation.navigate('Competition')}>
            <View style={{ alignItems: 'center', }}>
              {/* <Entypo name='graduation-cap' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/competition.png')} />
              <Text style={{ fontSize: 12 }}>Competition Corner</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('digitalContent')}>
            <View style={{ alignItems: 'center', }}>
              {/* <MaterialIcons name='book-online' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/content-strategy.png')} />
              <Text style={{ fontSize: 12 }}>Digital Content</Text>
            </View>
          </Pressable>
        </View>
        <View style={{
          borderWidth: 0, borderRadius: 10, borderColor: '#000', width: '32%', backgroundColor: '#ffffff', shadowColor: '#000',
          elevation: 20,
        }}>

          <Pressable style={{ marginVertical: 20 }} onPress={() => navigation.navigate('FeePay')}>
            <View style={{ alignItems: 'center' }}>
              {/* <FontAwesome name='rupee' size={40} color={'#FFF'} /> */}
              <Image source={require('../assets/50x50/fee.png')} />
              <Text style={{ fontSize: 12 }}>Fees Payment</Text>
            </View>
          </Pressable>
        </View>
      </View>


    </View>
    
    // </LinearGradient>
  )
}

export default Dashboard
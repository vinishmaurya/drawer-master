import { View, Text, Button, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import Timeline from 'react-native-timeline-flatlist'
const Timetable = ({ navigation }) => {
  const data = [
    { time: '09:00', title: 'Event 1', description: 'Hindi' },
    { time: '09:45', title: 'Event 2', description: 'English' },
    { time: '10:30', title: 'Event 3', description: 'Mathematics' },
    { time: '11:15', title: 'Event 4', description: 'General Science' },
    { time: '12:00', title: 'Event 5', description: 'Social Studies' },
    { time: '12:45', title: 'Event 6', lineColor: '#EB4747', description: 'Lunch Time' },
    { time: '01:30', title: 'Event 7', description: 'Work and Computer Education' },
    { time: '02:15', title: 'Event 8', description: 'Art and Cultural Education' },
    { time: '03:30', title: 'Event 9', description: 'Physical and Health Education' },
    { time: '04:15', title: 'Event 10', description: 'Off' },
  ]
  return (
    <ScrollView>
      {/* <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} style={{ flex: 1 }}  > */}
        <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
            <Timeline data={data}/>
           {/* testing */}
        </View>
      {/* </LinearGradient> */}
    </ScrollView>
  )
}

export default Timetable
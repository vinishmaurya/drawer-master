import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView,SafeAreaView, FlatList, Linking } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Component/color'
const StudentDiary = ({ navigation }) => {
  const One = [
    { id: 1, Work: 'One page writing', Subject: 'Hindi', },
    { id: 2, Work: 'Essay on class teacher', Subject: 'English', },
    { id: 3, Work: 'Remember Table 2 to 10', Subject: 'Math', },
    { id: 4, Work: 'Read Story', Subject: 'EVS', },
  ];
  const Tow = [
    { id: 1, Work: 'One page writing', Subject: 'Hindi', },
    { id: 2, Work: 'Essay on Cow', Subject: 'English', },
    { id: 3, Work: 'Remember Table 2 to 10', Subject: 'Math', },
    { id: 4, Work: 'Read Story', Subject: 'EVS', },
  ];
  const Three = [
    { id: 1, Work: 'One page writing', Subject: 'Hindi', },
    { id: 2, Work: 'Essay on My Best friend', Subject: 'English', },
    { id: 3, Work: 'Remember Table 2 to 10', Subject: 'Math', },
    { id: 4, Work: 'Read Story', Subject: 'EVS', },
  ];
  const item = ({ item }) => (
    <View style={{ flexDirection: 'row', borderColor: 'lightgray', paddingHorizontal: 0, backgroundColor: item.id % 2 == 0 ? '#f2f2f2' : 'lightgray' }}>
      {/* <View style={{ width: 40 }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center' }}>{whiteCheckbok}</Text>
      </View> */}
      <View style={{ width: 40, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.id}</Text>
      </View>
      <View style={{ width: 90, borderWidth: 1, }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center', }}>{item.Subject}</Text>
      </View>
      <View style={{ width: 197, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCqT-XzR0zfs0Zeq8JEZEPZQ')}>{item.Work}</Text>
      </View>


    </View >);

  return (
    <>
    <SafeAreaView style={{marginVertical: 20,}}>
      <View style={{ marginHorizontal: 20,borderWidth: 2 }}>
        {/* <SubmitButton Title={'Submit'} /> */}
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 0, marginTop: 20, borderBottomWidth: 2 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Student Diary</Text>
          </View>
          <View style={{ marginBottom: 10, borderWidth: 1, marginTop: 10 }}>
            {/* <View style={{ width: 40, borderWidth: 1 }}> */}
            <Text style={{ fontSize: 13, marginTop: 10, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Date :25-Aug-2022</Text>
            {/* </View> */}

            {/* <ScrollView> */}

            <View>
              <FlatList data={One} renderItem={item} keyExtractor={item => item.id.toString()} />
            </View>
          </View>
          <View style={{ marginBottom: 10, borderWidth: 1, marginTop: 10 ,}}>
            {/* <View style={{ width: 40, borderWidth: 1 }}> */}
            <Text style={{ fontSize: 13, marginTop: 10, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Date :26-Aug-2022</Text>
            {/* </View> */}

            {/* <ScrollView> */}

            <View>
              <FlatList data={Tow} renderItem={item} keyExtractor={item => item.id.toString()} />
            </View>
          </View>
          <View style={{ marginBottom: 10, borderWidth: 1, marginTop: 10 }}>
            {/* <View style={{ width: 40, borderWidth: 1 }}> */}
            <Text style={{ fontSize: 13, marginTop: 10, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Date :27-Aug-2022</Text>
            {/* </View> */}

            {/* <ScrollView> */}

            <View>
              <FlatList data={Three} renderItem={item} keyExtractor={item => item.id.toString()} />
            </View>
          </View>
          {/* </ScrollView> */}
        </View>


      </View>

    </SafeAreaView>
      <View style={{ marginHorizontal: 20,marginBottom:20 }}>
        <Pressable onPress={() => navigation.navigate('Dashboard')} style={{ backgroundColor: colors.colors.blue, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Back</Text></Pressable>
      </View>
    </>
  )
}

export default StudentDiary;
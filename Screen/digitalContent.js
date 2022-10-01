import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView, FlatList,Linking } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Component/color'
const Content = ({navigation}) => {
  const List = [
    { id: 1, Content: 'https://www.youtube.com/channel/UCqT-XzR0zfs0Zeq8JEZEPZQ', DoN: '25-Aug-2022', },
    { id: 2, Content: 'https://www.youtube.com/watch?v=UWiq1tQd8dw', DoN: '13-Sep-2022', },
    { id: 3, Content: 'https://www.youtube.com/watch?v=UWiq1tQd8dw', DoN: '30-Sep-2022', },
    { id: 4, Content: 'https://www.youtube.com/watch?v=UWiq1tQd8dw', DoN: '09-Oct-2022', },
  ];
  const item = ({ item }) => (
    <View style={{ flexDirection: 'row', borderColor: 'lightgray', paddingHorizontal: 0, backgroundColor: item.id % 2 == 0 ? '#f2f2f2' : 'lightgray' }}>
      {/* <View style={{ width: 40 }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center' }}>{whiteCheckbok}</Text>
      </View> */}
      <View style={{ width: 40, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.id}</Text>
      </View>
      <View style={{ width: 90, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.DoN}</Text>
      </View>
      <View style={{ width: 197, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCqT-XzR0zfs0Zeq8JEZEPZQ')}>{item.Content}</Text>
      </View>


    </View >);

  return (
    // <ScrollView>
    <>
      <View style={{ marginHorizontal: 20, marginVertical: 20, borderWidth: 2 }}>
        {/* <SubmitButton Title={'Submit'} /> */}
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 0, marginVertical: 20, borderBottomWidth: 2 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Digital Content</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 40, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Sr</Text>
            </View>
            <View style={{ width: 90, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Date</Text>
            </View>
            <View style={{ width: 197, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Competition</Text>
            </View>
          </View>
          {/* <ScrollView> */}

            <FlatList data={List} renderItem={item} keyExtractor={item => item.id.toString()} />
          {/* </ScrollView> */}
        </View>


      </View>

      <View style={{marginHorizontal:20}}>
      <Pressable onPress={() => navigation.navigate('Dashboard')} style={{ backgroundColor:colors.colors.blue, padding: 6, marginVertical: 5, borderRadius: 4, textAlign: 'center' }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Back</Text></Pressable>
      </View>
    </>

    // </ScrollView>
  )
}

export default Content;
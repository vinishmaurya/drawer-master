import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView, FlatList,Linking } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Component/color'
const Content = ({navigation}) => {
  const List = [
    { id: 1, Status: 'Done', month: 'Aug-2022',Action:Action },
    { id: 2, Status: 'Pay', month: 'Sep-2022',Action:Action },
    { id: 3, Status: 'Done', month: 'Sep-2022',Action:Action },
    { id: 4, Status: 'Pending', month: 'Oct-2022',Action:Action },
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
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.Status}</Text>
      </View>
      <View style={{ width: 90, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.month}</Text>
      </View>
      <View style={{ width: 80, borderWidth: 1 }}>
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} >{item.Action}</Text>
      </View>


    </View >);
const Action=(<Text>ffffff</Text>)
  return (
    // <ScrollView>
    <>
      <View style={{ marginHorizontal: 20, marginVertical: 20, borderWidth: 2 }}>
        {/* <SubmitButton Title={'Submit'} /> */}
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 0, marginVertical: 20, borderBottomWidth: 2 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Student Fee</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 40, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Sr</Text>
            </View>
            <View style={{ width: 90, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Month</Text>
            </View>
            <View style={{ width: 80, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Fee Status</Text>
            </View>
            <View style={{ width: 80, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Action</Text>
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
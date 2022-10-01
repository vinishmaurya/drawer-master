import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Component/color'
const ENotice = ({navigation}) => {
  const List = [
    { id: 1, Notice: 'Please download the details of The Open House for the students of classes VI to XII on 28th and 29th September 2022 from the link given below.', DoN: '01-Aug-2022', },
    { id: 2, Notice: 'Members of the club are hereby informed of a proposed educational visit to a few important historical sites in our city which is likely to be scheduled between the 28th and the 30th of Sep.', DoN: '30-Sep-2022', },
    { id: 3, Notice: 'You are Secretary of J.P. Narain Housing Society, R.W.A.', DoN: '20-Sep-2022', },
    { id: 4, Notice: 'You are Scout Master/Guide Captain of ', DoN: '29-Oct-2022', },
    { id: 5, Notice: 'Our school has decided to send a troop of scouts and guides to', DoN: '28-Nov-2022', },
    { id: 6, Notice: 'Guide Captain of', DoN: '25-Dec-2022', },
    { id: 7, Notice: '', DoN: '28-Jan-2022', },
    { id: 8, Notice: 'You are Scout Master', DoN: '28-Feb-2022', },
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
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.Notice}</Text>
      </View>


    </View >);

  return (
    // <ScrollView>
    <>
      <View style={{ marginHorizontal: 20, marginVertical: 20, borderWidth: 2 }}>
        {/* <SubmitButton Title={'Submit'} /> */}
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 0, marginVertical: 20, borderBottomWidth: 2 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Notice Board</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 40, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Sr</Text>
            </View>
            <View style={{ width: 90, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Date</Text>
            </View>
            <View style={{ width: 197, borderWidth: 1 }}>
              <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>Notice</Text>
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

export default ENotice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 40,
  },
  button: {
    padding: 10,
    borderRadius: 4
  }
});
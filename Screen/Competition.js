import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Component/color'
const Competition = ({navigation}) => {
  const List = [
    { id: 1, Competition: 'In the sixth annual essay competition on Kids World Travel Guide.', DoN: '25-Aug-2022', },
    { id: 2, Competition: 'Congratulations to our fabulous prize-winners!.', DoN: '13-Sep-2022', },
    { id: 3, Competition: 'We enjoyed reading, shortlisting and discussing the many outstanding essays until we agreed on the finalists', DoN: '30-Sep-2022', },
    { id: 4, Competition: 'There were so many impressive essays which show there is a lot of creative writing talent out there and we are sure our readers will enjoy reading their essays too. ', DoN: '09-Oct-2022', },
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
        <Text style={{ fontSize: 11, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>{item.Competition}</Text>
      </View>


    </View >);

  return (
    // <ScrollView>
    <>
      <View style={{ marginHorizontal: 20, marginVertical: 20, borderWidth: 2 }}>
        {/* <SubmitButton Title={'Submit'} /> */}
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 0, marginVertical: 20, borderBottomWidth: 2 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Competition Corner</Text>
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

export default Competition;
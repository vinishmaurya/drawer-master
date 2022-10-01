import { View, Text, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import axios from "axios";
const LeaveList = ({ navigation }) => {
    const [Data, setData] = useState('')
    const [Apidata, setApidata] = useState('' );
  useEffect(() => {
    try {
      axios.get(`http://yojus.com/school/webservices/apiController/leaves?input={"user_id":"8079","token_id":"ZXNjaG9vbG9ubGluZQ","role_type":"student"}`)
        .then(Response => {
          debugger;
          setData(Response.data);
          let my_data = Response.data;
              var testdata = Array();
              for(var i = 0;i<my_data.length;i++)
              {
                testdata.push({ Subject: my_data[i].leave_subject, Days: my_data[i].number_of_days, Status: my_data[i].approve_status, Start: my_data[i].start_date,End:my_data[i].end_date });
              }
            //   data = testdata;
              setApidata(testdata);
        })
    }
    catch {
      console.log('kjhgf')
    }
    
  }, []);
    const data = [
        { Subject: 'Subject', Days: 'Days', Status: 'Status', Start: 'Start',End:'End' },
        { Subject: "Essential", Days: 1, Status: 'Pass',Start: 'DD/MM/YYYY',End:'DD/MM/YYYY' },
        { Subject: "Essential", Days: 2, Status: 'Pass',Start: 'DD/MM/YYYY',End:'DD/MM/YYYY' },
        { Subject: "Essential", Days: 3, Status: 'Pass',Start: 'DD/MM/YYYY',End:'DD/MM/YYYY' },
        { Subject: "Essential", Days: 4, Status: 'Pass',Start: 'DD/MM/YYYY',End:'DD/MM/YYYY' },
    ];
    console.log(Apidata)
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 20, }}>
            <View style={{ width: 80 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.Subject}</Text>
            </View>
            <View style={{ width: 53,marginLeft:10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.Days}</Text>
            </View>
            <View style={{ width: 80 }}>
                <Pressable onPress={alert}><Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.Status}</Text></Pressable>
            </View>
            <View style={{ width: 133 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.Start}</Text>
            </View>
            <View style={{ width: 133 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.End}</Text>
            </View>
        </View >);


    return (
        // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
        //     start={{ x: 0, y: 0 }}
        //     end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center',marginHorizontal:10 }}>
                <ScrollView showsVerticalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row', maxWidth: "auto" }}>
                    <View style={{ borderWidth: 2, backgroundColor: '#FFFFFF' }}>
                        <FlatList data={Apidata} renderItem={item} keyExtractor={item => item.Days.toString()} />
                    </View>
                </ScrollView>
            </View>
        // </LinearGradient>
    )
}

export default LeaveList
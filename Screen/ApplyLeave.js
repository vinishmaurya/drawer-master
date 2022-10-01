import { View, Text, Button, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../Component/color';
import { RadioButton } from 'react-native-paper';
const ApplyLeave = ({ navigation }) => {

    const [Type, setType] = useState('first');
    const [halfday, sethalfday] = useState('second');
    const [Half, setHalf] = useState('first');
    const [Date, setDate] = useState('first');
    function chrckcell(date) {
        setDate(date)
    };
    return (
        // <LinearGradient colors={['#B1B2FF', '#EEF1FF',]}
        //     start={{ x: 0, y: 0 }}
        //     end={{ x: 1, y: 1 }} style={{ flex: 1 }}  >
            <View style={{ marginVertical: 20, marginHorizontal: 20, }}>
                <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 10 }}>Subject</Text>
                <TextInput placeholder='Subject' style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4 }} />
                <TextInput placeholder='Leave reasion' multiline={true} numberOfLines={6} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, padding: 10, borderRadius: 4, textAlignVertical: "top", }} />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', }}>From Date</Text>
                    <View style={{ flexDirection: 'row', marginTop: 18 }}>
                        <TextInput placeholder='DD' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10, width: 50 }} maxLength={2} keyboardType={'number-pad'} />
                        <TextInput placeholder='MM' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10, width: 50, marginHorizontal: 10 }} maxLength={2} keyboardType={'number-pad'} />
                        <TextInput placeholder='YYYY' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10, width: 90 }} maxLength={4} keyboardType={'number-pad'} />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', }}>To Date</Text>
                    <View style={{ flexDirection: 'row', marginTop: 18 }}>
                        <TextInput placeholder='DD' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10, width: 50 }} maxLength={2} keyboardType={'number-pad'} />
                        <TextInput placeholder='MM' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10, width: 50, marginHorizontal: 10 }} maxLength={2} keyboardType={'number-pad'} />
                        <TextInput placeholder='YYYY' style={{ borderRadius: 4, borderWidth: 1, borderColor: 'black', padding: 10, width: 90 }} maxLength={4} keyboardType={'number-pad'} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 2 }}>Half Days</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable onPress={() => setType('first')} style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                            <RadioButton
                                value="first"
                                status={Type === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setType('first')}
                            /><Text style={{ marginTop: 8 }}>No</Text>
                        </Pressable>
                        <Pressable onPress={() => setType('second')} style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                            <RadioButton
                                value="second"
                                onPress={() => setType('second')}
                                status={Type === 'second' ? 'checked' : 'unchecked'}
                            />
                            <Text style={{ marginTop: 8 }}>Yes</Text>
                        </Pressable>
                    </View>

                </View>{Type == halfday ? <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: '400', fontSize: 20, marginTop: 2 }}>Select Half Days</Text>
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <Pressable onPress={() => setHalf('first')} style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                            <RadioButton
                                value="first"
                                status={Half === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setHalf('first')}
                            /><Text style={{ marginTop: 8 }}>First Half</Text>
                        </Pressable>
                        <Pressable onPress={() => setHalf('second')} style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                            <RadioButton
                                value="second"
                                onPress={() => setHalf('second')}
                                status={Half === 'second' ? 'checked' : 'unchecked'}
                            />
                            <Text style={{ marginTop: 8 }}>Second Half</Text>
                        </Pressable>
                    </View>

                </View> : ""}

                <View style={{ marginHorizontal: 20, justifyContent: 'center', marginTop: 0 }}>
                    <View>
                        <Pressable style={{ backgroundColor: colors.colors.primary500, padding: 6, marginVertical: 50, borderRadius: 4, textAlign: 'center' }}
                        // onPress={() => navigation.navigate('Login')} 
                        ><Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Apply</Text></Pressable>
                    </View>
                </View>
            </View>
        // </LinearGradient>
    )
}

export default ApplyLeave
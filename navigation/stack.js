import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Password from '../Screen/Password'
import ForgetPassword from '../Screen/ForgetPassword'
import LoginEmail from '../Screen/LoginEmail'
import Dashboard from '../Screen/Dashboard'
import ApplyLeave from '../Screen/ApplyLeave'
import LeaveList from '../Screen/LeaveList'
import Profile from '../Screen/Profile'
import timetable from '../Screen/timetable'
import StudentDiary from '../Screen/StudentDiary'
import ENotice from '../Screen/ENotice'
import Competition from '../Screen/Competition'
import digitalContent from '../Screen/digitalContent'
import FeePay from '../Screen/FeePay'
import Dashbord from '../navigation/drawer'
import { colors } from '../Component/color';
import { View, Pressable, Text, Alert, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
const StackNavigation = ({ navigation }) => {
    function alertfunction() {
        Alert.alert('Yojus', 'Do You want to Logout',
            [
                {
                    text: "Ok",
                    // onPress: () => navigation.navigate('Login'),
                    style: "cancel"
                },])
    }
    return (
        <>
            <StatusBar style="dark" />
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FFF', }, headerTintColor: 'white', }}>
                {/* <Stack.Screen name='LoginEmail' component={LoginEmail} options={{
                    title: 'Yojus',

                    headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    },

                    headerLeft: () => {
                        return (
                            <View style={{ marginRight: 0 }}>
                                <Image
                                    style={{ width: 100, height: 50 }}
                                    source={require('../assets/Logo/yojus.png')}
                                    resizeMode='contain'
                                />
                            </View>
                        )
                    },


                }} />
                <Stack.Screen name='Login' component={Password} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    },headerLeft: () => {
                        return (
                            <View style={{ marginRight: 0 }}>
                                <Image
                                    style={{ width: 100, height: 50 }}
                                    source={require('../assets/Logo/yojus.png')}
                                    resizeMode='contain'
                                />
                            </View>
                        )
                    },
                }} />
                <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    },headerLeft: () => {
                        return (
                            <View style={{ marginRight: 0 }}>
                                <Image
                                    style={{ width: 100, height: 50 }}
                                    source={require('../assets/Logo/yojus.png')}
                                    resizeMode='contain'
                                />
                            </View>
                        )
                    },
                }} /> */}
                <Stack.Screen name='Dashboard' component={Dashboard} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: { fontSize: 25 },
                    headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },
                }} />
                <Stack.Screen name='ApplyLeave' component={ApplyLeave} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='LeaveList' component={LeaveList} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='Profile' component={Profile} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='timetable' component={timetable} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='StudentDiary' component={StudentDiary} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='ENotice' component={ENotice} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='digitalContent' component={digitalContent} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='Competition' component={Competition} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='FeePay' component={FeePay} options={{
                    title: 'Yojus', headerTintColor: colors.colors.blue, headerTitleAlign: 'center', headerLargeTitle: true, headerTitleStyle: {
                        fontSize: 25
                    }, headerRight: () => {
                        return (
                            <View style={{ marginRight: 19 }}>
                                <Pressable onPress={alertfunction}>
                                    <Ionicons name="logout" size={25} color={colors.colors.blue}
                                    />
                                </Pressable>
                            </View>
                        )
                    },

                }} />
                <Stack.Screen name='Dashbord' component={Dashbord} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}

export default StackNavigation;
import React from 'react';
import { NavigationContainer , useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from "react-native";
import { StatusBar } from 'native-base';
import { extendTheme, useColorMode } from 'native-base';
// import MyTheme from '../Theme/index.js';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../screens/AccountScreen';
import GoodsScreen from "../screens/GoodsScreen";
import Good1Screen from '../screens/Good1Screen';

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishScreen from '../screens/WishScreens';
import NoticeScreen from '../screens/NoticeScreen';
import MyTheme from '../Theme/index.js';
import ChangeMode from '../screens/ChangeMode';
import AccountHeaderR from '../components/AccountHeaderR';
import HeaderR from '../components/HeaderR';
import booksData from "../json/books.json";
import HeaderLogo from '../components/HeaderLogo';
import HeaderBack from '../components/HeaderBack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    const { colorMode } = useColorMode();
    return(
        <NavigationContainer theme={MyTheme}>
            <StatusBar
        barStyle={
          colorMode == "light" ? "dark-content" : "light-content"
        }
        backgroundColor={
          colorMode == "light" ? "white" : "black"
        }
      />
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
    const { colors } = useTheme();
    const { colorMode } = useColorMode();
    return(     
        <Tab.Navigator
            initialRouteName='HomeStack'
            screenOptions={{
                headerShow: false,
            }}
        >
            <Tab.Screen
                name = "HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "首頁",
                    tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
                    tabBarActiveTintColor: colorMode == 'light' ? colors.lightTab :  colors.darkTab,
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : colors.lightTab },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-variant-outline" color={color} size={28} />),
                }}
            />
            <Tab.Screen
                name = "WishStack"
                component={WishScreen}
                options={{
                    headerShown: true,
                    title: "願望清單",
                    tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
                    tabBarActiveTintColor: colorMode == 'light' ? colors.lightTab :  colors.darkTab,
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : colors.lightTab },
                    headerStyle: {
                        backgroundColor: "#353552",
                    },
                    headerTitleStyle: {
                        color: "#FFF",
                        fontWeight: '400',
                        fontSize: 14
                      },

                    headerRight: () => ( <HeaderR/>),   
                    tabBarIcon:({ color }) => (
                        <MaterialCommunityIcons name="heart-outline" color={color} size={28} />),
                }}
            />
            <Tab.Screen
                name = "SearchStack"
                component={SearchScreen}
                options={{
                    headerShown: true,
                    title: "搜尋",
                    tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
                    tabBarActiveTintColor: colorMode == 'light' ? colors.lightTab :  colors.darkTab,
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : colors.lightTab },
                    headerStyle: {
                        backgroundColor: "#353552",
                    },
                    headerTitleStyle: {
                        color: "#FFF",
                        fontWeight: '400',
                        fontSize: 14
                      },
                    headerRight: () => ( <HeaderR/>), 
                    tabBarIcon:({ color }) => (
                        <Feather name="search" color={color} size={24} />),
                }}
            />
            <Tab.Screen
                name = "NoticeStack"
                component={NoticeScreen}
                options={{
                    headerShown: true,
                    title: "通知",
                    tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
                    tabBarActiveTintColor: colorMode == 'light' ? colors.lightTab :  colors.darkTab,
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : colors.lightTab },
                    headerStyle: {
                        backgroundColor: "#353552",
                    },
                    headerTitleStyle: {
                        color: "#FFF",
                        fontWeight: '400',
                        fontSize: 14
                      },
                    headerRight: () => ( <HeaderR/>),   
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell-outline" color={color} size={26} />),
                }}
            />
            <Tab.Screen
                name = "我的帳戶"
                component={AccountStack}
                options={{
                    headerShown: false,
                    tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
                    tabBarActiveTintColor: colorMode == 'light' ? colors.lightTab :  colors.darkTab,
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : colors.lightTab },
                    tabBarIcon:({ color }) => (
                        <FontAwesome name="user-o" color={color} size={22} />),
                }}
            />
        </Tab.Navigator>
    );
}
const AccountStack = () => {
    const { colorMode } = useColorMode();
        return(
            <Stack.Navigator>
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={({ route }) => ({
                title: "我的帳戶",
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
                headerTitleStyle: {
                    color: "#fff",
                    fontWeight: '400',
                    fontSize: 14
                }, 
                headerRight: () => ( <AccountHeaderR/>),   
                })}
            />
            <Stack.Screen
                name="ChangeMode"
                component={ChangeMode}
                options={({ route }) => ({
                title: "我的帳戶",
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',

                headerTitleStyle: {
                    color: 'white',
                    fontWeight: '400',
                    fontSize: 14
                }, 
                headerBackTitleStyle: {
                    color: "#fff",
                },
               // headerBackImage: () => <HeaderBack width="25" height="25" />,
                headerLight: () => (<HeaderBack/>),
                headerRight: () => ( <AccountHeaderR/>),    
                })}
            />

            </Stack.Navigator>
        );
};
const HomeStack = () => {
    const { colorMode } = useColorMode();
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = " "
                component = {HomeScreen}
                options = {{
                    headerShadowVisible: false,
                    title: booksData.title,
                    headerLeft: () => ( <HeaderLogo/>),  
                    headerStyle: {
                        //elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        backgroundColor: "#353552",
                    },
                    headerTintColor: colorMode == 'light' ? 'black' : 'white',
                    headerTitleStyle: {
                        color: colorMode == 'light' ? 'black' : 'white',
                        fontWeight: '400',
                        fontSize: 14
                    }, 
                    
                    headerRight: () => (                        
                    <MaterialCommunityIcons
                        name={ 'cart-outline'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
                }}
            />
            <Stack.Screen
                name="Detail"
                component={GoodsScreen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
                headerTitleStyle: {
                    color: colorMode == 'light' ? 'black' : 'white',
                    fontWeight: '400',
                    fontSize: 14
                }, 
                headerRight: () => (                        
                    <MaterialCommunityIcons
                        name={ 'cart-outline'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
                }
                )}
            />

            <Stack.Screen
                name="Good1"
                component={Good1Screen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
                headerStyle: {
                    backgroundColor: colorMode == 'light' ? 'white' : 'black',
                },
                headerTitleStyle: {
                    color: colorMode == 'light' ? 'black' : 'white',
                    fontWeight: '400',
                    fontSize: 14
                }, 
                headerRight: () => (                        
                    <MaterialCommunityIcons
                        name={ 'cart-outline'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default Navigation;
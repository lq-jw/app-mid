import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../screens/AccountScreen';
import GoodsScreen from "../screens/GoodsScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishScreen from '../screens/WishScreens';
import NoticeScreen from '../screens/NoticeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
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
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell-outline" color={color} size={26} />),
                }}
            />
            <Tab.Screen
                name = "AccountStack"
                component={AccountScreen}
                options={{
                    headerShown: true,
                    title: "我的帳戶",
                    tabBarIcon:({ color }) => (
                        <FontAwesome name="user-o" color={color} size={22} />),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Homeeeee"
                component = {HomeScreen}
                options = {{
                    headerShadowVisible: false,
                    title: null,
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        backgroundColor: "#6868AC",
                    },
                    headerLeft: () => (                        
                    <MaterialCommunityIcons
                        name={ 'magnify'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
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
                name = "Account"
                component = {AccountScreen}
                options = {{
                    headerShadowVisible: false,
                    title: null,
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        backgroundColor: "#6868AC",
                    },
                    headerLeft: () => (                        
                    <MaterialCommunityIcons
                        name={ 'magnify'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
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
                name = "Goods"
                component = {GoodsScreen}
                options = {{
                    title: null,
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerTintColor: '#131313',
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset: 0,
                        backgroundColor: "#6868AC",
                },
                headerLeft: () => (                        
                <MaterialCommunityIcons
                    name={ 'magnify'}
                    size={24}
                    color={"#fff"}
                />   
                ),
                headerRight: () => (                        
                <MaterialCommunityIcons
                    name={ 'cart-outline'}
                    size={24}
                    color={"#fff"}
                />   
                ),
            }}
            />
        </Stack.Navigator>
    );
};

export default Navigation;
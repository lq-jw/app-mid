import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";

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
                    title: "Home",
                    tabBarIcon: () => (<Image soure={require("../img/btn_tab_home.png")}/>)
                }}
            />
            <Tab.Screen
                name = "WishStack"
                component={WishScreen}
                options={{
                    headerShown: false,
                    title: "Wish",
                    tabBarIcon: () => (<Image soure={require("../img/btn_tab_heart.png")}/>)
                }}
            />
            <Tab.Screen
                name = "SearchStack"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    title: "Search",
                    tabBarIcon: () => (<Image soure={require("../img/btn_tab_search.png")}/>)
                }}
            />
            <Tab.Screen
                name = "NoticeStack"
                component={NoticeScreen}
                options={{
                    headerShown: false,
                    title: "Notice",
                    tabBarIcon: () => (<Image soure={require("../img/btn_tab_notification.png")}/>)
                }}
            />
            <Tab.Screen
                name = "AccountStack"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    title: "Account",
                    tabBarIcon: () => (<Image soure={require("../img/btn_tab_user.png")}/>)
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
                    },
                    headerLeft: () => (<Image soure={require("../img/btn_tab_user.png")}/>
    
                    ),
                    headerRight: () => (<Image soure={require("../img/btn_header_cart.png")}/>
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
                    },
                    headerLeft: () => (<Image soure={require("../img/btn_tab_user.png")}/>
    
                    ),
                    headerRight: () => (<Image soure={require("../img/btn_header_cart.png")}/>,
                    <Image soure={require("../img/btn_header_setting.png")}/>
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
                },
                headerRight: () => ( <Image soure={require("../img/btn_header_cart.png")}/> ),
            }}
            />
        </Stack.Navigator>
    );
};

export default Navigation;
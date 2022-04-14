import React from 'react';
import { NavigationContainer , useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, useColorMode } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../screens/AccountScreen';
import GoodsScreen from "../screens/GoodsScreen";
import Good1Screen from '../screens/Good1Screen';
import Good2Screen from '../screens/Good2Screen';
import Good3Screen from '../screens/Good3creen';
import Good4Screen from '../screens/Good4Screen';
<<<<<<< HEAD
=======


>>>>>>> 639efa9877113ed7f2d7398f7b014bfd4aa4e3f3
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 639efa9877113ed7f2d7398f7b014bfd4aa4e3f3
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : colors.lightTab },
=======
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : 'black' },


                    

>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
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
<<<<<<< HEAD
                    title: "我的帳戶",
=======
<<<<<<< HEAD
=======
                    title: "我的帳戶",
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
>>>>>>> 639efa9877113ed7f2d7398f7b014bfd4aa4e3f3
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
<<<<<<< HEAD
                title: "我的帳戶",
=======
                title: null,
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
<<<<<<< HEAD
                headerTitleStyle: {
                    color: "#fff",
                    fontWeight: '400',
                    fontSize: 14
                }, 
                headerRight: () => ( <AccountHeaderR/>),   
<<<<<<< HEAD

=======
=======
                // headerStyle: {
                //     backgroundColor: colorMode == 'light' ? 'white' : 'black',
                // },
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
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
>>>>>>> 639efa9877113ed7f2d7398f7b014bfd4aa4e3f3
                })}
            />
            <Stack.Screen
                name="ChangeMode"
                component={ChangeMode}
                options={({ route }) => ({
<<<<<<< HEAD
                title: "我的帳戶",
<<<<<<< HEAD
                //title: null,
=======
=======
                title: null,
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
>>>>>>> 639efa9877113ed7f2d7398f7b014bfd4aa4e3f3
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
<<<<<<< HEAD

                headerTitleStyle: {
                    color: 'white',
                    fontWeight: '400',
                    fontSize: 14
                }, 
                headerBackTitleStyle: {
                    color: "#fff",
                },
                headerRight: () => ( <AccountHeaderR/>),    
                })}
            />

=======
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

>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
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
<<<<<<< HEAD
=======
 
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
                    
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
                    shadowOpacity: 0,
                    shadowOffset:{height: 0, width: 0},
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
<<<<<<< HEAD
=======
                
                
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
                )}
            />

            <Stack.Screen
                name="Good1"
                component={Good1Screen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: "#353552",
                    shadowOpacity: 0,
                    shadowOffset:{height: 0, width: 0},
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
                })}
            />
            <Stack.Screen
                name="Good2"
                component={Good2Screen}
                options={({ route }) => ({
                title: null,
<<<<<<< HEAD
                headerStyle: {
                    backgroundColor: "#353552",
                    shadowOpacity: 0,
                    shadowOffset:{height: 0, width: 0},
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
                })}
            />

            <Stack.Screen
                name="Good3"
                component={Good3Screen}
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
                })}
            />
            <Stack.Screen
                name="Good4"
                component={Good4Screen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
=======
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
                })}
            />
<<<<<<< HEAD
            <Stack.Screen
                name="Good3"
                component={Good3Screen}
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
                })}
            />
            <Stack.Screen
                name="Good4"
                component={Good4Screen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: "#353552",
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
>>>>>>> 639efa9877113ed7f2d7398f7b014bfd4aa4e3f3
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
=======



            
>>>>>>> f1737eaa8c1005a0e79c911b4dc19b18f19ba3a0
        </Stack.Navigator>
    );
};

export default Navigation;
import React from "react";

import { Box, Image,VStack,HStack,Text ,ScrollView,View,NativeBaseProvider,Center,Pressable,FlatList,StatusBar,ColorMode, useColorMode} from "native-base"
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import booksData from "../json/books.json";
import NewList from "../components/NewList";



const HomeScreen = ({ navigation ,books}) => {
    const{colorMode} = useColorMode();
    return(
        <NativeBaseProvider>
            <StatusBar/>
            <ScrollView alwaysBounceVertical="false"
                _light = {{ bg:"#6868AC"}}
                _dark = {{ bg:"#353552"}}
            >
            <VStack >
                <VStack>
                    <Center size={16} >
                        每日推薦
                    </Center>
                    <HStack >
                        <Image source={{
                        uri: "https://raw.githubusercontent.com/NotPerr/app-mid/main/assets/Mockup.png"
                        }} alt="Alternate Text" w="133" />
                        <Center w="171">
                            <Text>羅曼斯-經典中的愛情</Text>
                            <Text>822位讀者推薦</Text>
                            <Text>感情沒有對錯，也不存在值不值得。從來都是你情我願的事，
                                而你被傷得體無完膚也怨不了任何人，是你自己心甘情願給你愛的人一把刀子，被捅得血流如注，你還是會咬着牙忍着痛去靠近他。</Text>
                        </Center>
                    </HStack>
                </VStack>
            

            <Text bg="#C2B6B3"></Text>
            <Text bg="#E4DAD8"></Text>
            <Box bg={colorMode== "light" ? "#fff" : "#121212"}>
                <Center size={16} >
                    <Text color={colorMode== "light" ? "black" : "#fff"}>
                        書籍分類
                    </Text>
                </Center>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                
                    <HStack >
                        <Center ml="41">
                            <Feather name="pen-tool" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>散文</Text>
                        </Center>
                        <Center ml="35">
                            <MaterialCommunityIcons name="lightbulb-variant-outline" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>心靈</Text>
                        </Center>
                        <Center ml="35">
                            <Feather name="smile" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>小說</Text>                   
                        </Center>

                        <Center ml="35">
                            <Feather name="map" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>旅遊</Text>
                        </Center>

                        <Center ml="35">
                            <MaterialCommunityIcons name="star-shooting-outline" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>漫畫</Text>
                        </Center>
                        <Center ml="35">
                            <MaterialCommunityIcons name="school-outline" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>學科</Text>
                        </Center>
                    </HStack>
                </ScrollView>
                

                <Center size={16} >
                    <Text color={colorMode== "light" ? "black" : "#fff"}>
                        新書上市
                    </Text>
                </Center>
                

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Pressable
                        onPress={() => navigation.navigate('Detail', books)}
                    >
                    <Image mr="25" ml="25" source={{
                    uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2030.png?raw=true"
                    }} alt="Alternate Text" w="75" h="116" />
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Good1', books)}
                    >
                        <Image mr="25" source={{
                        uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2031.png?raw=true"
                        }} alt="Alternate Text" w="75" h="116" />
                    </Pressable>
                    
                    <Pressable>
                        <Image mr="25" source={{
                        uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2023.png?raw=true"
                        }} alt="Alternate Text" w="75" h="116" />
                    </Pressable>

                    <Pressable>
                        <Image mr="25" source={{
                        uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2022.png?raw=true"
                        }} alt="Alternate Text" w="75" h="116" />
                    </Pressable>

                    <Pressable>
                        <Image mr="25" source={{
                        uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2027.png?raw=true"
                        }} alt="Alternate Text" w="75" h="116" />
                    </Pressable>

                </ScrollView>
                <Center size={16} >
                    <Text color={colorMode== "light" ? "black" : "#fff"}>
                        猜你喜歡
                    </Text>
                </Center>
                <Box flexDirection="row">
                        <Box>
                            <Image ml="25" mb="50"source={{
                            uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2026.png?raw=true"
                            }} alt="Alternate Text" w="112" h="168" />
                        </Box>
                        <Box 
                            zIndex={2} bg="#fff"w="228" h="92" position="absolute" left="103" top="50"
                            shadow={3}
                            >
                            <Text ml="3" mt="2">Matt Ridley</Text>
                            <Text ml="3">Innovation Works
                                And why It Flourishes in Freedom
                            </Text>
                        </Box>
                </Box>            
            </Box>

        </VStack>
            </ScrollView>
            
        {/* <NewList
                    books={booksData.data}
                    navigation={navigation}
                />  */}
            
        </NativeBaseProvider>
        
    );
};



export default HomeScreen;
import React from "react";

import { Box, Image,VStack,HStack,Text ,ScrollView,View,NativeBaseProvider,Center,Pressable,FlatList,StatusBar,ColorMode, useColorMode} from "native-base"
import { TouchableOpacity } from "react-native";

import booksData from "../json/books.json";
import NewList from "../components/NewList";



const HomeScreen = ({ navigation ,books}) => {
    const{ColorMode} = useColorMode();
    return(
        <NativeBaseProvider>
            <StatusBar/>
            <ScrollView alwaysBounceVertical="false"
                _light = {{ bg:"#6868AC"}}
                _dark = {{ bg:"#353552"}}
                
            >
            <VStack 
         
            
            >
                <VStack
                  
                 >
                    <Center size={16} 
                         
                    >
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
            <Center size={16} >
                書籍分類
            </Center>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack>
                    <Center ml="25">
                        <Image source={{
                        uri: "https://github.com/NotPerr/app-mid/blob/main/assets/path-2.png?raw=true"
                }} alt="Alternate Text" w="19" h="19"/>
                        <Text>散文</Text>
                    </Center>
                    <Center ml="25">
                        <Image source={{
                        uri: "https://github.com/NotPerr/app-mid/blob/main/assets/lamp-charge.png?raw=true"
                }} alt="Alternate Text" w="19" h="19"/>
                        <Text>心靈</Text>
                    </Center>
                    <Box>
                        <Image/>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Image/>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Image/>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Image/>
                        <Text></Text>
                    </Box>

                </HStack>
            </ScrollView>
            

            <Center size={16} >
                新書上市
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
                猜您喜歡
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
                        <Text>Matt Ridley</Text>
                        <Text>Innovation Works
                              And why It Flourishes in Freedom
                        </Text>
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
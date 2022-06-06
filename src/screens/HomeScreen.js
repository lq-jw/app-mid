import React, { useEffect } from "react";

import { Box, Image,VStack,HStack,Text ,ScrollView,NativeBaseProvider,Center,Pressable,StatusBar, useColorMode} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import newBooks from '../json/newBooks.json';
import { useSelector, useDispatch } from "react-redux";
import { getBooksAsync } from "../../redux/contentSlice";
import { selectBookData } from "../../redux/contentSlice";
import NewList from "../components/NewList";

const HomeScreen = ({ navigation}) => {


    const{colorMode} = useColorMode();


    const dispatch = useDispatch();
  //const bookData = useSelector(selectBookData);
  
  useEffect(() => {
    dispatch(getBooksAsync());
  }, [])
  
    

    const newList  = newBooks.map( (item) => {
        return (
            <Pressable
                        onPress={() => navigation.navigate('Detail', item)}
                    >
                    <Image mr="25" ml="25" source={{uri: item.image_url}} alt="Alternate Text" w="75" h="116" />
            </Pressable>
        )
    });


    return(
        <NativeBaseProvider>
            <StatusBar/>
            <ScrollView alwaysBounceVertical="false"
                _light = {{ bg:"#6868AC"}}
                _dark = {{ bg:"#353552"}}

            >
            <VStack >
                <VStack bg="#353552">
                    <Box >
                        <Text fontSize="16" color="#fff" my="16px" ml="20px">
                            每日推薦
                        </Text>
                    </Box>
                    <HStack >
                        <Image source={{ 
                        uri: "https://raw.githubusercontent.com/NotPerr/app-mid/main/assets/Mockup.png"
                        }} alt="Alternate Text" w="133" ml="25px" shadow={1}/>
                        <Box w="171" ml="15px">
                            <Text fontSize="14" color="#fff">羅曼斯-經典中的愛情</Text>
                            <Box flexDirection="row" alignContent="center">
                                <Text fontSize="12" color="#C7C7C7ff" my="10px">822位讀者推薦</Text>
                                <Image
                                    source={require("../img/ic_home_star.png")}
                                    alt ="star" mt="10px" ml="24px" mr="4px"
                                />
                                <Text fontSize="12" color="#fff" my="10px">4.5</Text>
                            </Box>
                            <Text fontSize="10" color="#fff" mb="10px">感情沒有對錯，也不存在值不值得。從來都是你情我願的事，
                                而你被傷得體無完膚也怨不了任何人，是你自己心甘情願給你愛的人一把刀子，被捅得血流如注，你還是會咬着牙忍着痛去靠近他。</Text>
                        </Box>
                    </HStack>
                </VStack>
            

            <Text bg="#C2B6B3" h="9px"></Text>
            <Text bg="#E4DAD8" h="13px"></Text>
            <Text bg="#242438" h="20px"></Text>
            <Box bg={colorMode== "light" ? "#fff" : "#121212"}>
                <Box size={16} flex="1" flexDirection="row" w="100%" pt="20px">
                    <Text color={colorMode== "light" ? "black" : "#fff"} ml="15px" >
                        書籍分類
                    </Text>
                    <Text ml="230" color={colorMode== "light" ? "#353535" : "#ccc4dc"}>
                        更多
                    </Text>
                </Box>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                
                    <HStack >
                        <Center ml="41">
                            <Feather name="pen-tool" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>散文</Text>
                        </Center>
                        <Center ml="35">
                            <MaterialCommunityIcons name="lightbulb-outline" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
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
                            <MaterialCommunityIcons name="star-four-points-outline" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>漫畫</Text>
                        </Center>
                        <Center ml="35" mr="10">
                            <MaterialCommunityIcons name="school-outline" color={colorMode== "light" ? "black" : "#fff"} size={28} />       
                            <Text color={colorMode== "light" ? "black" : "#fff"}>學科</Text>
                        </Center>
                    </HStack>
                </ScrollView>
                

                <Box flex="1" flexDirection="row" w="100%" pt="20px" mt="10px" mb="20px">
                    <Text color={colorMode== "light" ? "black" : "#fff"} ml="15px">
                        新書上市
                    </Text>
                    <Text ml="230" color={colorMode== "light" ? "#353535" : "#ccc4dc"}>
                        更多
                    </Text>
                </Box>
                

                <ScrollView horizontal showsHorizontalScrollIndicator={false} ml="5px">
                    {/* <Pressable
                        onPress={() => navigation.navigate('Detail', books)}
                    >
                    <Image mr="25" ml="25" source={require('../img/image_30.png')} alt="Alternate Text" w="75" h="116" />
                    </Pressable> */}


                    {newList}
                    {/* <NewList
                        navigation={navigation}
                         books={bookData}
                    /> */}



                    
                </ScrollView>
                <Center size={16} ml="2" w="100">
                    <Text color={colorMode== "light" ? "black" : "#fff"}>
                        猜你喜歡 ... 
                    </Text>
                </Center>
                <Box flexDirection="row" ml="5">
                        <Box>
                            <Image ml="5" mb="50"source={{
                            uri: "https://github.com/NotPerr/app-mid/blob/main/assets/image%2026.png?raw=true"
                            }} alt="Alternate Text" w="112" h="168" />
                        </Box>
                        <Box 
                            zIndex={2} w="228" h="92" position="absolute" left="85" top="50"
                            shadow={5} borderRadius="4" bg={colorMode== "light" ? "#fff" : "#343434"} flexDirection="row" 
                            >
                            <Box>
                                <Text ml="3" mt="2" color="#979797">Matt Ridley</Text>
                                <Text ml="3" color={colorMode== "light" ? "#000" : "#FFF"}>
                                    Innovation Works
                                    And why It Flourishes in Freedom
                                </Text>
                            </Box>    
                            <Box justifyContent="center">
                                <MaterialCommunityIcons name="chevron-right" color={colorMode== "light" ? "black" : "#fff"} size={28} /> 
                            </Box>
           
                        </Box>
                </Box>            
            </Box>

        </VStack>
        </ScrollView>
        </NativeBaseProvider>
        
    );
};



export default HomeScreen;
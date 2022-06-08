import React , { useState, useEffect } from "react";
import { Box, Image, Text, ZStack, Pressable, useColorMode, ScrollView, Center} from "native-base"
import {  useTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { VictoryPie } from 'victory-native';

const MyStore = ({ navigation ,changemode}) => {
    const { colors } = useTheme();
    const{colorMode} = useColorMode();
    const mainData = [{ x: "47%" ,y: 47 }, { x: "32%" ,y: 32 }, { x: "15%" ,y: 15 }, { x: "6%" ,y: 6 }];
    const dataColor = ['#A6A6FF', '#B4CCF4', '#E9435E', '#6868AC'];
    const defaultData = [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 100 }]; 
    const [graphicData, setGraphicData] = useState(defaultData);
    useEffect(() => {
        setGraphicData(mainData); 
      }, []);
      
    return(
        <ScrollView alwaysBounceVertical="false" _dark={{bg: "#353552"}}  _light={{bg:"#EAE1DF"}}>              
        <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg: "#353552"}} >
            <Box mt="0" _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center" flexDirection="column">
                <Box  w="322" justifyContent="space-between" flexDirection="row" mt="3">
                    <Text fontSize="16" fontWeight="500">分析報表</Text>
                    <Text fontSize="16" fontWeight="500">2022年 5月</Text>
                </Box>
                <Center h="230px" w="320" mt="2" mb="3">
                    <VictoryPie 
                      animate={{ easing: 'exp' }}
                      data={graphicData} 
                      width={250} 
                      height={250} 
                      colorScale={dataColor}   
                      innerRadius={50} 
                      style={{
                        labels: {
                          fill: ({route}) =>
                          colorMode=="dark" ? "#fff" : "#000"
                        }
                      }}
                    />
                </Center>
                <Box>
                    <Box flexDirection="row" w="296" alignItems="center" >
                        <Box h="20px" w="20px" backgroundColor="#A6A6FF" borderRadius="5px" mr="5"></Box>
                        <Text fontSize="16" fontWeight="500">漫畫</Text>
                        <Text fontSize="16" fontWeight="500" ml="20">30</Text>
                        <Text fontSize="16" fontWeight="500" ml="10">$3000</Text>
                    </Box>
                    <Box flexDirection="row" w="296" alignItems="center">
                        <Box h="20px" w="20px" backgroundColor="#B4CCF4" borderRadius="5px" mr="5"></Box>
                        <Text fontSize="16" fontWeight="500">小說</Text>
                        <Text fontSize="16" fontWeight="500" ml="20">14</Text>
                        <Text fontSize="16" fontWeight="500" ml="43px">$2042</Text>
                    </Box>
                    <Box flexDirection="row" w="296" alignItems="center">
                        <Box h="20px" w="20px" backgroundColor="#E9435E" borderRadius="5px" mr="5"></Box>
                        <Text fontSize="16" fontWeight="500">心靈</Text>
                        <Text fontSize="16" fontWeight="500" ml="20">5</Text>
                        <Text fontSize="16" fontWeight="500" ml="52">$958</Text>
                    </Box>
                    <Box flexDirection="row" w="296" alignItems="center">
                        <Box h="20px" w="20px" backgroundColor="#6868AC" borderRadius="5px" mr="5"></Box>
                        <Text fontSize="16" fontWeight="500">其他</Text>
                        <Text fontSize="16" fontWeight="500" ml="20">2</Text>
                        <Text fontSize="16" fontWeight="500" ml="52">$383</Text>
                    </Box>
                    <Box flexDirection="row" w="296" alignItems="center" mb="5">
                        <Box h="20px" w="20px" backgroundColor="#FFDF6B" borderRadius="5px" mr="5"></Box>
                        <Text fontSize="16" fontWeight="500" _light={{color:"#E9435E"}} _dark={{color: "#D2C1F3"}}>收益</Text>
                        <Text fontSize="16" fontWeight="500" _light={{color:"#E9435E"}} _dark={{color: "#D2C1F3"}} ml="144">$6383</Text>
                    </Box>

                </Box>
            </Box>

            <Box mt="3" _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center" flexDirection="column" h="146">
                <Box  _light={{bg:"#fff"}} _dark={{bg: "#121212"}} w="322" alignContent="flex-start" > 
                    <Text fontSize="16" fontWeight="500" marginTop="18"  >我的銷售</Text>
                </Box>
                <Box flexDirection="row" alignContent="stretch">
                    <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center" flexDirection="column" >
                        <Box mr="8"  ml="10"  mt="5">
                            <MaterialCommunityIcons
                                name={ 'clock-time-seven-outline'}
                                size={24}
                                color={colorMode== "light" ? "black" : "white"}
                                alt="msm"
                            />   
                        </Box>
                        <Text fontSize="12" fontWeight="500" ml="3" mt="2">待出貨</Text>
                    </Box>
                    <Box  _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="column" ml="-2">
                        <Box mr="8"  ml="10"  mt="5">
                            <MaterialCommunityIcons
                                name={ 'close-box-multiple-outline'}
                                size={24}
                                color={colorMode== "light" ? "black" : "white"}
                                alt="msm"
                            />   
                        </Box>
                        <Text fontSize="12" fontWeight="500" ml="2" mt="2">已取消</Text>
                    </Box>
                    <Box  _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="column" ml="-2">
                        <Box mr="8"  ml="10"  mt="5">
                            <MaterialCommunityIcons
                                name={ 'swap-vertical-circle-outline'}
                                size={24}
                                color={colorMode== "light" ? "black" : "white"}
                                alt="msm"
                            />   
                        </Box>
                        <Text fontSize="12" fontWeight="500" ml="2" mt="2">退貨/換貨</Text>
                    </Box>
                    <Box  _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="column" ml="-2">
                        <Box mr="8"  ml="10"  mt="5">
                            <MaterialCommunityIcons
                                name={ 'dots-horizontal'}
                                size={24}
                                color={colorMode== "light" ? "black" : "white"}
                                alt="msm"
                            />   
                        </Box>
                        <Text fontSize="12" fontWeight="500" ml="2" mt="2">其他</Text>
                    </Box>
                </Box>    
            </Box>
            <Box mt="3" >
                <Box  _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" alignContent="center">
                    <Box mr="8"  ml="10"  mt="5">
                        <Octicons 
                            name={ 'package'}
                            size={24}
                            color={colorMode== "light" ? "black" : "white"}
                            alt="msm"
                        />   
                    </Box>
                    <Text fontSize="16" fontWeight="500" marginTop="4">我的商品</Text>
                </Box>
                <Box  _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="70" alignContent="center" >
                    <Box mr="8"  ml="10"  mt="5">
                        <MaterialCommunityIcons
                            name={ 'plus-circle-outline'}
                            size={24} 
                            color={colorMode== "light" ? "black" : "white"}
                            alt="alt"
                        />   
                    </Box>
                    <Text fontSize="16" fontWeight="500" marginTop="4">新增商品</Text>
                </Box>
            </Box>    
        </Box>
        </ScrollView>
    );
};

export default MyStore;
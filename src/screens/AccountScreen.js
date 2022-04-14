import React from "react";
import { Box, Image, Text, ZStack, Pressable, useColorMode, ScrollView} from "native-base"
import {  useTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AccountScreen = ({ navigation ,changemode}) => {
    const { colors } = useTheme();
    const{colorMode} = useColorMode();
    return(
        <ScrollView alwaysBounceVertical="false" _dark={{bg: "#353552"}}  _light={{bg:"#EAE1DF"}}>              
        <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg: "#353552"}} >
            <Box h="245" _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center">
                <ZStack>
                    <Image 
                        source={require('../img/bk_account.png')} 
                        flex={1} h="150" alt="bg"  w="360" ml="-120"
                    />
                    <Box mt="95" alignItems="center" ml="-10">
                        <Image mt="-2" resizeMode= 'cover' 
                        source={require('../img/img_account_user.png')}
                        alt="user"
                        />
                        <Text fontSize="16" mt="1" >ephan227</Text>
                        <Text fontSize="14" mb="2" mt="1.5" borderRadius="15" px="2" py="1"
                        borderWidth="1"  borderColor="#E9435E">
                            銅牌會員</Text>
                    </Box>                 
                </ZStack>
            </Box>

            <Box mt="3">
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="8" ml="10" >
                    <MaterialCommunityIcons
                        name={ 'store-outline'}
                        size={24}
                        color={colorMode== "light" ? "#E9435E" : colors.darkTab}
                        alt="alt"
                    />   
                </Box>
                    <Text fontSize="16" fontWeight="500" _light={{color: "#E9435E"}} _dark={{color:  colors.darkTab}}>我的賣場</Text>
                </Box>            
            </Box>

            <Box mt="3">
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="8"  ml="10">
                    <FontAwesome 
                        name="user-o"
                        size={24}
                        color={colorMode== "light" ? colors.lightAccount : "white"}
                        alt="alt"
                    />   
                    </Box>
                    <Text fontSize="16" fontWeight="500" ml="0.5">會員專區</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" > 
                    <Box mr="8"  ml="10">
                        <MaterialCommunityIcons
                        name={ 'clipboard-text-multiple-outline'}
                        size={24}
                        color={colorMode== "light" ? "black" : "white"}
                        alt="alt"
                        />                      
                    </Box>
                    <Text fontSize="16" fontWeight="500">購買訂單</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="8"  ml="10">
                    <MaterialCommunityIcons
                        name={ 'email-outline'}
                        size={24}
                        color={colorMode== "light" ? "black" : "white"}
                        alt="alt"
                    />   
                    </Box>
                    <Text fontSize="16" fontWeight="500">我的信箱</Text>
                </Box>
            </Box>

            <Box mt="3">
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="8"  ml="10"  mt="5"  >
                    <MaterialCommunityIcons
                        name={ 'wallet-outline'}
                        size={24}
                        color={colorMode== "light" ? "black" : "white"}
                        alt="alt"
                    />   </Box>
                    <Text fontSize="16" fontWeight="500">我的錢包</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="8"  ml="10"  mt="5">
                    <MaterialCommunityIcons
                        name={ 'gift-outline'}
                        size={24}
                        color={colorMode== "light" ? "black" : "white"}
                        alt="msm"
                    />   </Box>
                    <Text fontSize="16" fontWeight="500">我的獎勵</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="8"  ml="10"  mt="5">
                    <MaterialCommunityIcons
                        name={ 'ticket-confirmation-outline'}
                        size={24}
                        color={colorMode== "light" ? "black" : "white"}
                        alt="alt"
                    />   </Box>
                    <Text fontSize="16" fontWeight="500">優惠券</Text>
                </Box>
            </Box>
            <Pressable
                onPress={() => navigation.navigate('ChangeMode', changemode)}>
                <Box mt="3">
                    <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                    <Box mr="8"  ml="10" mt="5">
                        <MaterialCommunityIcons
                            name={ 'hexagon-slice-2'}
                            size={24}
                            color={colorMode== "light" ? "#000" : "white"}
                            alt="alt"
                        />  </Box> 
                        <Text fontSize="16" fontWeight="500">主題</Text>
                    </Box>            
                </Box>        
            </Pressable>
        </Box>
        </ScrollView>
    );
};

export default AccountScreen;
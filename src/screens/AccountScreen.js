import React from "react";
//import { View , Text , StyleSheet, ImageBackground, Image} from "react-native";
import { Box, Image, Text, ZStack, Pressable, ColorMode, useColorMode} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 //import { ImageBackground ,} from "react-native";

const AccountScreen = ({ navigation ,changemode}) => {
    const{ColorMode} = useColorMode();
    return(
        <Box flex={1} _light={{bg:"#EAE1DF"}} _dark={{bg: "#353552"}}>
            <Box h="245" _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center">
                <ZStack>
                    <Image 
                        source={require('../img/bk_account.png')} 
                        flex={1} h="150" alt="bg"  w="360" ml="-120"
                    />
                    <Box mt="95" alignItems="center" ml="-10">
                        <Image mt="0" resizeMode= 'cover' 
                        source={require('../img/img_account_user.png')}
                        alt="user"
                        />
                        <Text fontSize="16" mt="2" >ephan227</Text>
                        <Text fontSize="14" mb="2">銅牌會員</Text>
                    </Box>                 
                </ZStack>
            </Box>

            <Box mt="3">
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="16" ml="20" >
                    <MaterialCommunityIcons
                        name={ 'store-outline'}
                        size={24}
                        color={"#fff"}
                        alt="alt"
                    />   
                    
                    </Box>
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_shop.png')}
                        alt="shop"
                    /> */}
                    <Text fontSize="16" fontWeight="500">我的賣場</Text>
                </Box>            
            </Box>

            <Box mt="3">
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="16"  ml="20">
                    <MaterialCommunityIcons
                        name={ 'clipboard-text-multiple-outline'}
                        size={24}
                        color={ColorMode== "light" ? "lightAccount" : "white"}
                        alt="alt"
                    />   
                    </Box>
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_member.png')}
                        alt="member"
                    /> */}
                    <Text fontSize="16" fontWeight="500">會員專區</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" > 
                    <Box mr="16"  ml="20">
                        <MaterialCommunityIcons
                        name={ 'clipboard-text-multiple-outline'}
                        size={24}
                        color={ColorMode== "light" ? "black" : "white"}
                        alt="alt"
                        />                      
                    </Box>
 
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_record.png')}
                        alt="record"
                    /> */}
                    <Text fontSize="16" fontWeight="500">購買訂單</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="16"  ml="20">
                    <MaterialCommunityIcons
                        name={ 'email-outline'}
                        size={24}
                        color={ColorMode== "light" ? "black" : "white"}
                        alt="alt"
                    />   
                    </Box>
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_sms.png')}
                        alt="sms"
                    /> */}
                    <Text fontSize="16" fontWeight="500">我的信箱</Text>
                </Box>
            </Box>

            <Box mt="3">
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="16"  ml="20"  mt="5"  >
                    <MaterialCommunityIcons
                        name={ 'wallet-outline'}
                        size={24}
                        color={ColorMode== "light" ? "black" : "white"}
                        alt="alt"
                    />   </Box>
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_wallet.png')}
                        alt="wallet"
                        /> */}
                    <Text fontSize="16" fontWeight="500">我的錢包</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="16"  ml="20"  mt="5">
                    <MaterialCommunityIcons
                        name={ 'gift-outline'}
                        size={24}
                        color={ColorMode== "light" ? "black" : "white"}
                        alt="msm"
                    />   </Box>
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_gift.png')}
                        alt="gift"
                    /> */}
                    <Text fontSize="16" fontWeight="500">我的獎勵</Text>
                </Box>
                <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                <Box mr="16"  ml="20"  mt="5">
                    <MaterialCommunityIcons
                        name={ 'ticket-confirmation-outline'}
                        size={24}
                        color={ColorMode== "light" ? "black" : "white"}
                        alt="alt"
                    />   </Box>
                    {/* <Image
                        mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_coupon.png')}
                        alt="coupon"
                    /> */}
                    <Text fontSize="16" fontWeight="500">優惠券</Text>
                </Box>
            </Box>
            <Pressable
                onPress={() => navigation.navigate('ChangeMode', changemode)}
            >
                <Box mt="3">
                    <Box _light={{bg:"#fff"}} _dark={{bg: "#121212"}} alignItems="center"  flexDirection="row" h="44" >
                    <Box mr="16"  ml="20" mt="5">
                        <MaterialCommunityIcons
                            name={ 'hexagon-slice-2'}
                            size={24}
                            color={ColorMode== "light" ? "#000" : "white"}
                            alt="alt"
                        />  </Box> 
                        {/* <Image
                            mr="16" mt="10" mb="10" ml="20"
                            source={require('../img/ic_account_theme.png')}
                            alt="theme"
                        /> */}
                        <Text fontSize="16" fontWeight="500">主題</Text>
                    </Box>            
                </Box>        
            </Pressable>


        </Box>
    );
};

//const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         backgroundColor: '#EAE1DF',
//         //alignItems: "center",
//         //justifyContent: "center",
//     },
//     info: { 
//         height: 245,
//         backgroundColor: '#fff',
//         textAlign: "center",
//     },
    // bg: {
    //     flex: 1,
    //     height: 150,
    //     justifyContent: "center",
    //     alignItems: "center",   
    // },

//     accountlist: {
//         flexDirection:"row",
//         alignItems: "center",
//         backgroundColor: '#fff',
//     },    
//     accountsection: {
//         marginTop: 10,
//         //marginBottom: 10,
//     },
//     iconImg: {
//         height: 24,
//         width: 24,
//         marginRight: 16,
//         marginLeft: 20,
//         marginTop: 10,
//         marginBottom: 10.
//     },
//     username:{
//         fontSize: 16,
//         //marginTop: 20,
//     },
//     membership:{
//         fontSize: 14,
//         // borderColor: '#E9435E',
//         // borderWidth: 5
//         textShadowColor:'#585858',
//         textShadowOffset:{width: 5, height: 5},
//         //marginTop: 20
//     },
//     txt: {
//         fontSize: 16,
//         fontWeight: "500",
//         //marginBottom: 50
//     },

//});

export default AccountScreen;
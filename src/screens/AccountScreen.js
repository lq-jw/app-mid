import React from "react";
//import { View , Text , StyleSheet, ImageBackground, Image} from "react-native";
import { Box, Image, Text, } from "native-base"
 import { ImageBackground ,} from "react-native";

const AccountScreen = () => {
    return(
        <Box flex={1}  bg='#EAE1DF'>
            <Box h="245" bg="#fff" alignItems="center">
                <Image source={require('../img/bk_account.png')} 
                flex={1} h="150" alignItems="center" justifyContent="center"
                // style={styles.bg}
                >
                    <Box 
                    source={require('../img/img_account_user.png')}/>
                    <Text fontSize="16">名稱</Text>
                    <Text fontSize="14" >O _ O會員</Text>
                </Image>
            </Box>

            <Box mt="10">
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_shop.png')}
                        alt="shop"
                    />
                    <Text fontSize="16" fontWeight="500">我的賣場</Text>
                </Box>            
            </Box>

            <Box mt="10">
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_member.png')}
                        alt="member"
                    />
                    <Text fontSize="16" fontWeight="500">會員專區</Text>
                </Box>
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_record.png')}
                        alt="record"
                    />
                    <Text fontSize="16" fontWeight="500">購買訂單</Text>
                </Box>
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_sms.png')}
                        alt="sms"
                    />
                    <Text fontSize="16" fontWeight="500">我的信箱</Text>
                </Box>
            </Box>

            <Box mt="10">
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                            h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                            source={require('../img/ic_account_wallet.png')}
                            alt="wallet"
                        />
                    <Text fontSize="16" fontWeight="500">我的錢包</Text>
                </Box>
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_gift.png')}
                        alt="gift"
                    />
                    <Text fontSize="16" fontWeight="500">我的獎勵</Text>
                </Box>
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                    <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_coupon.png')}
                        alt="coupon"
                    />
                    <Text fontSize="16" fontWeight="500">優惠券</Text>
                </Box>
            </Box>
            <Box mt="10">
                <Box bg="#fff" alignItems="center"  flexDirection="row">
                <Image
                        h="24" w="24" mr="16" mt="10" mb="10" ml="20"
                        source={require('../img/ic_account_theme.png')}
                        alt="theme"
                    />
                <Text fontSize="16" fontWeight="500">主題</Text>
                </Box>            
            </Box>

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
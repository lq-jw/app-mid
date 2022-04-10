import React from "react";
import { View , Text , StyleSheet, ImageBackground, Image} from "react-native";
// import { ImageBackground } from "react-native";

const AccountScreen = () => {
    return(
        <View style = {styles.contain}>
            <View style={styles.info}>
                <ImageBackground source={require('../img/bk_account.png')} style={styles.bg}>
                    <Image source={require('../img/img_account_user.png')}/>
                    <Text styles={styles.username}>名稱</Text>
                    <Text styles={styles.membership}>O _ O會員</Text>
                </ImageBackground>
            </View>
            <View style={styles.accountsection}>
                <View style={styles.accountlist}>
                    <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_shop.png')}
                    />
                    <Text styles={styles.txt}>我的賣場</Text>
                </View>            
            </View>


            <View style={styles.accountsection}>
                <View style={styles.accountlist}>
                    <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_member.png')}
                    />
                    <Text styles={styles.txt}>會員專區</Text>
                </View>
                <View style={styles.accountlist}>
                    <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_record.png')}
                    />
                    <Text styles={styles.txt}>購買訂單</Text>
                </View>
                <View style={styles.accountlist}>
                    <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_sms.png')}
                    />
                    <Text styles={styles.txt}>我的信箱</Text>
                </View>
            </View>

            <View style={styles.accountsection}>
                <View style={styles.accountlist}>
                    <Image
                            style={styles.iconImg}
                            source={require('../img/ic_account_wallet.png')}
                        />
                    <Text styles={styles.txt}>我的錢包</Text>
                </View>
                <View style={styles.accountlist}>
                    <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_gift.png')}
                    />
                    <Text styles={styles.txt}>我的獎勵</Text>
                </View>
                <View style={styles.accountlist}>
                    <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_coupon.png')}
                    />
                    <Text styles={styles.txt}>優惠券</Text>
                </View>
            </View>
            <View style={styles.accountsection}>
                <View style={styles.accountlist}>
                <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_theme.png')}
                    />
                <Text styles={styles.txt}>主題</Text>
                </View>            
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#EAE1DF',
        //alignItems: "center",
        //justifyContent: "center",
    },
    info: { 
        height: 245,
        backgroundColor: '#fff',
        textAlign: "center",
    },
    bg: {
        flex: 1,
        height: 150,
        justifyContent: "center",
        alignItems: "center",   
    },

    accountlist: {
        flexDirection:"row",
        alignItems: "center",
        backgroundColor: '#fff',
    },    
    accountsection: {
        marginTop: 10,
        //marginBottom: 10,
    },
    iconImg: {
        height: 24,
        width: 24,
        marginRight: 12,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10.
    },
    username:{
        fontSize: 16,
    },
    membership:{
        fontSize: 14,
        // borderColor: '#E9435E',
        // borderWidth: 5
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        //marginTop: 20
    },
    txt: {
        fontSize: 16,
        fontWeight: "500",
        //marginBottom: 50
    },

});

export default AccountScreen;
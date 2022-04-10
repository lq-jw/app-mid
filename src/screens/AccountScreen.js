import React from "react";
import { View , Text , StyleSheet} from "react-native";

const AccountScreen = () => {
    return(
        <View style = {styleS.contain}>
            <View></View>
            <View style={styles.accountlist}>
                <Image
                    style={styles.iconImg}
                    source={require('../img/ic_account_shop.png')}
                />
                <Text styles={styles.txt}>我的賣場</Text>
            </View>
            <View>
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
            <View>
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
                        source={require('../img/ic_account_.png')}
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
            <View style={styles.accountlist}>
                <Image
                        style={styles.iconImg}
                        source={require('../img/ic_account_theme.png')}
                    />
                <Text styles={styles.txt}>主題</Text>
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
    accountlist: {
        flexDirection:"row",
        alignItems: "center",
    },
    iconImg: {
        height: 24,
        width: 24,
    },
    txt: {
        fontSize: 14,
        fontWeight: "500",
    },

});

export default AccountScreen;
import React from "react";
import { View , Text , StyleSheet} from "react-native";

const AccountScreen = () => {
    return(
        <View style = {styleS.contain}>
            <View></View>
            <View>
                <Image
                    style={styles.iconImg}
                    source={{ }}
                />
                <Text styles={styles.txt}>我的賣場</Text>
            </View>
            <View>
                <View>
                    <Image
                        style={styles.iconImg}
                        source={{ }}
                    />
                    <Text>會員專區</Text>
                </View>
                <View>
                    <Image
                        style={styles.iconImg}
                        source={{ }}
                    />
                    <Text>購買訂單</Text>
                </View>
                <View>
                    <Image
                        style={styles.iconImg}
                        source={{ }}
                    />
                    <Text>我的信箱</Text>
                </View>
            </View>
            <View>
                <View>
                    <Image
                            style={styles.iconImg}
                            source={{ }}
                        />
                    <Text>我的錢包</Text>
                </View>
                <View>
                    <Image
                        style={styles.iconImg}
                        source={{ }}
                    />
                    <Text>我的優惠券</Text>
                </View>
                <View>
                    <Image
                        style={styles.iconImg}
                        source={{ }}
                    />
                    <Text>我的獎勵</Text>
                </View>
            </View>
            <View>
                <Image
                        style={styles.iconImg}
                        source={{ }}
                    />
                <Text>主題</Text>
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
    iconImg: {
        height: 24,
        width: 24,
    },
    txt: {
        fontSize: 14,
        fontWeight: "500",
    }
});

export default AccountScreen;